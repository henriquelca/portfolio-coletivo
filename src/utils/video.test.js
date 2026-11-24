import { describe, expect, it } from 'vitest'
import { idDoYoutube, paraEmbed } from './video.js'

describe('idDoYoutube', () => {
  it('tira o id do embed do YouTube', () => {
    expect(idDoYoutube('https://www.youtube.com/embed/KCrXgy8qtjM')).toBe('KCrXgy8qtjM')
  })

  it.each([null, 'https://player.vimeo.com/video/123', 'https://exemplo.com/embed/x'])('devolve null para %s', (embed) => {
    expect(idDoYoutube(embed)).toBeNull()
  })
})

describe('paraEmbed', () => {
  it.each([
    ['https://www.youtube.com/watch?v=abc123', 'https://www.youtube.com/embed/abc123'],
    ['https://youtube.com/watch?v=abc123&t=42s', 'https://www.youtube.com/embed/abc123'],
    ['https://m.youtube.com/watch?v=abc123', 'https://www.youtube.com/embed/abc123'],
    ['https://youtu.be/abc123?si=xyz', 'https://www.youtube.com/embed/abc123'],
    ['https://www.youtube.com/shorts/abc123', 'https://www.youtube.com/embed/abc123'],
    ['https://www.youtube.com/embed/abc123', 'https://www.youtube.com/embed/abc123'],
    ['https://vimeo.com/123456789', 'https://player.vimeo.com/video/123456789'],
    ['https://vimeo.com/123456789/abcdef1234', 'https://player.vimeo.com/video/123456789?h=abcdef1234'],
    ['https://player.vimeo.com/video/123456789', 'https://player.vimeo.com/video/123456789'],
  ])('converte %s', (entrada, esperado) => {
    expect(paraEmbed(entrada)).toBe(esperado)
  })

  it.each([undefined, '', 'nao é link', 'https://exemplo.com/video.mp4', 'https://www.youtube.com/'])(
    'devolve null para %s',
    (entrada) => {
      expect(paraEmbed(entrada)).toBeNull()
    },
  )
})
