import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { equipesDeConteudo } from '../data/teamsConfig.js'
import './Header.css'

export default function Header() {
  const { pathname } = useLocation()
  // Guarda em que página o menu do celular foi aberto: mudou de página, ele fecha sozinho.
  const [abertoEm, setAbertoEm] = useState(null)
  const aberto = abertoEm === pathname
  const fechar = () => setAbertoEm(null)

  return (
    <header className="topo">
      <a href="#conteudo" className="pular">
        Pular para o conteúdo
      </a>
      <div className="topo__barra">
        <Link to="/" className="topo__marca">
          <span className="topo__selo" aria-hidden="true">PC</span>
          Portfólio Coletivo
        </Link>

        <button
          type="button"
          className="topo__menu-botao"
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAbertoEm(aberto ? null : pathname)}
        >
          {aberto ? 'Fechar' : 'Menu'}
        </button>

        <nav
          id="menu-principal"
          aria-label="Principal"
          className={`topo__nav ${aberto ? 'topo__nav--aberto' : ''}`}
        >
          <NavLink to="/" end onClick={fechar}>
            Início
          </NavLink>
          <NavLink to="/equipes" end onClick={fechar}>
            Equipes{' '}
            <span className="topo__contador" aria-label={`${equipesDeConteudo.length} equipes de conteúdo`}>
              {equipesDeConteudo.length}
            </span>
          </NavLink>
          <NavLink to="/desafio" onClick={fechar}>
            O desafio
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
