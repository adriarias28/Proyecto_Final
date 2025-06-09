import React from 'react'
import LocalidadCom from '../Components/Localidad/LocalidadCom'
import NavbarCom from '../Components/Navbar/NavbarCom'
import FooderCom from '../Components/Fooder/FooderCom'
import AdminCom from '../Components/Administrador/AdminCom'
import MapeoLocalidad from '../Components/MapeoLocalidad/MapeoLocalidad'

function Localidades() {
  return (
    <div>
        
        <NavbarCom/>
        <LocalidadCom/>
        <MapeoLocalidad esAdmin={true}/>
        <FooderCom/>
    </div>
  )
}

export default Localidades