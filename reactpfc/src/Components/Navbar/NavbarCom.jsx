import React from 'react'
import { Link } from 'react-router-dom'
import '../../Components/Navbar/Navbar.css';
import logo from '../../Images/logo.png'


function NavbarCom() {




  return (

    <div>
        <nav className='navbar'>
            <div>
              <img className='logo' src={logo} alt="..."/>
            </div>

            <div className='links'>    
              <li>Inicio</li>
            </div> 

            <div> 
              <li>Jugadores</li>
            </div> 

            <div>
              <li> Contáctanos</li>
            </div>

            <div>
              <li> Acerca de</li>
            </div>
            
            <div>
              <li>👤</li>
            </div>

            <div>
              <li>🛒</li>
            </div>

            <div>
              <li>Menú</li>
            </div>

        </nav> 
    </div>
  )
}

export default NavbarCom
