import { paraEmbed } from '../utils/video.js'

// Vídeo da equipe (YouTube ou Vimeo) com a referência logo abaixo, como o desafio pede.
export default function VideoReferencia({ titulo, url, referencia }) {
  const embed = paraEmbed(url)

  return (
    <figure className="video">
      {embed ? (
        <iframe
          src={embed}
          title={titulo}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="video__vazio">Cole aqui o link do vídeo (YouTube ou Vimeo).</div>
      )}
      <figcaption>
        <strong>Referência:</strong> {referencia}
      </figcaption>
    </figure>
  )
}
