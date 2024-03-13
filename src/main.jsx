import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './navbar/navbar.jsx'
import Footer from './footer/footer.jsx'
import Main from './main/main.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
)
