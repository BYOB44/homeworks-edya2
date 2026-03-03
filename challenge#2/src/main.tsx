import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ListaInicial} from './Lista.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  <ListaInicial />
  </StrictMode>,
)