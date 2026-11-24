import { describe, expect, it } from 'vitest'
import { buscarEquipe, equipes, montarEquipes } from './teamsConfig.js'

const pagina = () => Promise.resolve({ default: () => null })
const meta = (nome) => ({ nome, tema: 'Tema', resumo: 'Resumo', cor: '#000' })

describe('montarEquipes', () => {
  it('registra a pasta que tem meta.js e index.jsx, com a base primeiro e o resto em ordem', () => {
    const lista = montarEquipes(
      {
        '../teams/equipe-02/meta.js': meta('Dois'),
        '../teams/equipe-base/meta.js': meta('Base'),
        '../teams/equipe-01/meta.js': meta('Um'),
      },
      {
        '../teams/equipe-02/index.jsx': pagina,
        '../teams/equipe-base/index.jsx': pagina,
        '../teams/equipe-01/index.jsx': pagina,
      },
    )

    expect(lista.map((e) => e.slug)).toEqual(['equipe-base', 'equipe-01', 'equipe-02'])
    expect(lista[1]).toMatchObject({ nome: 'Um', rota: '/equipes/equipe-01' })
  })

  it('ignora o _modelo, pasta fora do padrão e pasta sem index.jsx', () => {
    const lista = montarEquipes(
      {
        '../teams/_modelo/meta.js': meta('Modelo'),
        '../teams/Equipe 3/meta.js': meta('Fora do padrão'),
        '../teams/equipe-04/meta.js': meta('Sem página'),
      },
      {
        '../teams/_modelo/index.jsx': pagina,
        '../teams/Equipe 3/index.jsx': pagina,
      },
    )

    expect(lista).toEqual([])
  })
})

describe('registro real', () => {
  it('tem a Equipe Base e esconde o modelo', () => {
    expect(buscarEquipe('equipe-base')?.nome).toBe('Equipe Base & Integração')
    expect(equipes.some((e) => e.slug === '_modelo')).toBe(false)
  })
})
