const ETAPAS = [
  ['00 a 20 min', 'Setup', 'A Equipe Base cria o repositório, sobe o template e libera o acesso. As outras equipes escolhem tema, vídeo e textos.'],
  ['20 a 30 min', 'Clone e branch', 'Cada equipe clona o projeto e cria a sua branch feat/equipe-XX.'],
  ['30 a 75 min', 'Desenvolvimento', 'Cada equipe monta a página dentro de src/teams/equipe-XX, com apoio de IA e testando com npm run dev.'],
  ['75 a 90 min', 'Validação e push', 'Cada equipe roda npm run build, faz o commit e envia a branch.'],
  ['90 a 100 min', 'Merge e deploy', 'A Equipe Base revisa os Pull Requests, faz os merges na main e valida o link final na Vercel.'],
]

const OBRIGATORIOS = [
  ['Vídeo com referência', 'Embed do YouTube ou Vimeo, com a fonte, a inspiração ou o roteiro/prompt usado.'],
  ['Descrição da página e do projeto', 'Tema, propósito da entrega e como a IA foi usada no desenvolvimento.'],
  ['Apresentação da equipe', 'Nome ou identidade do grupo e um resumo do perfil e da dinâmica da equipe.'],
  ['Ficha técnica de cada membro', 'Nome completo, papel na atividade, habilidades e ferramentas, mini-bio ou link profissional.'],
]

export default function Desafio() {
  return (
    <section className="secao">
      <h1>O desafio</h1>
      <p className="secao__intro">
        Construir, integrar e publicar em uma única aula um portfólio web coletivo em React + Vite,
        versionado no GitHub e publicado na Vercel. O uso de IA foi liberado, desde que o código
        funcione, siga a arquitetura combinada e seja entendido por quem apresenta.
      </p>

      <h2>Regra de ouro</h2>
      <p>
        Cada equipe mexe só na própria pasta, <code>src/teams/equipe-XX/</code>. O registro da equipe
        no site é o arquivo <code>meta.js</code> dessa pasta: o <code>src/data/teamsConfig.js</code>{' '}
        encontra as pastas sozinho, então nenhum Pull Request precisa editar um arquivo em comum.
      </p>

      <h2>O que cada página tem</h2>
      <div className="grade-simples">
        {OBRIGATORIOS.map(([titulo, texto]) => (
          <article key={titulo} className="caixa">
            <h3>{titulo}</h3>
            <p>{texto}</p>
          </article>
        ))}
      </div>

      <h2>Cronograma da aula</h2>
      <ol className="linha-do-tempo">
        {ETAPAS.map(([tempo, titulo, texto]) => (
          <li key={titulo}>
            <span className="linha-do-tempo__tempo">{tempo}</span>
            <div>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
