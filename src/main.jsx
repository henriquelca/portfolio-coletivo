import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Depois de um deploy novo, uma aba aberta antes dele pede arquivos que não existem mais.
// Recarregar busca a versão nova em vez de deixar a página da equipe sem carregar.
window.addEventListener('vite:preloadError', (evento) => {
  evento.preventDefault()
  window.location.reload()
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
