import FichaMembro from '../../components/FichaMembro.jsx'
import VideoReferencia from '../../components/VideoReferencia.jsx'
import meta from './meta.js'
import membros from './membros.js'

// Funcionalidades do PetCare, resumidas do relatório do sistema (capítulo 2).
const FUNCIONALIDADES = [
  ['Agendamento sem conflito', 'O tutor escolhe serviço, data e horário numa grade que mostra só os horários livres. Dois tutores no mesmo horário: só o primeiro é aceito.'],
  ['Cadastro de pets', 'O tutor cadastra, edita e remove os próprios pets, e a remoção pede o nome do animal para evitar engano.'],
  ['Agenda do dia', 'A atendente vê os atendimentos do dia, busca por pet, tutor ou CPF, confirma, conclui e cancela com motivo.'],
  ['Login por perfil', 'Tutor, atendente e administrador entram pela mesma tela, e cada um cai na sua área. Cinco senhas erradas bloqueiam a conta por 15 minutos.'],
]

const TECNOLOGIAS = ['Angular 22', 'Bootstrap 5', 'Node.js + Express', 'MySQL 8', 'JWT', 'Vercel', 'Render', 'Aiven']

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
        Somos a equipe do <strong>PetCare</strong> e fomos sorteados para o papel de{' '}
        <strong>Equipe Base & Integração</strong> do portfólio: montamos a fundação técnica do site e
        integramos as páginas das outras equipes até o link público.
      </p>

      <h2>Vídeo</h2>
      <VideoReferencia
        titulo="PetCare Project - T242-26"
        url="https://www.youtube.com/watch?v=AYvsXYkjJBs"
        referencia={
          <>
            "PetCare Project - T242-26", apresentação do nosso sistema gravada pela equipe e publicada
            por Thalys Silva no YouTube. O tema é o PetCare, o trabalho final da disciplina: cada
            integrante explica a parte que fez, com a demonstração do sistema publicado.
          </>
        }
      />

      <h2>Sobre o projeto: PetCare</h2>
      <p>
        O PetCare é um sistema web para petshop gerenciar clientes, pets e o agendamento de banho,
        tosa e consulta veterinária. Ele substitui a agenda de papel ou planilha e resolve três
        problemas do dia a dia: horários marcados em dobro, histórico do animal que se perde e tutor
        que só consegue agendar por telefone no horário comercial.
      </p>
      <div className="grade-simples">
        {FUNCIONALIDADES.map(([titulo, texto]) => (
          <section key={titulo} className="caixa">
            <h3>{titulo}</h3>
            <p>{texto}</p>
          </section>
        ))}
      </div>
      <p>
        <strong>Tecnologias:</strong> {TECNOLOGIAS.join(', ')}. O sistema está no ar em{' '}
        <a href="https://petcare-unifor.vercel.app" target="_blank" rel="noreferrer">
          petcare-unifor.vercel.app
        </a>
        .
      </p>

      <h2>Nosso papel no portfólio</h2>
      <p>Como Equipe Base, entregamos para a turma inteira:</p>
      <div className="grade-simples">
        {ENTREGAS.map(([titulo, texto]) => (
          <section key={titulo} className="caixa">
            <h3>{titulo}</h3>
            <p>{texto}</p>
          </section>
        ))}
      </div>

      <h3>Como uma página chega ao site</h3>
      <ol className="caminho">
        {CAMINHO.map(([titulo, texto]) => (
          <li key={titulo}>
            <strong>{titulo}</strong>
            <p>{texto}</p>
          </li>
        ))}
      </ol>

      <h3>Como a IA foi usada</h3>
      <p>
        No portfólio, usamos IA para gerar o esqueleto do projeto, propor a arquitetura de registro
        automático das equipes, escrever o CSS e revisar o código antes do merge. Toda sugestão passou
        pelo build, pelo lint e pelos testes antes de entrar na main, e a equipe sabe explicar cada
        parte.
      </p>

      <h2>A equipe</h2>
      <p>
        Somos seis integrantes, os mesmos do PetCare. A dinâmica é a mesma do trabalho final: cada um
        cuida de uma camada (front-end, back-end, banco, segurança, usabilidade e apresentação), e tudo
        entra no código por Pull Request revisado.
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
