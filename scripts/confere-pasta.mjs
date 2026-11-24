// Regra de ouro: a branch feat/equipe-XX só pode mexer em src/teams/equipe-XX/.
// Uso: node scripts/confere-pasta.mjs <branch> <base>   (ex.: feat/equipe-03 origin/main)
import { execFileSync } from 'node:child_process'

const [branch, base = 'origin/main'] = process.argv.slice(2)
const equipe = branch?.match(/^feat\/(equipe-\d{2})$/)?.[1]

if (!equipe) {
  console.log(`Branch "${branch}" não é de equipe de conteúdo (feat/equipe-XX): nada a conferir.`)
  process.exit(0)
}

const alterados = execFileSync('git', ['diff', '--name-only', `${base}...HEAD`], { encoding: 'utf8' })
  .split('\n')
  .filter(Boolean)

const permitido = `src/teams/${equipe}/`
const fora = alterados.filter((arquivo) => !arquivo.startsWith(permitido))

if (fora.length > 0) {
  console.error(
    `A ${equipe} só pode alterar arquivos em ${permitido}. Fora da pasta:\n- ${fora.join('\n- ')}\n` +
      'Se a mudança for mesmo necessária, peça para a Equipe Base fazer.',
  )
  process.exit(1)
}

console.log(`${alterados.length} arquivo(s), todos dentro de ${permitido}.`)
