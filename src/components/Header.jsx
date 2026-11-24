import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { equipes } from '../data/teamsConfig.js'
import './Header.css'

export default function Header() {
  const { pathname } = useLocation()
  // Guarda em que página o menu do celular foi aberto: mudou de página, ele fecha sozinho.
  const [abertoEm, setAbertoEm] = useState(null)
  const aberto = abertoEm === pathname
  const setAberto = (alternar) => setAbertoEm(alternar(aberto) ? pathname : null)

  return (
    <header className="topo">
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
          onClick={() => setAberto((valor) => !valor)}
        >
          {aberto ? 'Fechar' : 'Menu'}
        </button>

        <nav
          id="menu-principal"
          className={`topo__nav ${aberto ? 'topo__nav--aberto' : ''}`}
          onClick={() => setAbertoEm(null)}
        >
          <NavLink to="/" end>
            Início
          </NavLink>
          <NavLink to="/equipes" end>
            Equipes <span className="topo__contador">{equipes.length}</span>
          </NavLink>
          <NavLink to="/desafio">O desafio</NavLink>
          <NavLink to="/equipes/equipe-base">Equipe Base</NavLink>
        </nav>
      </div>
    </header>
  )
}
