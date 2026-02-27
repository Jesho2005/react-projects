import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './calc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
