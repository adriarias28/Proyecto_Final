import React from 'react'
import BoleteriaCom from '../Components/Boleteria/BoleteriaCom'
import NavbarCom from '../Components/Navbar/NavbarCom'
import FooderCom from '../Components/Fooder/FooderCom'
/* import MapeoPartidos from '../Components/MapeoPartidos/MapeoPartidos' */
import TyCBoleteria from '../Components/TerminosCondiciones/TyCBoleteria'

function Boleteria() {
  return (
    
    <div>

      <NavbarCom/>
      {/* <MapeoPartidos/> */}
      <BoleteriaCom/>
      <FooderCom/>
    </div>
  )
}

export default Boleteria