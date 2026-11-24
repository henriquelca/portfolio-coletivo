import FichaMembro from '../../components/FichaMembro.jsx'
import VideoReferencia from '../../components/VideoReferencia.jsx'
import meta from './meta.js'

// Modelo da página de uma equipe. Troque os textos; as 4 seções são obrigatórias no desafio.
// CSS próprio: crie um arquivo aqui dentro (ex.: equipe.css) e importe com import './equipe.css'.
// Use classes com o prefixo da equipe (ex.: .equipe-03-titulo) para não afetar as outras páginas.

const membros = [
  {
    nome: 'Nome Completo',
    papel: 'Layout',
    habilidades: ['React', 'CSS'],
    bio: 'Mini-bio em uma ou duas frases.',
    github: 'https://github.com/usuario',
  },
]

export default function PaginaDaEquipe() {
  return (
    <article className="secao" style={{ paddingTop: 0 }}>
      <h1>{meta.nome}</h1>

      <h2>Vídeo</h2>
      <VideoReferencia
        titulo="Vídeo da equipe"
        url=""
        // Cole aqui o link do YouTube ou Vimeo, ex.: "https://www.youtube.com/watch?v=abc123"
        referencia="Fonte, inspiração, tema abordado ou prompt/roteiro usado para criar o vídeo."
      />

      <h2>Sobre a página e o projeto</h2>
      <p>Tema da página, propósito da entrega e como a IA foi usada no desenvolvimento.</p>

      <h2>A equipe</h2>
      <p>Identidade do grupo e um resumo do perfil e da dinâmica da equipe.</p>

      <h2>Ficha técnica</h2>
      <div className="grade-fichas">
        {membros.map((membro) => (
          <FichaMembro key={membro.nome} {...membro} />
        ))}
      </div>
    </article>
  )
}
