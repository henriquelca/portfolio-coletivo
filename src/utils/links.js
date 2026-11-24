// "linkedin.com/in/fulano" sem https:// vira link interno quebrado; aqui ganha o protocolo.
export function linkExterno(endereco) {
  if (!endereco || typeof endereco !== 'string') return null
  const limpo = endereco.trim()
  if (limpo === '') return null
  return /^https?:\/\//i.test(limpo) ? limpo : `https://${limpo.replace(/^\/+/, '')}`
}
