import { equipes } from '../data/teamsConfig.js'
import CardEquipe from './CardEquipe.jsx'

export default function GradeEquipes() {
  const conteudo = equipes.filter((equipe) => equipe.slug !== 'equipe-base')

  return (
    <>
      <div className="grade-equipes">
        {equipes.map((equipe) => (
          <CardEquipe key={equipe.slug} equipe={equipe} />
        ))}
      </div>
      {conteudo.length === 0 && (
        <p className="aviso">
          As equipes de conteúdo ainda estão produzindo. Cada página aparece aqui assim que o
          Pull Request da equipe é mesclado na main.
        </p>
      )}
    </>
  )
}
