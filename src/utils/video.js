// Aceita o link que a equipe copia do navegador (YouTube ou Vimeo) e devolve o link de embed.
// Link que não é de YouTube nem Vimeo volta null, e a página mostra um aviso em vez de quebrar.
export function paraEmbed(url) {
  if (!url) return null

  let endereco
  try {
    endereco = new URL(url)
  } catch {
    return null
  }

  const host = endereco.hostname.replace(/^www\.|^m\./, '')

  if (host === 'youtu.be') {
    const id = endereco.pathname.slice(1).split('/')[0]
    return id ? `https://www.youtube.com/embed/${id}` : null
  }

  if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    if (endereco.pathname.startsWith('/embed/')) return url
    const id =
      endereco.searchParams.get('v') ||
      endereco.pathname.match(/^\/(?:shorts|live)\/([^/]+)/)?.[1]
    return id ? `https://www.youtube.com/embed/${id}` : null
  }

  if (host === 'player.vimeo.com') return url

  if (host === 'vimeo.com') {
    // Vídeo "não listado" tem um hash depois do id (vimeo.com/123/abc1); sem ele o player recusa.
    const [, id, hash] = endereco.pathname.match(/^\/(\d+)(?:\/([0-9a-f]+))?/) ?? []
    if (!id) return null
    return `https://player.vimeo.com/video/${id}${hash ? `?h=${hash}` : ''}`
  }

  return null
}

// Id do vídeo do YouTube a partir do link de embed, para mostrar a miniatura antes do player.
export function idDoYoutube(embed) {
  return embed?.match(/^https:\/\/www\.youtube(?:-nocookie)?\.com\/embed\/([\w-]+)/)?.[1] ?? null
}
