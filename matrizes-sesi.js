/* Matrizes SESI 2026 — Socioemocional (Ensino Médio) e Educação Tecnológica
   Fontes: "2026 Matriz Socioemocinal SESI" (xlsx) e "Educação Tecnológica Matriz" (PDF).
   31 habilidades socioemocionais em 10 competências BNCC; 90 habilidades de
   Educação Tecnológica em 4 dimensões (DE/PC/LD/IC). Gerado automaticamente. */
(function (global) {
'use strict';

var MATRIZ_SOCIO = [
 {
  "id": "SE01",
  "competencia": "(1) CONHECIMENTO",
  "nome": "Metacognição",
  "conceito": "Ter consciência sobre o que, como e por que aprender, definindo necessidades/metas e utilizando estratégias/ferramentas de aprendizagem adequadas e avaliando o que aprende."
 },
 {
  "id": "SE02",
  "competencia": "(1) CONHECIMENTO",
  "nome": "Aprendizagem ao longo da vida",
  "conceito": "Ter motivação, responsabilidade e autonomia para aprender, reconhecendo a importância do conhecimento para a vida e para intervir na sociedade."
 },
 {
  "id": "SE03",
  "competencia": "(1) CONHECIMENTO",
  "nome": "Contextualização sociocultural do conhecimento",
  "conceito": "Compreender e respeitar valores, crenças e contextos sociais, políticos e multiculturais que influenciam a produção de conhecimento."
 },
 {
  "id": "SE04",
  "competencia": "(2) PENSAMENTO CIENTÍFICO, CRÍTICO E CRIATIVO",
  "nome": "Pensamento crítico",
  "conceito": "Formular perguntas para garantir base sólida para a investigação interpretando dados e informações com base em critérios científicos, éticos e estéticos e tendo posicionamento crítico. Exercitar a curiosidade intelectual e recorrer à abordagem própria das ciências, incluindo a investigação, a reflexão, a análise crítica, a imaginação e a criatividade, para investigar causas, elaborar e testar hipóteses, formular e resolver problemas e criar soluções (inclusive tecnológicas) com base nos conhecimentos das diferentes áreas."
 },
 {
  "id": "SE05",
  "competencia": "(2) PENSAMENTO CIENTÍFICO, CRÍTICO E CRIATIVO",
  "nome": "Postura investigativa",
  "conceito": "Criar planos de investigação para pesquisar uma questão ou solucionar um problema questionando e modificando ideias existentes e criando soluções inovadoras."
 },
 {
  "id": "SE06",
  "competencia": "(2) PENSAMENTO CIENTÍFICO, CRÍTICO E CRIATIVO",
  "nome": "Criação e execução de novas ideias",
  "conceito": "Analisar problemas de múltiplas perspectivas considerando as questões envolvidas a partir de um olhar holístico e buscando criar múltiplas soluções."
 },
 {
  "id": "SE07",
  "competencia": "(2) PENSAMENTO CIENTÍFICO, CRÍTICO E CRIATIVO",
  "nome": "Iniciativa e empreendimento",
  "conceito": "Realizar ações que conduzam a empreender um projeto que seja pessoal ou socialmente importante e que exija ousadia ou energia"
 },
 {
  "id": "SE08",
  "competencia": "(3) REPERTÓRIO CULTURAL",
  "nome": "Consciência multicultural",
  "conceito": "Demonstrar curiosidade, abertura e acolhimento a diferentes culturas e visões de mundo, reconhecendo e valorizando sua identidade individual e cultural."
 },
 {
  "id": "SE09",
  "competencia": "(3) REPERTÓRIO CULTURAL",
  "nome": "Respeito à diversidade cultural",
  "conceito": "Compreender a importância e a valorização de identidades, manifestações, trocas e colaborações culturais, reconhecendo os desafios e benefícios de se viver e trabalhar em sociedades culturalmente diversas."
 },
 {
  "id": "SE10",
  "competencia": "(4) COMUNICAÇÃO",
  "nome": "Comunicação de ideias para diversos públicos",
  "conceito": "Comunicar ideias, opiniões, emoções e sentimentos e se fazer entender por diferentes públicos e propósitos, demonstrando interesse, abertura, ponderação e respeito em contextos de confrontação de ideias."
 },
 {
  "id": "SE11",
  "competencia": "(4) COMUNICAÇÃO",
  "nome": "Multiletramento",
  "conceito": "Comunicar por meio de plataformas multimídia analógicas e digitais, áudio, textos, imagens, gráficos e linguagens verbais, artísticas, científicas, matemáticas, cartográficas, corporais e multimodais de forma adequada."
 },
 {
  "id": "SE12",
  "competencia": "(5) CULTURA DIGITAL",
  "nome": "Cidadania digital",
  "conceito": "Relacionar-se de forma segura, positiva e responsável em ambientes on-line."
 },
 {
  "id": "SE13",
  "competencia": "(6) TRABALHO E PROJETO DE VIDA",
  "nome": "Perseverança",
  "conceito": "Ser capaz de lidar com estresse, frustração, fracasso, ambiguidades e adversidades para realizar projetos presentes e futuros, buscando e apreciando atividades desafiadoras."
 },
 {
  "id": "SE14",
  "competencia": "(6) TRABALHO E PROJETO DE VIDA",
  "nome": "Adaptabilidade e flexibilidade",
  "conceito": "Adaptar-se de forma consciente às diversas transformações às quais estamos sujeitos no mundo contemporâneo, abrind-se para diversas formas de pensar e agir."
 },
 {
  "id": "SE15",
  "competencia": "(6) TRABALHO E PROJETO DE VIDA",
  "nome": "Compreensão sobre o mundo do trabalho",
  "conceito": "Compreender o mundo do trabalho desde uma perspectiva global, posicionando-se e agindo nele de forma autônoma, crítica e com olhar para o bem comum."
 },
 {
  "id": "SE16",
  "competencia": "(7) ARGUMENTAÇÃO",
  "nome": "Perspectiva Global",
  "conceito": "Interessar-se e explorar questões globais, compreendendo as interrelações entre problemas, tendências e sistemas ao redor do mundo."
 },
 {
  "id": "SE17",
  "competencia": "(7) ARGUMENTAÇÃO",
  "nome": "Consciência Socioambiental",
  "conceito": "Reconhecer a importância, visão sólida e atitude respeitosa em relação a questões sociais e ambientais, engajando-se na promoção dos diretos humanos e da sustentabilidade social e ambiental."
 },
 {
  "id": "SE18",
  "competencia": "(7) ARGUMENTAÇÃO",
  "nome": "Indignação ante injustiças",
  "conceito": "Ter sensibilidade, empatia e indignação frente à injustiças sociais de todas as ordens, de modo a motivar-se e engajar-se na transformação socioambiental,"
 },
 {
  "id": "SE19",
  "competencia": "(7) ARGUMENTAÇÃO",
  "nome": "Esperança pela transformação",
  "conceito": "Acreditar que a transformação socioambiental é possível, de modo a motivar-se e engajar-se na transformação socioambiental."
 },
 {
  "id": "SE20",
  "competencia": "(8) AUTOCONHECIMENTO",
  "nome": "Autogestão",
  "conceito": "Ser capaz de pensar e planejar antes de agir engajando-se com suas realizações."
 },
 {
  "id": "SE21",
  "competencia": "(8) AUTOCONHECIMENTO",
  "nome": "Autoconsciência",
  "conceito": "Ter consciência coerente e integrada sobre si mesmo e sobre como sua identidade, perspectivas e valores influenciam sua tomada de decisão."
 },
 {
  "id": "SE22",
  "competencia": "(8) AUTOCONHECIMENTO",
  "nome": "Autoestima",
  "conceito": "Compreender e desenvolver seus pontos fortes e fragilidades de maneira consciente, respeitosa, assertiva e constante para alcançar realizações presentes e futuras."
 },
 {
  "id": "SE23",
  "competencia": "(8) AUTOCONHECIMENTO",
  "nome": "Consciência emocional",
  "conceito": "Reconhecer suas emoções e sentimentos, bem como a influência que pessoas e situações exercem sobre eles, mantendo equilíbrio em situações emocionalmente desafiadoras."
 },
 {
  "id": "SE24",
  "competencia": "(9) EMPATIA E COOPERAÇÃO",
  "nome": "Empatia",
  "conceito": "Compreender emoções, motivações, pontos de vista e sentimentos dos outros e o impacto de seu comportamento nos demais e atuar em favor de outras pessoas e comunidades."
 },
 {
  "id": "SE25",
  "competencia": "(9) EMPATIA E COOPERAÇÃO",
  "nome": "Diálogo e convivência",
  "conceito": "Utilizar o diálogo para interagir com pares e adultos, construindo, negociando e respeitando as regras de convivência e promovendo entendimento e melhoria do ambiente na escola e comunidade."
 },
 {
  "id": "SE26",
  "competencia": "(9) EMPATIA E COOPERAÇÃO",
  "nome": "Colaboração",
  "conceito": "Trabalhar em equipe, planejando, tomando decisões e realizando ações e projetos de forma colaborativa."
 },
 {
  "id": "SE27",
  "competencia": "(9) EMPATIA E COOPERAÇÃO",
  "nome": "Valorização da diversidade",
  "conceito": "Reconhecer, valorizar e participar em grupos e contextos culturalmente diversos, interagindo, aprendendo com outras culturas, combatendo o preconceito e a falta de engajamento de outros com a diversidade."
 },
 {
  "id": "SE28",
  "competencia": "(10) RESPONSABILIDADE E CIDADANIA",
  "nome": "Direitos e responsabilidades",
  "conceito": "Ter um posicionamento sólido em relação a direitos e responsabilidades em contextos locais e globais, extrapolando interesses individuais e considerando o bem comum."
 },
 {
  "id": "SE29",
  "competencia": "(10) RESPONSABILIDADE E CIDADANIA",
  "nome": "Tomada de decisão responsável",
  "conceito": "Tomar decisão de forma consciente, colaborativa e responsável, considerando fatores objetivos e subjetivos na tomada de decisão, com avaliação das consequências de suas ações e de outros."
 },
 {
  "id": "SE30",
  "competencia": "(10) RESPONSABILIDADE E CIDADANIA",
  "nome": "Postura ética e moral",
  "conceito": "Identificar e incorporar valores importantes para si e para o coletivo de forma a agir com base em valores pessoais, apesar das influências externas, e reconhecer e ponderar valores conflitantes e dilemas éticos antes de se posicionar e tomar decisões."
 },
 {
  "id": "SE31",
  "competencia": "(10) RESPONSABILIDADE E CIDADANIA",
  "nome": "Participação social e liderança",
  "conceito": "Participar ativamente na proposição, implementação e avaliação de solução para problemas locais, regionais, nacionais e globais, liderando de forma corresponsável ações e projetos voltados ao bem comum."
 }
];

var MATRIZ_EDUTECH = [
 {
  "codigo": "ET-DE01",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Identificação de situação.",
  "descricaoProcesso": "Identificar uma questão ou problema a ser resolvido.",
  "texto": "Reconhecer uma situação em que seja possível melhoria, problema a ser resolvido ou aplicação disruptiva a ser implementada.",
  "comoDesenvolver": "Observando e vivenciando situações diversas e compartilhando experiências.",
  "descritor": "Identifica num contexto uma situação em que sejam possíveis melhorias, soluções e disrupção positiva."
 },
 {
  "codigo": "ET-DE02",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Identificação de situação.",
  "descricaoProcesso": "Identificar uma questão ou problema a ser resolvido.",
  "texto": "Compreender a situação levando em consideração seus aspectos sociais, econômicos, ambientais, políticos etc.",
  "comoDesenvolver": "Explorando a situação por meio de visitas, estudos e análises.",
  "descritor": "Descreve a situação como está inserida num contexto social, ambiental, econômico, político etc."
 },
 {
  "codigo": "ET-DE03",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Identificação de situação.",
  "descricaoProcesso": "Identificar uma questão ou problema a ser resolvido.",
  "texto": "Explicar a situação e possíveis melhorias, soluções e aplicações.",
  "comoDesenvolver": "Ilustrando a situação e como ela se constitui em termos de sociedade, meio ambiente, economia, política etc.",
  "descritor": "Relacionando a situação a diversos cenários, vinculando possíveis melhorias, problemas e soluções."
 },
 {
  "codigo": "ET-DE04",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Descrição do desafio.",
  "descricaoProcesso": "Aprofundar no tema ou problema identificado.",
  "texto": "Selecionar um desafio na situação identificada para uma possível melhoria, solução ou aplicação.",
  "comoDesenvolver": "Listando critérios para selecionar um desafio.",
  "descritor": "Descreve os critérios para a seleção do desafio."
 },
 {
  "codigo": "ET-DE05",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Descrição do desafio.",
  "descricaoProcesso": "Aprofundar no tema ou problema identificado.",
  "texto": "Explicar o desafio utilizando informações relevantes para a melhoria, solução ou aplicação.",
  "comoDesenvolver": "Descrevendo o desafio encontrado frente a diversos cenários.",
  "descritor": "Defende com argumentos o desafio reconhecendo as diversas informações que o compõe."
 },
 {
  "codigo": "ET-DE06",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Ideação.",
  "descricaoProcesso": "Aplicar métodos que estimulem a construção de ideias – brainstorming, registro livre de ideias.",
  "texto": "Selecionar informações relevantes para resolver o desafio.",
  "comoDesenvolver": "Selecionando informações relevantes para lidar com um desafio.",
  "descritor": "Explica como as informações estão associadas ao desafio."
 },
 {
  "codigo": "ET-DE07",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Ideação.",
  "descricaoProcesso": "Aplicar métodos que estimulem a construção de ideias – brainstorming, registro livre de ideias.",
  "texto": "Explorar possíveis respostas.",
  "comoDesenvolver": "Descrevendo as possíveis respostas e seus argumentos para o desafio.",
  "descritor": "Utiliza as informações selecionadas para descrever soluções para o desafio."
 },
 {
  "codigo": "ET-DE08",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Ideação.",
  "descricaoProcesso": "Aplicar métodos que estimulem a construção de ideias – brainstorming, registro livre de ideias.",
  "texto": "Selecionar as respostas mais adequadas à solução do desafio.",
  "comoDesenvolver": "Buscando as respostas mais coerentes para resolver o desafio.",
  "descritor": "Escolhe as respostas que solucionam o desafio."
 },
 {
  "codigo": "ET-DE09",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Avaliação ética do impacto da experimentação.",
  "descricaoProcesso": "Considerar previamente o impacto legal, seguro e ético da experimentação.",
  "texto": "Interpretar as respostas para o desafio considerando as consequências ambientais, sociais, econômicas etc.",
  "comoDesenvolver": "Criando hipóteses ao identificar consequências adequadas e inadequadas a experimentação e seus impactos na sociedade.",
  "descritor": "Descreve consequências e impactos sociais, morais e éticos na solução do desafio."
 },
 {
  "codigo": "ET-DE10",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Avaliação ética do impacto da experimentação.",
  "descricaoProcesso": "Considerar previamente o impacto legal, seguro e ético da experimentação.",
  "texto": "Explicar as consequências das respostas para o desafio no meio ambiente, na sociedade etc.",
  "comoDesenvolver": "Pesquisando sobre as consequências positivas e negativas das respostas/ soluções na sociedade, meio ambiente etc.",
  "descritor": "Desenvolve práticas de cidadania conscientes e responsáveis ao compreender quais respostas são adequadas ou não ao desafio."
 },
 {
  "codigo": "ET-DE11",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Avaliação ética do impacto da experimentação.",
  "descricaoProcesso": "Considerar previamente o impacto legal, seguro e ético da experimentação.",
  "texto": "Selecionar a resposta mais adequada à solução do desafio considerando seus impactos ambientas, sociais, econômicos, políticos etc.",
  "comoDesenvolver": "Qualificando as diversas respostas a partir dos impactos identificados na solução de um desafio.",
  "descritor": "Justifica a escolha mais assertiva para a solução do desafio."
 },
 {
  "codigo": "ET-DE12",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Prototipagem.",
  "descricaoProcesso": "Construir um modelo inicial.",
  "texto": "Definir como a solução será desenvolvida considerando materiais e ferramentas disponíveis e a possibilidade de criar novas ferramentas.",
  "comoDesenvolver": "Identificando possibilidades para a criação da solução que será desenvolvida.",
  "descritor": "Define estratégias para a criação da solução do desafio."
 },
 {
  "codigo": "ET-DE13",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Prototipagem.",
  "descricaoProcesso": "Construir um modelo inicial.",
  "texto": "Planejar a construção do protótipo da solução para responder o desafio.",
  "comoDesenvolver": "Descrevendo um plano de ação que aborde os diversos aspectos da construção da solução do desafio e considere as diversas necessidades de material, ferramenta, espaço e tempo.",
  "descritor": "Defende por meio de argumentos um plano de ação para a construção do protótipo considerando os riscos, dificuldades e facilidades."
 },
 {
  "codigo": "ET-DE14",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Prototipagem.",
  "descricaoProcesso": "Construir um modelo inicial.",
  "texto": "Criar o protótipo da solução utilizando materiais e ferramentas diversas disponíveis, com a possibilidade de criar novas ferramentas.",
  "comoDesenvolver": "Manipulando e combinando diferentes materiais e ferramentas para a construção do protótipo, sem medo de errar.",
  "descritor": "Desenvolve soluções, modificando-as ou não, para criar o protótipo."
 },
 {
  "codigo": "ET-DE15",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Experimentação.",
  "descricaoProcesso": "Testar o modelo.",
  "texto": "Planejar o teste do protótipo responsabilizando-se pela segurança no uso dos materiais e ferramentas, impactos ambientais, sociais, econômicos etc., incluindo descarte e desuso.",
  "comoDesenvolver": "Elaborando o plano de aplicação do protótipo considerando custos, segurança, impactos diversos etc.",
  "descritor": "Apresenta o plano de teste, defendendo as escolhas feitas para sua aplicação."
 },
 {
  "codigo": "ET-DE16",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Experimentação.",
  "descricaoProcesso": "Testar o modelo.",
  "texto": "Testar o protótipo considerando todas as condições necessárias para responder o desafio.",
  "comoDesenvolver": "Aplicando o protótipo na tentativa de responder o desafio.",
  "descritor": "Experimenta a solução desenvolvida considerando segurança no uso dos materiais e das pessoas envolvidas."
 },
 {
  "codigo": "ET-DE17",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Experimentação.",
  "descricaoProcesso": "Testar o modelo.",
  "texto": "Registrar todas as informações da experimentação do protótipo.",
  "comoDesenvolver": "Listando as informações coletadas de acordo com a experimentação.",
  "descritor": "Descreve de diferentes maneiras as informações da experimentação."
 },
 {
  "codigo": "ET-DE18",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Análise (feedback e avaliação).",
  "descricaoProcesso": "Analisar os resultados alcançados considerando as opiniões dos envolvidos e suas avaliações.",
  "texto": "Relacionar os dados e informações da experimentação do protótipo com a expectativa da resposta ao desafio.",
  "comoDesenvolver": "Selecionando os dados pertinentes para uma resposta efetiva ao problema.",
  "descritor": "Argumenta se os dados obtidos estão de acordo com a solução esperada, por meio de diferentes registros e informações."
 },
 {
  "codigo": "ET-DE19",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Análise (feedback e avaliação).",
  "descricaoProcesso": "Analisar os resultados alcançados considerando as opiniões dos envolvidos e suas avaliações.",
  "texto": "Comparar os resultados considerando a resposta ao problema e o descarte ou desuso da solução.",
  "comoDesenvolver": "Contrastando os resultados mediante os diversos testes, sua aplicação, descarte e desuso para resolver o desafio.",
  "descritor": "Debate com o grupo sobre os diversos resultados obtidos para a resolução do desafio."
 },
 {
  "codigo": "ET-DE20",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Análise (feedback e avaliação).",
  "descricaoProcesso": "Analisar os resultados alcançados considerando as opiniões dos envolvidos e suas avaliações.",
  "texto": "Qualificar os resultados considerando a possibilidade de refazer os testes, o protótipo ou revisitar a solução inicial.",
  "comoDesenvolver": "Avaliando a possibilidade de implementação da solução mediante custos, replicabilidade, usabilidade, público alvo etc.",
  "descritor": "Defende os resultados alcançados e o desenvolvimento da solução para o desafio."
 },
 {
  "codigo": "ET-DE21",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Produção.",
  "descricaoProcesso": "Construir a solução proposta com base na melhoria do modelo inicial.",
  "texto": "Planejar a construção da solução para o desafio.",
  "comoDesenvolver": "Elaborando um plano de construção da solução.",
  "descritor": "Descreve os processos para a construção da solução considerando questões éticas, segurança, material, custos etc."
 },
 {
  "codigo": "ET-DE22",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Produção.",
  "descricaoProcesso": "Construir a solução proposta com base na melhoria do modelo inicial.",
  "texto": "Construir a solução.",
  "comoDesenvolver": "Desenvolvendo a solução para o problema.",
  "descritor": "Produz a solução adequada que atenda ao desafio proposto."
 },
 {
  "codigo": "ET-DE23",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Implementação.",
  "descricaoProcesso": "Aplicar a solução medindo o impacto.",
  "texto": "Apresentar a solução ao público alvo.",
  "comoDesenvolver": "Descrevendo a solução de maneira adequada ao público alvo.",
  "descritor": "Apresenta a solução utilizando linguagem adequada ao perfil do público alvo e seu contexto."
 },
 {
  "codigo": "ET-DE24",
  "dimensao": "DESIGN",
  "competencia": "Implementar melhoria ou solução disruptiva projetada para as necessidades e oportunidades identificadas em vários contextos por meio da manipulação de material diversificado (físico ou virtual).",
  "objetivo": "Promover mudanças positivas e com qualidade tanto em produtos quanto em processos por meio do uso de materiais e ferramentas diversos, considerando aspectos éticos e de segurança.",
  "processo": "Implementação.",
  "descricaoProcesso": "Aplicar a solução medindo o impacto.",
  "texto": "Definir o meio de compartilhamento de acordo com o público alvo.",
  "comoDesenvolver": "Selecionando as possíveis ferramentas de compartilhamento de informações considerando o perfil do público alvo.",
  "descritor": "Define a melhor ferramenta para o compartilhamento responsável da solução."
 },
 {
  "codigo": "ET-PC01",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Compreensão do problema.",
  "descricaoProcesso": "A partir de uma situação, entender o objetivo da aplicação a ser criada.",
  "texto": "Reconhecer a situação que gera o problema.",
  "comoDesenvolver": "Apresentando a situação.",
  "descritor": "Identifica o problema na situação."
 },
 {
  "codigo": "ET-PC02",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Compreensão do problema.",
  "descricaoProcesso": "A partir de uma situação, entender o objetivo da aplicação a ser criada.",
  "texto": "Compreender a situação que gera o problema.",
  "comoDesenvolver": "Relacionando os conhecimentos prévios com a situação apresentada.",
  "descritor": "Apresenta a situação sob o seu ponto de vista."
 },
 {
  "codigo": "ET-PC03",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Compreensão do problema.",
  "descricaoProcesso": "A partir de uma situação, entender o objetivo da aplicação a ser criada.",
  "texto": "Explicar o problema, decompondo-o em partes menores.",
  "comoDesenvolver": "Defender o problema separando-o em situações e partes menores.",
  "descritor": "Justifica o problema considerando as situações e partes que o compõem."
 },
 {
  "codigo": "ET-PC04",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Levantamento de requisitos.",
  "descricaoProcesso": "Decupar um problema em uma linguagem descritiva que possa ser compreendida para a construção da solução.",
  "texto": "Identificar os requisitos que atendem a solução do problema.",
  "comoDesenvolver": "Relacionando o problema com o que é possível ser feito.",
  "descritor": "Apresenta o que pode ser feito para solucionar problema."
 },
 {
  "codigo": "ET-PC05",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Levantamento de requisitos.",
  "descricaoProcesso": "Decupar um problema em uma linguagem descritiva que possa ser compreendida para a construção da solução.",
  "texto": "Descrever os requisitos por meio de esquemas.",
  "comoDesenvolver": "Organizando visualmente os requisitos para a solução do problema de formas diferentes.",
  "descritor": "Explica o esquema elaborado."
 },
 {
  "codigo": "ET-PC06",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Definição de abordagem metodológica de desenvolvimento.",
  "descricaoProcesso": "Definir um modelo estratégico adequado para gestão do projeto com o objetivo de resolver o problema.",
  "texto": "Identificar metodologias que possam ser utilizadas para desenvolver o código.",
  "comoDesenvolver": "Apresentando diferentes metodologias.",
  "descritor": "Aponta diferenças entre as metodologias apresentadas."
 },
 {
  "codigo": "ET-PC07",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Definição de abordagem metodológica de desenvolvimento.",
  "descricaoProcesso": "Definir um modelo estratégico adequado para gestão do projeto com o objetivo de resolver o problema.",
  "texto": "Comparar metodologias adequadas ao desenvolvimento do código.",
  "comoDesenvolver": "Relacionando as características de cada uma das metodologias.",
  "descritor": "Explica as diferenças entre as metodologias apresentadas."
 },
 {
  "codigo": "ET-PC08",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Definição de abordagem metodológica de desenvolvimento.",
  "descricaoProcesso": "Definir um modelo estratégico adequado para gestão do projeto com o objetivo de resolver o problema.",
  "texto": "Selecionar a metodologia adequada ao desenvolvimento.",
  "comoDesenvolver": "Relacionando a necessidade de solução do problema como as características das metodologias.",
  "descritor": "Escolhe a metodologia fundamentando a aplicação para solução do problema."
 },
 {
  "codigo": "ET-PC09",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Planejamento do código.",
  "descricaoProcesso": "Descrição sistemática de como o código será escrito.",
  "texto": "Identificar as etapas do código.",
  "comoDesenvolver": "Listando as etapas em partes menores para a solução do problema.",
  "descritor": "Descreve as etapas por meio de linguagem adequada."
 },
 {
  "codigo": "ET-PC10",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Planejamento do código.",
  "descricaoProcesso": "Descrição sistemática de como o código será escrito.",
  "texto": "Reconhecer padrões do código que se repetem.",
  "comoDesenvolver": "Buscando repetições a partir de agrupamentos.",
  "descritor": "Agrupa o plano do código em partes mais simples identificando quando se repetem."
 },
 {
  "codigo": "ET-PC11",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Planejamento do código.",
  "descricaoProcesso": "Descrição sistemática de como o código será escrito.",
  "texto": "Estruturar as etapas do código identificando soluções que sejam válidas para outros problemas.",
  "comoDesenvolver": "Esquematizando de maneira organizada as etapas para solução do problema.",
  "descritor": "Apresenta organizadamente o esquema do código mostrando, quando cabível, quais partes podem solucionar outros problemas."
 },
 {
  "codigo": "ET-PC12",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Escrita do código.",
  "descricaoProcesso": "Utilizar uma pseudolinguagem para a solução do problema desenvolvendo efetivamente a programação.",
  "texto": "Identificar as regras para escrever a linguagem do código.",
  "comoDesenvolver": "Apresentando a linguagem e suas regras.",
  "descritor": "Distingue as regras necessárias para utilização da linguagem."
 },
 {
  "codigo": "ET-PC13",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Escrita do código.",
  "descricaoProcesso": "Utilizar uma pseudolinguagem para a solução do problema desenvolvendo efetivamente a programação.",
  "texto": "Utilizar as regras para escrever o código.",
  "comoDesenvolver": "Registrando os possíveis códigos.",
  "descritor": "Escreve o código utilizando as regras da linguagem."
 },
 {
  "codigo": "ET-PC14",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Análise do código.",
  "descricaoProcesso": "Interpretar a programação para verificar inconsistências.",
  "texto": "Conferir se o código cumpre as regras da linguagem de programação utilizada.",
  "comoDesenvolver": "Investigando se o código utilizado irá resolver o problema.",
  "descritor": "Realiza a leitura e interpretação do código."
 },
 {
  "codigo": "ET-PC15",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Execução do código.",
  "descricaoProcesso": "Processar o código para verificar se o resultado está de acordo com a programação planejada.",
  "texto": "Executar o código para resolver o problema.",
  "comoDesenvolver": "Colocando em prática o código.",
  "descritor": "Comanda a execução do código."
 },
 {
  "codigo": "ET-PC16",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Depuração d o código.",
  "descricaoProcesso": "Retomar a escrita do código para fazer o refinamento e validar a programação.",
  "texto": "Identificar se há erro no código.",
  "comoDesenvolver": "Observando se a execução do código resolveu o problema.",
  "descritor": "Aponta os erros encontrados na execução do código."
 },
 {
  "codigo": "ET-PC17",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Depuração d o código.",
  "descricaoProcesso": "Retomar a escrita do código para fazer o refinamento e validar a programação.",
  "texto": "Corrigir o código para uma nova execução, caso necessário.",
  "comoDesenvolver": "Adequando o código para atender o objetivo pretendido.",
  "descritor": "Reescreve código para uma nova execução."
 },
 {
  "codigo": "ET-PC18",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Avaliação da solução do problema.",
  "descricaoProcesso": "Aferir se as etapas de desenvolvimento do código solucionaram o problema.",
  "texto": "Analisar a estrutura das etapas e a escrita do código.",
  "comoDesenvolver": "Revisando a estrutura das etapas e a escrita do código.",
  "descritor": "Relata a execução do teste."
 },
 {
  "codigo": "ET-PC19",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Avaliação da solução do problema.",
  "descricaoProcesso": "Aferir se as etapas de desenvolvimento do código solucionaram o problema.",
  "texto": "Verificar se o problema foi resolvido.",
  "comoDesenvolver": "Analisando se as soluções criadas resolvem o problema.",
  "descritor": "Apresenta solução para o problema."
 },
 {
  "codigo": "ET-PC20",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Implementação da solução.",
  "descricaoProcesso": "Colocar em execução o que foi proposto como solução.",
  "texto": "Registrar o problema e a solução proposta.",
  "comoDesenvolver": "Estruturando todas as etapas do processo.",
  "descritor": "Descreve de variadas formas o processo da identificação à resolução do problema."
 },
 {
  "codigo": "ET-PC21",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Implementação da solução.",
  "descricaoProcesso": "Colocar em execução o que foi proposto como solução.",
  "texto": "Verificar se a solução resolve outros problemas.",
  "comoDesenvolver": "Testando a solução em outras situações.",
  "descritor": "Relata os testes e as possíveis soluções encontradas."
 },
 {
  "codigo": "ET-PC22",
  "dimensao": "PENSAMENTO COMPUTACIONAL",
  "competencia": "Responder um problema transformando-o, independentemente do seu grau de complexidade, em um possível de ser resolvido por meio de linguagem computacional.",
  "objetivo": "Relacionar pensamento e raciocínio computacional na resolução sistêmica de problemas.",
  "processo": "Implementação da solução.",
  "descricaoProcesso": "Colocar em execução o que foi proposto como solução.",
  "texto": "Compartilhar solução de acordo com o público alvo.",
  "comoDesenvolver": "Relatando de diversas formas, o processo de desenvolvimento da solução.",
  "descritor": "Apresenta de variadas formas todo o processo de construção da solução do problema."
 },
 {
  "codigo": "ET-LD01",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Reconhecimento de recursos aplicáveis ao “mundo digital”.",
  "descricaoProcesso": "Entender os recursos tecnológicos disponíveis conforme necessidade.",
  "texto": "Identificar diferentes recursos tecnológicos para acesso, consumo e criação de conteúdo.",
  "comoDesenvolver": "Identificando a presença e os efeitos positivos e negativos da tecnologia na vida das pessoas.",
  "descritor": "Resolve situações problemas utilizando recursos tecnológicos de forma efetiva na vida das pessoas."
 },
 {
  "codigo": "ET-LD02",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Reconhecimento de recursos aplicáveis ao “mundo digital”.",
  "descricaoProcesso": "Entender os recursos tecnológicos disponíveis conforme necessidade.",
  "texto": "Descrever diferentes recursos tecnológicos e suas possíveis aplicações e fontes de informação e comunicação.",
  "comoDesenvolver": "Explicando os recursos tecnológicos disponíveis a depender de sua aplicação.",
  "descritor": "Compreende os impactos positivos e negativos do uso das tecnologias na vida das pessoas."
 },
 {
  "codigo": "ET-LD03",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Seleção do recurso aplicável ao “mundo digital”.",
  "descricaoProcesso": "Escolher recursos tecnológicos disponíveis a partir de critérios estabelecidos.",
  "texto": "Classificar recursos tecnológicos mediante diferentes aplicações e fontes de informação disponíveis para acesso, consumo e criação de conteúdo.",
  "comoDesenvolver": "Descrevendo ferramentas de finalidades geral e periféricas de acordo com o contexto desejado.",
  "descritor": "Relaciona os diversos recursos tecnológicos disponíveis a aplicações e fontes de informação."
 },
 {
  "codigo": "ET-LD04",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Seleção do recurso aplicável ao “mundo digital”.",
  "descricaoProcesso": "Escolher recursos tecnológicos disponíveis a partir de critérios estabelecidos.",
  "texto": "Comparar os recursos tecnológicos considerando suas diversas aplicações e fontes de informação.",
  "comoDesenvolver": "Delimitando cursos tecnológicos para desenhar, desenvolver, publicar, testar e resolver problemas complexos.",
  "descritor": "Apresenta um recurso tecnológico mediante uma resolução de uma situação problema."
 },
 {
  "codigo": "ET-LD05",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Seleção do recurso aplicável ao “mundo digital”.",
  "descricaoProcesso": "Escolher recursos tecnológicos disponíveis a partir de critérios estabelecidos.",
  "texto": "Propor recursos tecnológicos para atender necessidades específicas.",
  "comoDesenvolver": "Sugerindo recursos disponíveis para acesso, consumo e criação de conteúdo.",
  "descritor": "Propõe um recurso tecnológico, a partir de vários outros, para resolver uma situação específica."
 },
 {
  "codigo": "ET-LD06",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Experimentação do recurso tecnológico.",
  "descricaoProcesso": "Vivenciar, como usuário, a utilização dos recursos.",
  "texto": "Explorar o recurso para acesso, consumo e criação de conteúdo de acordo com a aplicação e fonte de informação e comunicação desejada.",
  "comoDesenvolver": "Discutindo o impacto do acesso e uso das tecnologias na criação de conteúdo e nas relações sociais, comerciais e culturais.",
  "descritor": "Retrata o impacto do uso de determinada tecnologia."
 },
 {
  "codigo": "ET-LD07",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Experimentação do recurso tecnológico.",
  "descricaoProcesso": "Vivenciar, como usuário, a utilização dos recursos.",
  "texto": "Usar o recurso para acesso, consumo ou criação de acordo com a aplicação e fonte de informação e comunicação desejada.",
  "comoDesenvolver": "Aplica o recurso demonstrando conhecimento sobre os impactos das tecnologias na vida das pessoas e da sociedade.",
  "descritor": "Utiliza a tecnologia adequada para acesso, consumo ou criação de acordo com a aplicação e fonte de informação e comunicação desejada."
 },
 {
  "codigo": "ET-CD08",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Escolha do recurso tecnológico.",
  "descricaoProcesso": "Definir o recurso adequado à sua necessidade.",
  "texto": "Qualificar o recurso mediante prévia experimentação.",
  "comoDesenvolver": "Utilizando ferramentas multimídia e periféricas para auxiliar na produtividade pessoal e na aprendizagem.",
  "descritor": "Reconhece a finalidade de determinado recurso."
 },
 {
  "codigo": "ET-LD09",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Escolha do recurso tecnológico.",
  "descricaoProcesso": "Definir o recurso adequado à sua necessidade.",
  "texto": "Selecionar o recurso para a aplicação e fonte de informação e comunicação mediante prévia experimentação.",
  "comoDesenvolver": "Utilizando ferramentas tecnológicas para escrita, comunicação e atividades individuais e colaborativas.",
  "descritor": "Reconhece a finalidade de determinado recurso."
 },
 {
  "codigo": "ET-LD10",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Análise de impacto e de utilização ética das tecnologias e dos conteúdos.",
  "descricaoProcesso": "Considerar o uso do recurso de forma segura, responsável e ética.",
  "texto": "Investigar se o recurso está sendo utilizado de forma ética para acesso, consumo ou criação de conteúdo.",
  "comoDesenvolver": "Identificando comportamento sociais éticos positivos e negativos no uso de tecnologias, reconhecendo práticas de cidadania responsáveis.",
  "descritor": "Infere sobre o uso de determinados tipos de tecnologia e suas consequências."
 },
 {
  "codigo": "ET-LD11",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Análise de impacto e de utilização ética das tecnologias e dos conteúdos.",
  "descricaoProcesso": "Considerar o uso do recurso de forma segura, responsável e ética.",
  "texto": "Redefinir o recurso ou a estratégia de uso caso sejam identificados impactos que não sejam éticos.",
  "comoDesenvolver": "Discutindo questões éticas relativas ao uso das tecnologias, redes sociais e das consequências do seu uso inadequado e antiético.",
  "descritor": "Justifica o uso de um recurso ou estratégia utilizada, considerando as questões éticas observadas."
 },
 {
  "codigo": "ET-LD12",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Criação de conteúdo.",
  "descricaoProcesso": "Desenvolver conteúdo de forma segura, responsável e ética.",
  "texto": "Selecionar informações consideradas éticas para a elaboração de conteúdo.",
  "comoDesenvolver": "Listando possíveis informações e fontes que subsidiem e apoiem o conteúdo.",
  "descritor": "Sistematiza as informações e fontes, observando as questões éticas e trazendo as que são relevantes para a elaboração do conteúdo."
 },
 {
  "codigo": "ET-LD13",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Criação de conteúdo.",
  "descricaoProcesso": "Desenvolver conteúdo de forma segura, responsável e ética.",
  "texto": "Utiliza o recurso adequado para a criação do conteúdo.",
  "comoDesenvolver": "Reconhecendo os diversos tipos de recursos disponíveis para criação de conteúdo.",
  "descritor": "Escolhe o recurso que melhor atende a elaboração do conteúdo."
 },
 {
  "codigo": "ET-LD14",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Criação de conteúdo.",
  "descricaoProcesso": "Desenvolver conteúdo de forma segura, responsável e ética.",
  "texto": "Elaborar conteúdos digitais individuais ou coletivos de acordo com o recurso selecionado para ser compartilhado.",
  "comoDesenvolver": "Criando conteúdos digitais enquanto analisa a qualidade e a validade das informações vinculadas.",
  "descritor": "Registra de variadas formas os argumentos e informações do conteúdo a ser compartilhado levando em consideração questões éticas."
 },
 {
  "codigo": "ET-LD15",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Publicação de conteúdo.",
  "descricaoProcesso": "Comunicar e divulgar o conteúdo desenvolvido.",
  "texto": "Escolher recurso para divulgação do conteúdo criado, atentando para a linguagem adequada ao público alvo.",
  "comoDesenvolver": "Selecionando gêneros digitais/orais como vídeos, apresentações, palestras, exposições, entrevistas, debate, noticiário de rádio e TV, narração de jogos esportivos no rádio e TV, aula, debate.",
  "descritor": "Reconhece os diversos tipos de gêneros digitais utilizando linguagem adequada para atingir o público alvo."
 },
 {
  "codigo": "ET-LD16",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Publicação de conteúdo.",
  "descricaoProcesso": "Comunicar e divulgar o conteúdo desenvolvido.",
  "texto": "Aplicar o recurso adequado para apresentação do conteúdo criado.",
  "comoDesenvolver": "Usando o recurso para o conteúdo considerando o meio de divulgação.",
  "descritor": "Adequa o conteúdo considerando o recurso, tipo de divulgação e público-alvo."
 },
 {
  "codigo": "ET-CD17",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Publicação de conteúdo.",
  "descricaoProcesso": "Comunicar e divulgar o conteúdo desenvolvido.",
  "texto": "Definir o meio de compartilhamento de acordo com o público alvo.",
  "comoDesenvolver": "Apresentando recursos de compartilhamento diversos (impressas, digitais e orais).",
  "descritor": "Selecionada adequadamente o recurso para o compartilhamento."
 },
 {
  "codigo": "ET-CD18",
  "dimensao": "LETRAMENTO DIGITAL",
  "competencia": "Comunicar conteúdo elaborado e compartilhado em ambiente tecnológico considerando seu impacto no indivíduo e na sociedade, desenvolvendo e estimulando a participação cívica e a tomada de decisões.",
  "objetivo": "Selecionar recursos tecnológicos para acesso, consumo e criação de conteúdo, considerando aspectos relacionados à segurança e impacto no indivíduo e na sociedade.",
  "processo": "Publicação de conteúdo.",
  "descricaoProcesso": "Comunicar e divulgar o conteúdo desenvolvido.",
  "texto": "Apresentar a solução ao público alvo.",
  "comoDesenvolver": "Aplicando soluções de gêneros digitais/orais de acordo com o contexto.",
  "descritor": "Compartilha conteúdos em meios adequados ao público alvo."
 },
 {
  "codigo": "ET-IC01",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Definição de tema.",
  "descricaoProcesso": "Escolher um assunto relevante a partir de critérios.",
  "texto": "Identificar temas de interesse.",
  "comoDesenvolver": "Explorando micromundo, compartilhando experiências.",
  "descritor": "Utiliza linguagem adequada para descrever o tema de interesse."
 },
 {
  "codigo": "ET-IC02",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Definição de tema.",
  "descricaoProcesso": "Escolher um assunto relevante a partir de critérios.",
  "texto": "Escolher diferentes fontes de informação sobre um tema específico.",
  "comoDesenvolver": "Classificando as fontes de informação que tratem do tema mediante critérios definidos.",
  "descritor": "Apresenta as fontes de informação escolhidas de variadas formas para os colegas de grupo e de sala."
 },
 {
  "codigo": "ET-IC03",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Definição de tema.",
  "descricaoProcesso": "Escolher um assunto relevante a partir de critérios.",
  "texto": "Selecionar fontes que expressem autenticidade e veracidade nas informações associadas ao tema.",
  "comoDesenvolver": "Planejando e testando os critérios já selecionados nas fontes de informação associadas ao tema.",
  "descritor": "Escolhe as fontes de informação e descreve os critérios utilizados associados ao tema."
 },
 {
  "codigo": "ET-IC04",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Definição de tema.",
  "descricaoProcesso": "Escolher um assunto relevante a partir de critérios.",
  "texto": "Comparar informações e suas fontes verificando se o material é compatível e atende a demanda de resolução do tema.",
  "comoDesenvolver": "Distinguindo as informações e suas fontes previamente selecionadas de acordo com as necessidades apresentadas.",
  "descritor": "Apresenta justificativas para utilização ou desconsideração de uma informação ou sua fonte."
 },
 {
  "codigo": "ET-IC05",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Definição de tema.",
  "descricaoProcesso": "Escolher um assunto relevante a partir de critérios.",
  "texto": "Delimitar o tema de acordo com as informações selecionadas e critérios estabelecidos.",
  "comoDesenvolver": "Verificando se o tema atende os critérios para resolução da situação problema.",
  "descritor": "Justifica a escolha do tema apontando adequação aos critérios."
 },
 {
  "codigo": "ET-IC06",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Identificação de situações problema.",
  "descricaoProcesso": "Identificar uma dúvida, questão ou problema a ser resolvido.",
  "texto": "Formular perguntas associadas ao tema.",
  "comoDesenvolver": "Listando questões associadas ao tema que sejam simples, objetivas e concisas.",
  "descritor": "Utiliza linguagem adequada para descrever as questões."
 },
 {
  "codigo": "ET-IC07",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Identificação de situações problema.",
  "descricaoProcesso": "Identificar uma dúvida, questão ou problema a ser resolvido.",
  "texto": "Selecionar perguntas adequadas ao tema.",
  "comoDesenvolver": "Verificando a aplicabilidade das perguntas ao tema.",
  "descritor": "Refaz as perguntas à luz do tema justificando a escolha daquelas consideradas mais adequadas em termos de coerência e coesão com o tema."
 },
 {
  "codigo": "ET-IC08",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Identificação de situações problema.",
  "descricaoProcesso": "Identificar uma dúvida, questão ou problema a ser resolvido.",
  "texto": "Escolher uma pergunta chave adequada ao tema.",
  "comoDesenvolver": "Justificando a escolha da pergunta mais significativa ao tema.",
  "descritor": "Fundamenta o motivo da escolha de uma única pergunta."
 },
 {
  "codigo": "ET-IC09",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Investigação e levantamento de informações.",
  "descricaoProcesso": "Investigar fontes confiáveis de informação sobre o tema.",
  "texto": "Selecionar informações de acordo com autenticidade e veracidade aplicável à resolução da pergunta",
  "comoDesenvolver": "Buscando informações em fontes diversas (vídeo, livros, sites, podcats).",
  "descritor": "Acessa sites, livros, imagens para responder a pergunta."
 },
 {
  "codigo": "ET-IC10",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Investigação e levantamento de informações.",
  "descricaoProcesso": "Investigar fontes confiáveis de informação sobre o tema.",
  "texto": "Selecionar informações de diferentes fontes que respondem adequadamente o problema.",
  "comoDesenvolver": "Relacionando o tema à informação pesquisada considerando a confiabilidade da fonte.",
  "descritor": "Escolhe fontes de informação e descreve se as informações conseguem responder a pergunta."
 },
 {
  "codigo": "ET-IC11",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Proposição de hipóteses.",
  "descricaoProcesso": "Criar suposições para responder à dúvida, questão ou problema.",
  "texto": "Elaborar respostas utilizando informações que respondam o problema.",
  "comoDesenvolver": "Listando possíveis respostas à pergunta chave.",
  "descritor": "Registra as possíveis hipóteses."
 },
 {
  "codigo": "ET-IC12",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Proposição de hipóteses.",
  "descricaoProcesso": "Criar suposições para responder à dúvida, questão ou problema.",
  "texto": "Confirmar se as respostas são verificáveis.",
  "comoDesenvolver": "Descrevendo formas de confirmar as respostas.",
  "descritor": "Explica como as respostas podem ser confirmadas."
 },
 {
  "codigo": "ET-IC13",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Proposição de hipóteses.",
  "descricaoProcesso": "Criar suposições para responder à dúvida, questão ou problema.",
  "texto": "Definir as hipóteses.",
  "comoDesenvolver": "Listando os possíveis resultados do processo de experimentação, coleta e uso de dados.",
  "descritor": "Explicita as hipóteses em linguagem adequada."
 },
 {
  "codigo": "ET-IC14",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Avaliação ética do impacto da experimentação, coleta e uso dos dados.",
  "descricaoProcesso": "Considerar previamente o impacto legal, seguro e ético da experimentação, coleta e uso de dados.",
  "texto": "Organizar a experimentação, coleta e uso de dados ponderando as consequências no meio ambiente, na sociedade etc.",
  "comoDesenvolver": "Registrando o processo de experimentação, coleta e uso dos dados.",
  "descritor": "Descreve o processo de experimentação, coleta e uso dos dados."
 },
 {
  "codigo": "ET-IC15",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Avaliação ética do impacto da experimentação, coleta e uso dos dados.",
  "descricaoProcesso": "Considerar previamente o impacto legal, seguro e ético da experimentação, coleta e uso de dados.",
  "texto": "Investigar o impacto da experimentação, coleta e uso dos dados de forma ética.",
  "comoDesenvolver": "Explicando as consequências da experimentação, coleta e uso dos dados, considerando o tema e as hipóteses definidas.",
  "descritor": "Discute os possíveis resultados da aplicação da experimentação, coleta e uso de dados."
 },
 {
  "codigo": "ET-IC16",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Avaliação ética do impacto da experimentação, coleta e uso dos dados.",
  "descricaoProcesso": "Considerar previamente o impacto legal, seguro e ético da experimentação, coleta e uso de dados.",
  "texto": "Replanejar a ação caso sejam identificados impactos que não sejam éticos.",
  "comoDesenvolver": "Reelaborando o planejamento a partir da identificação dos impactos não éticos.",
  "descritor": "Reestrutura o planejamento em linguagem adequada."
 },
 {
  "codigo": "ET-IC17",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Experimentação e coleta de dados.",
  "descricaoProcesso": "Testar as hipóteses coletando dados.",
  "texto": "Executar a experimentação e coleta de dados.",
  "comoDesenvolver": "Realizando as atividades previstas no planejamento.",
  "descritor": "Aplica a coleta de dados ou experimento."
 },
 {
  "codigo": "ET-IC18",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Experimentação e coleta de dados.",
  "descricaoProcesso": "Testar as hipóteses coletando dados.",
  "texto": "Registrar as informações da experimentação e da coleta de dados.",
  "comoDesenvolver": "Escrevendo de maneira objetiva e clara as informações coletadas.",
  "descritor": "Apresenta o registro da coleta das informações."
 },
 {
  "codigo": "ET-IC19",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Análise e interpretação de dados.",
  "descricaoProcesso": "Organizar os dados interpretando e categorizando-os.",
  "texto": "Relacionar os dados à pergunta chave e às hipóteses.",
  "comoDesenvolver": "Combinando os dados com as hipóteses levantadas.",
  "descritor": "Justifica a relação entre os dados e a pergunta ou hipóteses."
 },
 {
  "codigo": "ET-IC20",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Análise e interpretação de dados.",
  "descricaoProcesso": "Organizar os dados interpretando e categorizando-os.",
  "texto": "Selecionar os dados que respondam a pergunta chave e às hipóteses.",
  "comoDesenvolver": "Escolhendo os dados que melhor respondem a pergunta e as hipóteses.",
  "descritor": "Classifica os dados que melhor respondem as perguntas."
 },
 {
  "codigo": "ET-IC21",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Análise e interpretação de dados.",
  "descricaoProcesso": "Organizar os dados interpretando e categorizando-os.",
  "texto": "Interpretar os dados de acordo com a pergunta chave e as hipóteses.",
  "comoDesenvolver": "Organizando os dados para responder a pergunta e exemplificar as hipóteses.",
  "descritor": "Explica como a pergunta chave e hipóteses estão sendo atendidas."
 },
 {
  "codigo": "ET-IC22",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Solução da situação problema e validação de hipóteses.",
  "descricaoProcesso": "Responder dúvida, questão ou problema apontado corroborando ou não as hipóteses levantadas.",
  "texto": "Consolidar os dados interpretados para responder o problema, validar a adequação ética e confirmar as hipóteses.",
  "comoDesenvolver": "Combinando os dados para atender a pergunta e as hipóteses de maneira ética.",
  "descritor": "Justifica a organização dos dados."
 },
 {
  "codigo": "ET-IC23",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Solução da situação problema e validação de hipóteses.",
  "descricaoProcesso": "Responder dúvida, questão ou problema apontado corroborando ou não as hipóteses levantadas.",
  "texto": "Arguir os resultados analisados à luz das hipóteses levantadas, argumentando, inclusive, sob o ponto de vista ético.",
  "comoDesenvolver": "Descrevendo como os dados atendem a pergunta e as hipóteses.",
  "descritor": "Expõe o porquê dos resultados atingidos, inclusive com relação a questões éticas."
 },
 {
  "codigo": "ET-IC24",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Compartilhamento de descobertas.",
  "descricaoProcesso": "Compartilhar e comunicar as descobertas da pesquisa.",
  "texto": "Descrever a solução em linguagem adequada ao público alvo.",
  "comoDesenvolver": "Reelaborando as respostas utilizando linguagem adequada.",
  "descritor": "Ilustra as respostas utilizando linguagem adequada."
 },
 {
  "codigo": "ET-IC25",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Compartilhamento de descobertas.",
  "descricaoProcesso": "Compartilhar e comunicar as descobertas da pesquisa.",
  "texto": "Definir o meio de compartilhamento de acordo com o público alvo.",
  "comoDesenvolver": "Escolhendo a melhor estratégia para comunicar as descobertas.",
  "descritor": "Apresenta argumentos para escolha da melhor estratégia."
 },
 {
  "codigo": "ET-IC26",
  "dimensao": "INICIAÇÃO CIENTÍFICA",
  "competencia": "Compartilhar descobertas ao buscar soluções para situações problemas por meio de investigação científica.",
  "objetivo": "Elaborar questionamentos e argumentos que possibilitem análise crítica das situações e tenham como consequência soluções para problemas atuais.",
  "processo": "Compartilhamento de descobertas.",
  "descricaoProcesso": "Compartilhar e comunicar as descobertas da pesquisa.",
  "texto": "Apresentar a solução ao público alvo.",
  "comoDesenvolver": "Sintetizando o processo de resolução da situação problema.",
  "descritor": "Explicando o processo de resolução da situação problema ou validação da hipótese."
 }
];

var _socioPorId = {};
MATRIZ_SOCIO.forEach(function (h) { _socioPorId[h.id] = h; });
var _edutechPorCodigo = {};
MATRIZ_EDUTECH.forEach(function (h) { _edutechPorCodigo[h.codigo] = h; });

global.MATRIZ_SOCIO = MATRIZ_SOCIO;
global.MATRIZ_EDUTECH = MATRIZ_EDUTECH;
global.matrizSocioPorId = function (id) { return _socioPorId[id] || null; };
global.matrizEdTechPorCodigo = function (codigo) { return _edutechPorCodigo[codigo] || null; };
global.matrizSocioCompetencias = function () {
  var out = [];
  MATRIZ_SOCIO.forEach(function (h) {
    var ult = out[out.length - 1];
    if (!ult || ult.competencia !== h.competencia) out.push({ competencia: h.competencia, itens: [h] });
    else ult.itens.push(h);
  });
  return out;
};
global.matrizEdTechDimensoes = function () {
  var out = [];
  MATRIZ_EDUTECH.forEach(function (h) {
    var ult = out[out.length - 1];
    if (!ult || ult.dimensao !== h.dimensao) out.push({ dimensao: h.dimensao, competencia: h.competencia, objetivo: h.objetivo, itens: [h] });
    else ult.itens.push(h);
  });
  return out;
};
global.matrizSocioLabel = function (item) {
  return item ? item.nome + ' — ' + item.competencia : '';
};
global.matrizEdTechLabel = function (item) {
  return item ? item.codigo + ' — ' + item.texto : '';
};
})(typeof window !== 'undefined' ? window : globalThis);
