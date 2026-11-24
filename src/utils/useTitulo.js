import { useEffect } from 'react'

const SITE = 'Portfólio Coletivo da Turma'

export function useTitulo(titulo) {
  useEffect(() => {
    document.title = titulo ? `${titulo} | ${SITE}` : SITE
  }, [titulo])
}
