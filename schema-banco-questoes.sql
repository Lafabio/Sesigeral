-- ============================================================
-- BANCO DE QUESTÕES — SESI/SC
-- Script SQL para criar no Supabase SQL Editor
-- ============================================================

-- Tabela principal de questões
CREATE TABLE IF NOT EXISTS questoes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  enunciado TEXT NOT NULL,
  alternativas JSONB,
  gabarito TEXT,
  tipo_questao TEXT NOT NULL DEFAULT 'multipla_escolha',
  area_conhecimento TEXT,
  disciplina TEXT,
  habilidade_bncc TEXT,
  habilidade_descricao TEXT,
  nivel_dificuldade TEXT,
  estilo_questao TEXT,
  ano_serie TEXT,
  tema TEXT,
  imagem_url TEXT,
  observacoes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para performance nos filtros mais usados
CREATE INDEX IF NOT EXISTS idx_questoes_disciplina ON questoes(disciplina);
CREATE INDEX IF NOT EXISTS idx_questoes_area ON questoes(area_conhecimento);
CREATE INDEX IF NOT EXISTS idx_questoes_dificuldade ON questoes(nivel_dificuldade);
CREATE INDEX IF NOT EXISTS idx_questoes_estilo ON questoes(estilo_questao);
CREATE INDEX IF NOT EXISTS idx_questoes_ano ON questoes(ano_serie);
CREATE INDEX IF NOT EXISTS idx_questoes_tipo ON questoes(tipo_questao);
CREATE INDEX IF NOT EXISTS idx_questoes_created ON questoes(created_at DESC);

-- Habilitar RLS (Row Level Security)
ALTER TABLE questoes ENABLE ROW LEVEL SECURITY;

-- Política para permitir todas as operações (app single-user)
CREATE POLICY "Permitir todas operacoes" ON questoes
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- ============================================================
-- BUCKET DE STORAGE PARA IMAGENS
-- Criar manualmente no Supabase Dashboard → Storage:
-- Nome do bucket: questoes-imagens
-- Pública: Sim
-- ============================================================
