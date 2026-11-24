import { linkExterno } from '../utils/links.js'

function iniciais(nome) {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('')
    .toUpperCase()
}

// Ficha técnica individual: nome, papel, habilidades, mini-bio e links (opcionais).
export default function FichaMembro({ nome, papel, habilidades, bio, github, linkedin }) {
  const nomeTexto = typeof nome === 'string' && nome.trim() ? nome.trim() : 'Integrante'
  const listaHabilidades = Array.isArray(habilidades) ? habilidades : []
  const linkGithub = linkExterno(github)
  const linkLinkedin = linkExterno(linkedin)

  return (
    <article className="ficha">
      <div className="ficha__avatar" aria-hidden="true">
        {iniciais(nomeTexto)}
      </div>
      <h3>{nomeTexto}</h3>
      {papel && <p className="ficha__papel">{papel}</p>}
      {listaHabilidades.length > 0 && (
        <ul className="ficha__habilidades" aria-label="Habilidades">
          {listaHabilidades.map((habilidade) => (
            <li key={habilidade}>{habilidade}</li>
          ))}
        </ul>
      )}
      {bio && <p>{bio}</p>}
      {(linkGithub || linkLinkedin) && (
        <p className="ficha__links">
          {linkGithub && (
            <a href={linkGithub} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {linkLinkedin && (
            <a href={linkLinkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </p>
      )}
    </article>
  )
}
