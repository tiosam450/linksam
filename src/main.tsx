import React from 'react'
import ReactDOM from 'react-dom/client'
import rotas from './rotas.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>,
)
