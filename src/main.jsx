
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* hace referencia al use strict de js */}
    <HashRouter>
      {/* es el componente de React que permite gestionar rutas (en este caso dentro de App)*/}
      <App />
    </HashRouter>
  </StrictMode>,
)