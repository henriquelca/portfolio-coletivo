import { Link } from 'react-router-dom'
import { useTitulo } from '../utils/useTitulo.js'

export default function NaoEncontrada() {
  useTitulo('Página não encontrada')

  return (
    <section className="secao nao-encontrada">
      <h1>Página não encontrada</h1>
      <p>Esse endereço não existe no portfólio, ou a equipe ainda não enviou a página dela.</p>
      <Link to="/" className="botao">
        Voltar para o início
      </Link>
    </section>
  )
}
