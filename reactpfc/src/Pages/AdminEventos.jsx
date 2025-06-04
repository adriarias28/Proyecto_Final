import NavbarCom from '../Components/Navbar/NavbarCom'
import AdminEventosCom from '../Components/AdministrativoEventos/AdminEventosCom'
import MapeoEventos from '../Components/MapeoEventos/MapeoEventos'

function AdminEventos() {
  return (

    <div>

        <NavbarCom/>
        <AdminEventosCom/>
        <MapeoEventos esAdmin={true}/>

    </div>
  )
}

export default AdminEventos