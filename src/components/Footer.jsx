import { Link } from 'react-router-dom'
import './Footer.css'

const REPOSITORIO = 'https://github.com/pinheiro-code/portfolio-coletivo'
const ANO = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape__grade">
        <div>
          <strong>Portfólio Coletivo da Turma</strong>
          <p>Desafio Integrador: cada equipe, uma página; uma turma, um site só.</p>
        </div>

        <nav aria-label="Rodapé">
          <Link to="/">Início</Link>
          <Link to="/equipes">Equipes</Link>
          <Link to="/desafio">O desafio</Link>
          <a href={REPOSITORIO} target="_blank" rel="noreferrer">
            Código no GitHub
          </a>
        </nav>

        <p className="rodape__credito">
          Feito com React + Vite e publicado na Vercel. Integração: Equipe Base, {ANO}.
        </p>
      </div>
    </footer>
  )
}
