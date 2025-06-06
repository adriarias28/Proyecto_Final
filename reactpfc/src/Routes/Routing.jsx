import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Acercasde from '../Pages/Acercasde'
import Boleteria from '../Pages/Boleteria'
import Contactos from '../Pages/Contactos'
import DetalleVenta from '../Pages/DetalleVenta'
import Fooder from '../Pages/Fooder'
import Jugadores from '../Pages/Jugadores'
import Login from '../Pages/Login'
import Membresia from '../Pages/Membresia'
import MetodosPago from '../Pages/MetodosPago'
import ProximosEventos from '../Pages/ProximosEventos'
import Register from '../Pages/Register'
import UltimosResultados from '../Pages/UltimosResultados'
import Venta from '../Pages/Venta'
import Administrador from '../Pages/Administrador'
import PaginaPrincipal from '../Pages/PaginaPrincipal'
import EventosCRUD from '../Components/AccesoAdmin/EventosCRUD'
import JugadoresCRUD from '../Components/AccesoAdmin/JugadoresCRUD'
import PartidosCRUD from '../Components/AccesoAdmin/PartidosCRUD'
import RegistroCRUD from '../Components/AccesoAdmin/RegistroCRUD'
import Localidades from '../Pages/Localidades'


function Routing() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/admin" element={<Administrador/>}>
              <Route path="partidos" element={< PartidosCRUD />} />
              <Route path="eventos" element={< EventosCRUD />} />
              <Route path="jugadorescrud" element={<JugadoresCRUD/>}/>
              <Route path="usuarios" element={<RegistroCRUD/>}/>
            </Route>

            <Route path="/acercade" element={<Acercasde/>}/>
            <Route path="/boleteria" element={<Boleteria/>}/>
            <Route path="/contactos" element={<Contactos/>}/>
            <Route path="/detalleventa" element={<DetalleVenta/>}/>
            <Route path="/fooder" element={<Fooder/>}/>
            <Route path="/jugadores" element={<Jugadores/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/membresia" element={<Membresia/>}/>
            <Route path="/metodospago" element={<MetodosPago/>}/>
            <Route path="/proximoseventos" element={<ProximosEventos/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/ultimosresultados" element={<UltimosResultados/>}/>
            <Route path="/venta" element={<Venta/>}/>
            <Route path="/" element={<PaginaPrincipal/>}/>

            <Route path="/localidades" element={<Localidades/>}/>

        </Routes>
      </Router>

    </div>

  )
}

export default Routing
