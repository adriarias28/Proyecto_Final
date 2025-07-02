import React from 'react'

import PaginaPrin from '../Components/PaginaPrin/PaginaPrin'
import NavbarCom from '../Components/Navbar/NavbarCom'
import Video from '../Components/Vi/Video'
import FooderCom from '../Components/Fooder/FooderCom'
import MapeoUltimosResultados from '../Components/MapeoUltimosResultados/MapeoUltimosResultados'
/* import UltimosResulCom from '../Components/UltimosResultados/UltimosResulCom' */
import MapeoEventos from '../Components/MapeoEventos/MapeoEventos'
import MapeoPartidos from '../Components/MapeoPartidos/MapeoPartidos'
import MapeoJuga from '../Components/MapeoJugadores/MapeoJuga'
import MapeoPartidosPrin from '../Components/MapeoPartidos/MapeoPartidosPrin'
import PatrocinadoresCom from '../Components/Patrocinadores/PatrocinadoresCom'

function PaginaPrincipal() {
  return (
    <div>
      <NavbarCom/>
      <Video/>
      <MapeoPartidosPrin esAdmin={false}/>  
      <PaginaPrin/>
      <MapeoUltimosResultados/>
      <MapeoJuga esAdmin={false}/>
      <MapeoEventos/>
      <PatrocinadoresCom/>
      <FooderCom/>
    </div>
  )
}

export default PaginaPrincipal