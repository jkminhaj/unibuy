import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// React Router
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
// AOS - Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlobalProvider from './context/GlobalProvider'
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>,
)
