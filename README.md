# Portfólio Coletivo da Turma

Desafio Integrador: um site só, em **React + Vite**, com uma página por equipe, versionado no GitHub e publicado na **Vercel** a cada merge na `main`.

## Para as equipes de conteúdo (passo a passo)

Precisa de **Node 22** (ou mais novo).

**Ainda sem convite de colaborador?** Não precisa esperar: clique em **Fork** no topo desta página do GitHub e clone o **seu** fork (`git clone https://github.com/<seu-usuario>/portfolio-coletivo.git`). O resto é igual. No passo 5, o `git push` vai para o seu fork, e o GitHub mostra o botão **Compare & pull request** para abrir o PR para `pinheiro-code/portfolio-coletivo`, branch `main`.

1. Clone e crie a branch da sua equipe (minúsculas, número com 2 dígitos):
   ```bash
   git clone https://github.com/pinheiro-code/portfolio-coletivo.git
   cd portfolio-coletivo
   npm install
   git checkout -b feat/equipe-03
   ```
2. **Copie** (não renomeie) a pasta `src/teams/_modelo` para `src/teams/equipe-03` (o seu número, tudo minúsculo).
3. Edite **só** essa pasta:
   - `meta.js`: nome da equipe, tema, resumo e cor. É ele que registra a equipe: cria o card na Home e a rota `/equipes/equipe-03`. **Não edite `src/data/teamsConfig.js`**: ele encontra a sua pasta sozinho, e o CI reprova o PR que mexe nele.
   - `index.jsx`: a sua página, com as 4 seções obrigatórias (vídeo com referência, descrição do projeto e do uso de IA, apresentação da equipe e ficha técnica de cada membro). Mantenha o `export default function ...`.
   - CSS próprio: crie um `.css` dentro da pasta e use classes com o prefixo da equipe (ex.: `.equipe-03-titulo`).
   - Imagens: dentro da pasta, importadas no `index.jsx`. Vídeo: só link do YouTube ou Vimeo, nunca arquivo de vídeo no Git.
4. Teste: `npm run dev` (abre em http://localhost:5173). Antes de enviar, rode **`npm run verifica`**: é o mesmo que o CI confere (pastas, lint, testes e build). Se ele passar aqui, passa no PR.
5. Envie e abra o Pull Request para a `main`:
   ```bash
   git add src/teams/equipe-03
   git commit -m "feat: adiciona pagina e ficha tecnica da equipe 03"
   git push -u origin feat/equipe-03
   ```
   O link para abrir o PR aparece no terminal depois do push.

O CI do Pull Request confere a regra de ouro (branch `feat/equipe-XX` mexendo só em `src/teams/equipe-XX/`), o `meta.js`, o lint, os testes e o build. Se ficar vermelho, a mensagem diz o que corrigir.

Componentes prontos que a sua página pode usar: `VideoReferencia` (vídeo + referência) e `FichaMembro` (card de integrante), em `src/components/`. O `_modelo` já usa os dois.

### Problemas comuns

| sintoma | conserto |
|---|---|
| CI diz que o nome da branch está fora do padrão | `git branch -m feat/equipe-03` e `git push -u origin feat/equipe-03` |
| Pasta criada como `Equipe-03` e renomeada no Explorer, mas o CI continua vendo o nome antigo | `git mv src/teams/Equipe-03 src/teams/tmp` e depois `git mv src/teams/tmp src/teams/equipe-03` |
| CI diz que a `_modelo` mudou | a pasta foi renomeada em vez de copiada: `git checkout origin/main -- src/teams/_modelo` |
| `npm run dev` não abre | confira `node -v`: precisa ser 22 ou mais novo |

## Estrutura

```
src/
├── components/        Header, Footer, cards e blocos compartilhados (Equipe Base)
├── data/
│   └── teamsConfig.js Registro oficial: acha src/teams/*/meta.js e monta cards e rotas
├── pages/             Home, Equipes, O desafio, página da equipe e 404 (Equipe Base)
├── teams/
│   ├── _modelo/       Modelo para copiar (não aparece no site)
│   ├── equipe-base/   Página da Equipe Base
│   └── equipe-XX/     Uma pasta por equipe
├── App.jsx            Rotas
└── main.jsx
```

Rotas: `/` (Home), `/equipes`, `/equipes/<pasta>`, `/desafio`.

## Comandos

| comando | o que faz |
|---|---|
| `npm run dev` | servidor local |
| `npm run verifica` | tudo o que o CI confere, em sequência |
| `npm run build` | build de produção (o mesmo que a Vercel roda) |
| `npm run lint` | lint (oxlint), aviso também reprova |
| `npm test` | testes (Vitest), inclusive um que abre a página de cada equipe |
| `npm run confere` | confere nome das pastas e o `meta.js` de cada equipe |

## Para a Equipe Base

- Branches da Base: `feat/equipe-base` ou `base/<assunto>` (podem mexer em qualquer arquivo).
- Merge só pelo Pull Request, com o CI verde. Nunca push direto na `main`.
- Ordem sugerida dos merges: do PR mais antigo para o mais novo. Como cada equipe mexe só na própria pasta, não há arquivo em comum para dar conflito.
- Liberar acesso a um colega: `gh api -X PUT repos/pinheiro-code/portfolio-coletivo/collaborators/<usuario> -f permission=push` (o colega aceita o convite por e-mail ou em github.com/notifications).
- Deploy: projeto da Vercel ligado a este repositório (framework Vite, comando `npm run build`, saída `dist`). O `vercel.json` faz as rotas funcionarem ao recarregar a página.
