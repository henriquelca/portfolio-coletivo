import { useState } from 'react'
import { idDoYoutube, paraEmbed } from '../utils/video.js'

// Vídeo da equipe (YouTube ou Vimeo) com a referência logo abaixo, como o desafio pede.
// No YouTube a página mostra a miniatura com um botão de play e só carrega o player no clique,
// o que deixa a página leve mesmo com vários vídeos.
export default function VideoReferencia({ titulo, url, referencia }) {
  const [tocando, setTocando] = useState(false)
  const embed = paraEmbed(url)
  const idYoutube = idDoYoutube(embed)

  let conteudo
  if (!embed) {
    conteudo = <div className="video__vazio">Cole aqui o link do vídeo (YouTube ou Vimeo).</div>
  } else if (idYoutube && !tocando) {
    conteudo = (
      <button type="button" className="video__previa" onClick={() => setTocando(true)}>
        <img src={`https://i.ytimg.com/vi/${idYoutube}/hqdefault.jpg`} alt="" loading="lazy" />
        <span className="video__play" aria-hidden="true" />
        <span className="video__titulo">Assistir: {titulo}</span>
      </button>
    )
  } else {
    conteudo = (
      <iframe
        src={idYoutube ? `${embed}?autoplay=1` : embed}
        title={titulo}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return (
    <figure className="video">
      {conteudo}
      <figcaption>
        <strong>Referência:</strong> {referencia}
      </figcaption>
    </figure>
  )
}
