import React from 'react'
import BoleteriaCom from '../Components/Boleteria/BoleteriaCom'
import NavbarCom from '../Components/Navbar/NavbarCom'
import FooderCom from '../Components/Fooder/FooderCom'
/* import MapeoPartidos from '../Components/MapeoPartidos/MapeoPartidos' */

function Boleteria() {
  return (
    
    <div>

      <NavbarCom/>
      <BoleteriaCom esAdmin={false}/>
      <FooderCom/>
    </div>
  )
}

export default Boleteria