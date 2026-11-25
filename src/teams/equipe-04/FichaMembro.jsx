import s from './Equipe04.module.css'

export default function FichaMembro({ membro }) {
  return (
    <article className={s.ficha}>
      <h3>{membro.nome}</h3>
      <p className={s.papel}>{membro.papel}</p>
      <p>{membro.bio}</p>
      <ul className={s.habilidades} aria-label="Habilidades e ferramentas">
        {membro.habilidades.map((habilidade) => (
          <li key={habilidade}>{habilidade}</li>
        ))}
      </ul>
      {membro.github && (
        <a href={membro.github} target="_blank" rel="noreferrer">GitHub de {membro.nome.split(' ')[0]}</a>
      )}
    </article>
  )
}
