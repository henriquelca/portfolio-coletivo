import { describe, expect, it } from 'vitest'
import { linkExterno } from './links.js'

describe('linkExterno', () => {
  it.each([
    ['https://github.com/fulano', 'https://github.com/fulano'],
    ['http://exemplo.com', 'http://exemplo.com'],
    ['linkedin.com/in/fulano', 'https://linkedin.com/in/fulano'],
    ['  github.com/fulano  ', 'https://github.com/fulano'],
  ])('%s vira %s', (entrada, esperado) => {
    expect(linkExterno(entrada)).toBe(esperado)
  })

  it.each([undefined, null, '', '   ', 42])('devolve null para %s', (entrada) => {
    expect(linkExterno(entrada)).toBeNull()
  })
})
