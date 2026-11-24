// Confere as pastas de src/teams antes do build: nome no padrão, meta.js e index.jsx presentes,
// e os campos que o card da Home usa preenchidos. Roda no CI e com `npm run confere`.
import { existsSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const PASTA_TEAMS = resolve('src/teams')
const PADRAO = /^equipe-(\d{2}|base)$/
const CAMPOS = ['nome', 'tema', 'resumo']

const erros = []
let total = 0

for (const entrada of readdirSync(PASTA_TEAMS, { withFileTypes: true })) {
  if (!entrada.isDirectory() || entrada.name.startsWith('_')) continue

  const pasta = entrada.name
  const caminho = join(PASTA_TEAMS, pasta)

  if (!PADRAO.test(pasta)) {
    erros.push(`${pasta}: o nome da pasta tem que ser equipe-XX, com 2 dígitos (ex.: equipe-03)`)
    continue
  }

  for (const arquivo of ['meta.js', 'index.jsx']) {
    if (!existsSync(join(caminho, arquivo))) erros.push(`${pasta}: falta o arquivo ${arquivo}`)
  }
  if (!existsSync(join(caminho, 'meta.js'))) continue

  const { default: meta } = await import(pathToFileURL(join(caminho, 'meta.js')).href)
  for (const campo of CAMPOS) {
    if (typeof meta?.[campo] !== 'string' || meta[campo].trim() === '') {
      erros.push(`${pasta}: meta.js sem o campo "${campo}" preenchido`)
    }
  }
  total += 1
}

if (erros.length > 0) {
  console.error('Pastas de equipe com problema:\n- ' + erros.join('\n- '))
  process.exit(1)
}

console.log(`${total} equipe(s) registrada(s) corretamente.`)
