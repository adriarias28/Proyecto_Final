import React from 'react'
import { Link } from 'react-router-dom'
import '../../Components/Navbar/Navbar.css';


function NavbarCom() {




  return (
    <nav className='navbar'>
        <div className='logo'>
            <h1 className='rs'>Puntarenas F.C</h1>
        </div>
        <ul className='nav-links'>
          <h3></h3>
          <h3>Sobre Nosotros</h3>
          <h3>👤</h3>
          <h3>🛒</h3>
          <h3>Menú</h3>
        </ul>
   </nav>
  )
}

export default NavbarCom
