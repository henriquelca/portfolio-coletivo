import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Desafio from './pages/Desafio.jsx'
import Equipes from './pages/Equipes.jsx'
import Home from './pages/Home.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'
import PaginaEquipe from './pages/PaginaEquipe.jsx'

function VoltaAoTopo() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <VoltaAoTopo />
      <Header />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipes" element={<Equipes />} />
          <Route path="/equipes/:slug" element={<PaginaEquipe />} />
          <Route path="/desafio" element={<Desafio />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
