import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { equipes } from './teamsConfig.js'

// Teste de fumaça: a página de cada equipe (e o modelo que elas copiam) carrega e desenha sem
// erro. Sem ele, um index.jsx sem "export default" passaria no build e quebraria só no site.
async function renderizar(carregar) {
  const modulo = await carregar()
  expect(typeof modulo.default, 'o index.jsx precisa de "export default function ..."').toBe('function')
  return renderToString(createElement(MemoryRouter, null, createElement(modulo.default)))
}

describe.each(equipes.map((equipe) => [equipe.slug, equipe]))('página da %s', (_slug, equipe) => {
  it('carrega e renderiza', async () => {
    expect((await renderizar(equipe.carregar)).length).toBeGreaterThan(0)
  })
})

describe('_modelo', () => {
  it('carrega e renderiza', async () => {
    expect((await renderizar(() => import('../teams/_modelo/index.jsx'))).length).toBeGreaterThan(0)
  })
})
