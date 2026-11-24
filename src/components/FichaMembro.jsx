// Ficha técnica individual: nome, papel, habilidades, mini-bio e links (opcionais).
export default function FichaMembro({ nome, papel, habilidades = [], bio, github, linkedin }) {
  return (
    <article className="ficha">
      <div className="ficha__avatar" aria-hidden="true">
        {nome
          .split(' ')
          .filter(Boolean)
          .slice(0, 2)
          .map((parte) => parte[0])
          .join('')}
      </div>
      <h3>{nome}</h3>
      <p className="ficha__papel">{papel}</p>
      {habilidades.length > 0 && (
        <ul className="ficha__habilidades">
          {habilidades.map((habilidade) => (
            <li key={habilidade}>{habilidade}</li>
          ))}
        </ul>
      )}
      {bio && <p>{bio}</p>}
      {(github || linkedin) && (
        <p className="ficha__links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </p>
      )}
    </article>
  )
}
