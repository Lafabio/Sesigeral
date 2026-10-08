/* ============================================================================
   enem-cliente.js — cliente da API pública do ENEM
   Base: https://api.enem.dev/v1  ·  Docs: https://docs.enem.dev
   - Fila: 1 requisição por vez, no mínimo 1,1s entre chamadas
   - Retry automático em 429 (usa o header Retry-After)
   - Cache em localStorage (provas 30 dias, questões 7 dias)
   - Conversão para o formato do Banco de Questões (banco-questoes/gerador)
   Uso: <script src="enem-cliente.js"></script>  ->  objeto global ENEM
   ============================================================================ */
(function (global) {
  'use strict';

  var BASE = 'https://api.enem.dev/v1';
  var TTL_EXAMS = 30 * 24 * 3600 * 1000;
  var TTL_QUESTOES = 7 * 24 * 3600 * 1000;
  var MIN_INTERVALO = 1100;
  var TIMEOUT_MS = 15000;
  var ULTIMO_REQUEST = 0;

  var DISCIPLINAS = {
    'linguagens': 'Linguagens, Códigos e suas Tecnologias',
    'ciencias-humanas': 'Ciências Humanas e suas Tecnologias',
    'ciencias-natureza': 'Ciências da Natureza e suas Tecnologias',
    'matematica': 'Matemática e suas Tecnologias'
  };

  function dormir(ms) {
    return new Promise(function (r) { setTimeout(r, ms); });
  }

  function cacheGet(chave, ttl) {
    try {
      var raw = localStorage.getItem(chave);
      if (!raw) return null;
      var obj = JSON.parse(raw);
      if (!obj || !obj.t || (Date.now() - obj.t) > ttl) {
        localStorage.removeItem(chave);
        return null;
      }
      return obj.d;
    } catch (e) { return null; }
  }

  function cacheSet(chave, dados) {
    try { localStorage.setItem(chave, JSON.stringify({ t: Date.now(), d: dados })); } catch (e) {}
  }

  function mensagemErro(resp, corpo) {
    var msg = 'Erro ' + resp.status + ' na API ENEM';
    if (corpo && corpo.error && corpo.error.message) msg += ': ' + corpo.error.message;
    return msg;
  }

  async function get(caminho) {
    var espera = Math.max(0, (ULTIMO_REQUEST + MIN_INTERVALO) - Date.now());
    if (espera > 0) await dormir(espera);
    ULTIMO_REQUEST = Date.now();

    var ultimoErro = null;
    for (var tentativa = 1; tentativa <= 4; tentativa++) {
      var ctrl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
      var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, TIMEOUT_MS) : null;
      var resp = null;
      try {
        resp = await fetch(BASE + caminho, ctrl ? { signal: ctrl.signal } : undefined);
      } catch (e) {
        if (timer) clearTimeout(timer);
        ultimoErro = (e && e.name === 'AbortError')
          ? new Error('Tempo esgotado ao consultar a API ENEM.')
          : new Error('Falha de rede ao consultar a API ENEM' + (e && e.message ? ' (' + e.message + ')' : ''));
        await dormir(700 * tentativa);
        continue;
      }
      if (timer) clearTimeout(timer);

      if (resp.status === 429) {
        var espera429 = parseFloat(resp.headers.get('Retry-After'));
        if (isNaN(espera429) || espera429 < 0.5) espera429 = 1;
        ultimoErro = new Error('Muitas requisições à API ENEM (limite de 1 por segundo). Nova tentativa em ' + Math.ceil(espera429) + 's…');
        if (tentativa >= 4) break;
        await dormir(espera429 * 1000);
        continue;
      }

      var corpo = null;
      try { corpo = await resp.json(); } catch (e) { corpo = null; }

      if (!resp.ok) throw new Error(mensagemErro(resp, corpo));
      return corpo;
    }
    throw ultimoErro || new Error('Falha ao consultar a API ENEM.');
  }

  async function exams() {
    var cache = cacheGet('enem_exams', TTL_EXAMS);
    if (Array.isArray(cache) && cache.length) return cache;
    var dados = await get('/exams');
    if (Array.isArray(dados) && dados.length) cacheSet('enem_exams', dados);
    return dados;
  }

  var MEM_QUESTOES = {};

  async function questoes(ano, opts) {
    opts = opts || {};
    var chave = 'enem_quests_' + ano;
    if (!opts.forcar) {
      if (Array.isArray(MEM_QUESTOES[chave]) && MEM_QUESTOES[chave].length) return MEM_QUESTOES[chave];
      var cache = cacheGet(chave, TTL_QUESTOES);
      if (Array.isArray(cache) && cache.length) { MEM_QUESTOES[chave] = cache; return cache; }
    }
    var mapa = {};
    var offset = 0;
    for (var pag = 0; pag < 40; pag++) {
      var pagina = await get('/exams/' + encodeURIComponent(ano) + '/questions?limit=50&offset=' + offset);
      var lista = (pagina && pagina.questions) || [];
      lista.forEach(function (q) { if (q && q.index != null) mapa[q.index] = q; });
      var meta = (pagina && pagina.metadata) || {};
      if (!meta.hasMore || !lista.length) break;
      offset += 50;
    }
    var ordenadas = Object.keys(mapa)
      .map(function (k) { return mapa[k]; })
      .sort(function (a, b) { return (a.index || 0) - (b.index || 0); });
    if (ordenadas.length) { MEM_QUESTOES[chave] = ordenadas; cacheSet(chave, ordenadas); }
    return ordenadas;
  }

  function converter(q, ano) {
    var partes = [];
    if (q.context) partes.push(q.context);
    if (q.alternativesIntroduction) partes.push(q.alternativesIntroduction);
    var enunciado = partes.join('\n\n').trim();

    var alternativas = (q.alternatives || []).map(function (a) {
      var texto = String(a.text == null ? '' : a.text).trim();
      if (!texto && a.file) texto = '(ver imagem da alternativa)';
      return { letra: a.letter, texto: texto, correta: !!a.isCorrect };
    });
    if (alternativas.length && !alternativas.some(function (a) { return a.correta; }) && q.correctAlternative) {
      alternativas.forEach(function (a) { a.correta = (a.letra === q.correctAlternative); });
    }

    var imagem = (q.files && q.files[0]) || null;
    if (!imagem) {
      var comArquivo = (q.alternatives || []).filter(function (a) { return a.file; })[0];
      if (comArquivo) imagem = comArquivo.file;
    }

    var disciplina = DISCIPLINAS[q.discipline] || q.discipline || '';
    var anoUsado = q.year || ano;
    var gabarito = q.correctAlternative;
    if (!gabarito) {
      var certa = alternativas.filter(function (a) { return a.correta; })[0];
      gabarito = certa ? certa.letra : 'A';
    }

    return {
      enunciado: enunciado,
      alternativas: alternativas,
      gabarito: gabarito,
      tipo_questao: 'multipla_escolha',
      area_conhecimento: disciplina,
      disciplina: disciplina,
      habilidade_bncc: '',
      nivel_dificuldade: '',
      estilo_questao: 'enem',
      ano_serie: 'Ensino Médio',
      tema: 'ENEM ' + anoUsado,
      imagem_url: imagem,
      observacoes: 'Fonte: ENEM ' + anoUsado + ' – questão ' + (q.index || '') + (q.language ? ' (' + q.language + ')' : '')
    };
  }

  function rotuloDisciplina(codigo) {
    return DISCIPLINAS[codigo] || codigo || 'Todas';
  }

  global.ENEM = {
    exams: exams,
    questoes: questoes,
    converter: converter,
    rotuloDisciplina: rotuloDisciplina,
    DISCIPLINAS: DISCIPLINAS,
    get: get
  };
})(typeof window !== 'undefined' ? window : globalThis);
