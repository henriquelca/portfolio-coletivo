import GradeEquipes from '../components/GradeEquipes.jsx'

export default function Equipes() {
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
