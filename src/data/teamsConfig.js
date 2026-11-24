import { lazy } from 'react'

// Registro oficial das equipes. Ninguém edita este arquivo para entrar no portfólio:
// cada equipe cria src/teams/equipe-XX/meta.js e index.jsx, e o Vite encontra as pastas
// sozinho. Assim duas equipes nunca mexem na mesma linha e o merge não dá conflito.
const metas = import.meta.glob('../teams/*/meta.js', { eager: true, import: 'default' })
const paginas = import.meta.glob('../teams/*/index.jsx')

export const PASTA_VALIDA = /^equipe-(\d{2}|base)$/

function pastaDoCaminho(caminho) {
  return caminho.split('/').at(-2)
}

function ordem(a, b) {
  if (a.slug === 'equipe-base') return -1
  if (b.slug === 'equipe-base') return 1
  return a.slug.localeCompare(b.slug)
}

export function montarEquipes(metasPorCaminho, paginasPorCaminho) {
  return Object.entries(metasPorCaminho)
    .map(([caminho, meta]) => {
      const slug = pastaDoCaminho(caminho)
      const carregar = paginasPorCaminho[caminho.replace(/meta\.js$/, 'index.jsx')]
      return { slug, meta, carregar }
    })
    .filter(({ slug, meta, carregar }) => PASTA_VALIDA.test(slug) && meta && carregar)
    .map(({ slug, meta, carregar }) => ({
      slug,
      rota: `/equipes/${slug}`,
      nome: meta.nome,
      tema: meta.tema,
      resumo: meta.resumo,
      cor: meta.cor,
      carregar,
      Pagina: lazy(carregar),
    }))
    .sort(ordem)
}

export const equipes = montarEquipes(metas, paginas)

export const equipesDeConteudo = equipes.filter((equipe) => equipe.slug !== 'equipe-base')

export function buscarEquipe(slug) {
  return equipes.find((equipe) => equipe.slug === slug)
}
