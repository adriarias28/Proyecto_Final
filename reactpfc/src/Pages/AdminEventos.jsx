
import AdminEventosCom from '../Components/AdministrativoEventos/AdminEventosCom'
import MapeoEventos from '../Components/MapeoEventos/MapeoEventos'


function AdminEventos() {
  return (

    <div>

        <AdminEventosCom/>
        <MapeoEventos esAdmin={true}/>

    </div>
  )
}

export default AdminEventos