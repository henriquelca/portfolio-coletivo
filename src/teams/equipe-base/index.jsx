import FichaMembro from '../../components/FichaMembro.jsx'
import meta from './meta.js'
import membros from './membros.js'

const ENTREGAS = [
  ['Repositório e template', 'Projeto React + Vite no GitHub, com react-router-dom e a estrutura de pastas combinada.'],
  ['Home, menu e rodapé', 'Vitrine com um card por equipe, navegação no topo (com menu no celular) e rodapé compartilhado.'],
  ['Registro sem conflito', 'Cada equipe se registra pelo meta.js da própria pasta; o teamsConfig.js encontra as pastas sozinho.'],
  ['Revisão automática', 'GitHub Actions roda lint, testes e build em todo Pull Request e avisa quando uma equipe mexe fora da própria pasta.'],
  ['Deploy na Vercel', 'Cada merge na main publica o site. As rotas funcionam ao recarregar a página graças ao vercel.json.'],
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

      <h2>Quem somos</h2>
      <p>
        Somos seis integrantes e já trabalhamos juntos no PetCare, o sistema de gestão de petshop
        (clientes, pets e agendamentos) do trabalho final da disciplina, publicado em{' '}
        <a href="https://petcare-unifor.vercel.app" target="_blank" rel="noreferrer">
          petcare-unifor.vercel.app
        </a>
        . A dinâmica é a mesma: cada um cuida de uma camada (front-end, back-end, banco, segurança,
        usabilidade e apresentação), e tudo entra no código por Pull Request revisado.
      </p>

      <h2>O que a Equipe Base entregou</h2>
      <div className="grade-simples">
        {ENTREGAS.map(([titulo, texto]) => (
          <section key={titulo} className="caixa">
            <h3>{titulo}</h3>
            <p>{texto}</p>
          </section>
        ))}
      </div>

      <h2>Como a IA foi usada</h2>
      <p>
        Usamos IA para gerar o esqueleto do projeto, propor a arquitetura de registro automático das
        equipes, escrever o CSS e revisar o código antes do merge. Toda sugestão passou pelo build,
        pelo lint e pelos testes antes de entrar na main, e a equipe sabe explicar cada parte.
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
