import GradeEquipes from '../components/GradeEquipes.jsx'
import { useTitulo } from '../utils/useTitulo.js'

export default function Equipes() {
  useTitulo('Equipes')

  return (
    <section className="secao">
      <h1>Equipes</h1>
      <p className="secao__intro">
        Escolha uma equipe para ver o vídeo, a descrição do projeto e a ficha técnica dos membros.
      </p>
      <GradeEquipes />
    </section>
  )
}
