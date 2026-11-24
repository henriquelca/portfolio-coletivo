import { Link } from 'react-router-dom'

export default function CardEquipe({ equipe }) {
  return (
    <Link to={equipe.rota} className="card-equipe" style={{ '--cor-equipe': equipe.cor }}>
      <span className="card-equipe__numero">{equipe.slug.replace('equipe-', '')}</span>
      <h3>{equipe.nome}</h3>
      <p className="card-equipe__tema">{equipe.tema}</p>
      <p>{equipe.resumo}</p>
      <span className="card-equipe__acao">Ver página</span>
    </Link>
  )
}
