// Confere as pastas de src/teams antes do build: nome no padrão, meta.js e index.jsx presentes,
// e os campos que o card da Home usa preenchidos. Roda no CI e com `npm run confere`.
import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const PASTA_TEAMS = resolve('src/teams')
const PADRAO = /^equipe-(\d{2}|base)$/
const CAMPOS = ['nome', 'tema', 'resumo']

// Nomes vêm do disco e também do Git: no Windows, renomear "Equipe-06" para "equipe-06" no
// Explorer muda o disco, mas o Git (e a Vercel, que roda em Linux) continua com o nome antigo.
function pastasNoGit() {
  try {
    return execFileSync('git', ['ls-files', 'src/teams'], { encoding: 'utf8' })
      .split('\n')
      .map((arquivo) => arquivo.split('/')[2])
      .filter(Boolean)
  } catch {
    return []
  }
}

const noDisco = readdirSync(PASTA_TEAMS, { withFileTypes: true })
  .filter((entrada) => entrada.isDirectory())
  .map((entrada) => entrada.name)
const noGit = new Set(pastasNoGit())
const pastas = [...new Set([...noDisco, ...noGit])].filter((pasta) => !pasta.startsWith('_')).sort()

const erros = []
let total = 0

for (const pasta of pastas) {
  if (!PADRAO.test(pasta)) {
    const certo = pasta.toLowerCase()
    const dica = PADRAO.test(certo) && noGit.has(pasta)
      ? ` No Git ela ainda se chama "${pasta}". Corrija com: git mv src/teams/${pasta} src/teams/tmp && git mv src/teams/tmp src/teams/${certo}`
      : ''
    erros.push(`${pasta}: o nome da pasta tem que ser equipe-XX, minúsculo e com 2 dígitos (ex.: equipe-03).${dica}`)
    continue
  }

  const caminho = join(PASTA_TEAMS, pasta)
  for (const arquivo of ['meta.js', 'index.jsx']) {
    if (!existsSync(join(caminho, arquivo))) erros.push(`${pasta}: falta o arquivo ${arquivo}`)
  }
  if (!existsSync(join(caminho, 'meta.js'))) continue

  let meta
  try {
    ;({ default: meta } = await import(pathToFileURL(join(caminho, 'meta.js')).href))
  } catch (erro) {
    erros.push(`${pasta}: meta.js com erro (${erro.message.split('\n')[0]}). Ele precisa de "export default { ... }".`)
    continue
  }

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
