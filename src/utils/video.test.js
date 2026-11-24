import { describe, expect, it } from 'vitest'
import { paraEmbed } from './video.js'

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
