import { Suspense } from 'react'
import { Link, useParams } from 'react-router-dom'
import ErroNaPagina from '../components/ErroNaPagina.jsx'
import { buscarEquipe } from '../data/teamsConfig.js'
import { useTitulo } from '../utils/useTitulo.js'
import NaoEncontrada from './NaoEncontrada.jsx'

export default function PaginaEquipe() {
  const { slug } = useParams()
  const equipe = buscarEquipe(slug)
  useTitulo(equipe?.nome ?? 'Página não encontrada')

  if (!equipe) return <NaoEncontrada />

  const { Pagina } = equipe

  return (
    <div className="pagina-equipe">
      <Link to="/equipes" className="voltar">
        Voltar para as equipes
      </Link>
      <ErroNaPagina key={slug} slug={slug}>
        <Suspense fallback={<p className="carregando">Carregando a página da equipe...</p>}>
          <Pagina />
        </Suspense>
      </ErroNaPagina>
    </div>
  )
}
