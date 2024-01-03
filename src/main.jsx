import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// React Router
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
// AOS - Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
