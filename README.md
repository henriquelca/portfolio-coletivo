# Portfólio Coletivo da Turma

Desafio Integrador: um site só, em **React + Vite**, com uma página por equipe, versionado no GitHub e publicado na **Vercel** a cada merge na `main`.

## Para as equipes de conteúdo (passo a passo)

1. Clone e crie a branch da sua equipe (minúsculas, número com 2 dígitos):
   ```bash
   git clone https://github.com/pinheiro-code/portfolio-coletivo.git
   cd portfolio-coletivo
   npm install
   git checkout -b feat/equipe-03
   ```
2. Copie a pasta `src/teams/_modelo` para `src/teams/equipe-03` (o seu número).
3. Edite **só** essa pasta:
   - `meta.js`: nome da equipe, tema, resumo e cor. É ele que cria o card na Home e a rota `/equipes/equipe-03`. **Não edite `src/data/teamsConfig.js`**: ele encontra a sua pasta sozinho.
   - `index.jsx`: a sua página, com as 4 seções obrigatórias (vídeo com referência, descrição do projeto e do uso de IA, apresentação da equipe e ficha técnica de cada membro).
   - CSS próprio: crie um `.css` dentro da pasta e use classes com o prefixo da equipe (ex.: `.equipe-03-titulo`).
   - Imagens: dentro da pasta, importadas no `index.jsx`. Vídeo: só link do YouTube ou Vimeo, nunca arquivo de vídeo no Git.
4. Teste: `npm run dev` (abre em http://localhost:5173) e depois `npm run build`.
5. Envie e abra o Pull Request para a `main`:
   ```bash
   git add src/teams/equipe-03
   git commit -m "feat: adiciona pagina e ficha tecnica da equipe 03"
   git push -u origin feat/equipe-03
   ```

O CI do Pull Request confere a regra de ouro (só a sua pasta mudou), o `meta.js`, o lint, os testes e o build. Se ficar vermelho, a mensagem diz o que corrigir.

Componentes prontos que a sua página pode usar: `VideoReferencia` (vídeo + referência) e `FichaMembro` (card de integrante), em `src/components/`. O `_modelo` já usa os dois.

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
| `npm run build` | build de produção (o mesmo que a Vercel roda) |
| `npm run lint` | lint (oxlint), aviso também reprova |
| `npm test` | testes (Vitest) |
| `npm run confere` | confere nome das pastas e o `meta.js` de cada equipe |

## Para a Equipe Base

- Merge só pelo Pull Request, com o CI verde. Nunca push direto na `main`.
- Ordem sugerida dos merges: do PR mais antigo para o mais novo. Como cada equipe mexe só na própria pasta, não há arquivo em comum para dar conflito.
- Deploy: projeto da Vercel ligado a este repositório (framework Vite, comando `npm run build`, saída `dist`). O `vercel.json` faz as rotas funcionarem ao recarregar a página.
