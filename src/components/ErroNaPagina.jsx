import { Component } from 'react'

// Se a página de uma equipe quebrar, só ela some: o menu e o rodapé continuam na tela.
// Quem usa passa key={slug}, então trocar de equipe começa sem o erro da anterior.
export default class ErroNaPagina extends Component {
  state = { erro: null }

  static getDerivedStateFromError(erro) {
    return { erro }
  }

  componentDidCatch(erro) {
    console.error(`Erro na página ${this.props.slug}:`, erro)
  }

  render() {
    if (!this.state.erro) return this.props.children

    return (
      <div className="aviso" role="alert">
        <strong>A página desta equipe tem um erro e não pôde ser exibida.</strong>
        <p>
          Recarregue a página. Se continuar, a equipe precisa rodar <code>npm run verifica</code> na
          branch dela e corrigir o que aparecer.
        </p>
      </div>
    )
  }
}
