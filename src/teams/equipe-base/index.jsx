import FichaMembro from '../../components/FichaMembro.jsx'
import VideoReferencia from '../../components/VideoReferencia.jsx'
import meta from './meta.js'
import membros from './membros.js'

const ENTREGAS = [
  ['Repositório e template', 'Projeto React + Vite no GitHub, com react-router-dom e a estrutura de pastas combinada.'],
  ['Home, menu e rodapé', 'Vitrine com um card por equipe, navegação no topo (com menu no celular) e rodapé compartilhado.'],
  ['Registro sem conflito', 'Cada equipe se registra pelo meta.js da própria pasta; o teamsConfig.js encontra as pastas sozinho.'],
  ['Revisão automática', 'GitHub Actions roda lint, testes e build em todo Pull Request e avisa quando uma equipe mexe fora da própria pasta.'],
  ['Deploy na Vercel', 'Cada merge na main publica o site. As rotas funcionam ao recarregar a página graças ao vercel.json.'],
]

const CAMINHO = [
  ['Branch', 'A equipe cria feat/equipe-XX e trabalha só em src/teams/equipe-XX.'],
  ['Pull Request', 'A equipe envia a branch e abre o PR para a main.'],
  ['CI', 'O GitHub confere a pasta, o meta.js, o lint, os testes e o build.'],
  ['Merge', 'Com o CI verde, a Equipe Base revisa e mescla na main.'],
  ['No ar', 'A Vercel publica sozinha e o card da equipe aparece na Home.'],
]

export default function PaginaEquipeBase() {
  return (
    <article className="secao" style={{ paddingTop: 0 }}>
      <h1>{meta.nome}</h1>
      <p className="secao__intro">
        Fomos a equipe sorteada para o papel de <strong>Equipe Base & Integração</strong>: a fundação
        técnica do portfólio. Nosso trabalho é fazer as páginas das outras equipes chegarem juntas, sem
        quebrar o build, a um link público.
      </p>

      <h2>Vídeo</h2>
      <VideoReferencia
        titulo="Vite in 100 Seconds"
        url="https://www.youtube.com/watch?v=KCrXgy8qtjM"
        referencia={
          <>
            "Vite in 100 Seconds", do canal Fireship no YouTube. Escolhemos porque explica, em 100
            segundos, a ferramenta que sustenta o portfólio: é o Vite que roda o <code>npm run dev</code>{' '}
            e gera o build que a Vercel publica.
          </>
        }
      />

      <h2>Sobre a página e o projeto</h2>
      <p>
        Esta página apresenta a equipe que montou a base do portfólio e o que essa base entrega para
        a turma inteira:
      </p>
      <div className="grade-simples">
        {ENTREGAS.map(([titulo, texto]) => (
          <section key={titulo} className="caixa">
            <h3>{titulo}</h3>
            <p>{texto}</p>
          </section>
        ))}
      </div>

      <h3>Como a IA foi usada</h3>
      <p>
        Usamos IA para gerar o esqueleto do projeto, propor a arquitetura de registro automático das
        equipes, escrever o CSS e revisar o código antes do merge. Toda sugestão passou pelo build,
        pelo lint e pelos testes antes de entrar na main, e a equipe sabe explicar cada parte.
      </p>

      <h2>Como uma página chega ao site</h2>
      <ol className="caminho">
        {CAMINHO.map(([titulo, texto]) => (
          <li key={titulo}>
            <strong>{titulo}</strong>
            <p>{texto}</p>
          </li>
        ))}
      </ol>

      <h2>A equipe</h2>
      <p>
        Somos seis integrantes e já trabalhamos juntos no PetCare, o sistema de gestão de petshop
        (clientes, pets e agendamentos) do trabalho final da disciplina, publicado em{' '}
        <a href="https://petcare-unifor.vercel.app" target="_blank" rel="noreferrer">
          petcare-unifor.vercel.app
        </a>
        . A dinâmica é a mesma: cada um cuida de uma camada (front-end, back-end, banco, segurança,
        usabilidade e apresentação), e tudo entra no código por Pull Request revisado.
      </p>

      <h2>Ficha técnica</h2>
      <div className="grade-fichas">
        {membros.map((membro) => (
          <FichaMembro key={membro.nome} {...membro} />
        ))}
      </div>
    </article>
  )
}
