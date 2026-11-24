import { Link } from 'react-router-dom'
import GradeEquipes from '../components/GradeEquipes.jsx'
import { useTitulo } from '../utils/useTitulo.js'

const PASSOS = [
  {
    titulo: 'Equipe Base',
    texto: 'Cria o repositório, o roteamento, a Home, o menu e o rodapé, revisa os Pull Requests e publica na Vercel.',
  },
  {
    titulo: 'Equipes de conteúdo',
    texto: 'Cada equipe trabalha só na própria pasta (src/teams/equipe-XX) e entrega uma página com vídeo, descrição e ficha técnica.',
  },
  {
    titulo: 'Site publicado',
    texto: 'Cada merge na main vira deploy na Vercel. A apresentação acontece direto pelo link público.',
  },
]

export default function Home() {
  useTitulo(null)

  return (
    <>
      <section className="heroi">
        <div className="heroi__interno">
          <p className="heroi__chamada">Desafio Integrador</p>
          <h1>Portfólio Coletivo da Turma</h1>
          <p className="heroi__texto">
            Um único site em React + Vite, construído, integrado e publicado pela turma inteira em
            uma aula. Cada card abaixo leva à página de uma equipe, com o vídeo, o projeto e a
            ficha técnica de quem fez.
          </p>
          <div className="heroi__acoes">
            <Link to="/equipes" className="botao">
              Ver as equipes
            </Link>
            <Link to="/desafio" className="botao botao--secundario">
              Como foi o desafio
            </Link>
          </div>
        </div>
      </section>

      <section className="secao">
        <h2>Como o portfólio foi montado</h2>
        <ol className="passos">
          {PASSOS.map((passo, indice) => (
            <li key={passo.titulo}>
              <span className="passos__numero">{indice + 1}</span>
              <h3>{passo.titulo}</h3>
              <p>{passo.texto}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="secao" id="equipes">
        <h2>Vitrine das equipes</h2>
        <GradeEquipes />
      </section>
    </>
  )
}
