import { Suspense } from 'react'
import { Link, useParams } from 'react-router-dom'
import { buscarEquipe } from '../data/teamsConfig.js'
import NaoEncontrada from './NaoEncontrada.jsx'

export default function PaginaEquipe() {
  const { slug } = useParams()
  const equipe = buscarEquipe(slug)

  if (!equipe) return <NaoEncontrada />

  const { Pagina } = equipe

  return (
    <div className="pagina-equipe">
      <Link to="/equipes" className="voltar">
        Voltar para as equipes
      </Link>
      <Suspense fallback={<p className="carregando">Carregando a página da equipe...</p>}>
        <Pagina />
      </Suspense>
    </div>
  )
}
