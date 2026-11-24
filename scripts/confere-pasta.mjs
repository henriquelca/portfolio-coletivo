// Regra de ouro: cada equipe de conteúdo só mexe em src/teams/equipe-XX/, na branch feat/equipe-XX.
// A Equipe Base usa a branch feat/equipe-base (ou base/<assunto>) e pode mexer em tudo.
// Uso: node scripts/confere-pasta.mjs <branch> <base>   (ex.: feat/equipe-03 origin/main)
import { execFileSync } from 'node:child_process'

const [branch = '', base = 'origin/main'] = process.argv.slice(2)

if (branch === 'feat/equipe-base' || branch.startsWith('base/')) {
  console.log(`Branch "${branch}" é da Equipe Base: pode alterar qualquer arquivo.`)
  process.exit(0)
}

// --no-renames: pasta renomeada (ex.: _modelo virou equipe-03) mostra também o caminho antigo.
const alterados = execFileSync('git', ['diff', '--name-only', '--no-renames', `${base}...HEAD`], {
  encoding: 'utf8',
})
  .split('\n')
  .filter(Boolean)

const equipeDaBranch = branch.match(/^feat\/(equipe-\d{2})$/)?.[1]
const erros = []

if (!equipeDaBranch) {
  erros.push(
    `O nome da branch "${branch}" está fora do padrão. Use feat/equipe-XX, com 2 dígitos ` +
      '(ex.: feat/equipe-03). Para renomear: git branch -m feat/equipe-03',
  )
}

const pastaPermitida = equipeDaBranch ? `src/teams/${equipeDaBranch}/` : null
const fora = alterados.filter((arquivo) => !pastaPermitida || !arquivo.startsWith(pastaPermitida))

if (pastaPermitida && fora.length > 0) {
  erros.push(`A ${equipeDaBranch} só pode alterar arquivos em ${pastaPermitida}. Fora da pasta:\n  - ${fora.join('\n  - ')}`)
  if (fora.includes('src/data/teamsConfig.js')) {
    erros.push('O registro da equipe é o meta.js da sua pasta: desfaça a mudança no teamsConfig.js.')
  }
  if (fora.some((arquivo) => arquivo.startsWith('src/teams/_modelo/'))) {
    erros.push('A pasta _modelo foi renomeada ou alterada: ela tem que ser COPIADA, não renomeada.')
  }
  erros.push('Se a mudança fora da pasta for mesmo necessária, peça para a Equipe Base fazer.')
}

if (erros.length > 0) {
  console.error(erros.join('\n'))
  process.exit(1)
}

console.log(`${alterados.length} arquivo(s), todos dentro de ${pastaPermitida}.`)
