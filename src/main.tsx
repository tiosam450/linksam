import React from 'react'
import ReactDOM from 'react-dom/client'
import rotas from './rotas/rotas.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer autoClose={2000} />
    <RouterProvider router={rotas} />
  </React.StrictMode>,
)
