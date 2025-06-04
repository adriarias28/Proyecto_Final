import { useState, useEffect} from 'react'
import '../../Components/AdministrativoEventos/AdminEventos.css'
import EventosCrud from '../../Services/EventosCrud'

function AdminEventosCom() {

  const [nombreEvento,setnombreEvento]=useState("")
  const [nombreDescrip,setnombreDescrip]=useState("")

  function eventos(evento) {
    
    setnombreEvento(evento.target.value)

  }

  function descripcion(evento) {
    
    setnombreDescrip(evento.target.value)

  }

  function seteareventos() {

    setnombreEvento('')
    setnombreDescrip('')
    
  }

  function btnEvento() {

    EventosCrud.postEventos(nombreEvento,nombreDescrip)    
    seteareventos()

  }

  return (

    <div>

        <div className="admin-event-form">
        <h1>Agrega los Próximos Eventos</h1>

        <label htmlFor="evento">Evento</label>
        <input value={nombreEvento} onChange={eventos} type="text" id="evento" placeholder="Nombre del evento" />

        <label htmlFor="descripcion">Descripción</label>
        <input value={nombreDescrip} onChange={descripcion} type="text" id="descripcion" placeholder="Descripción del evento" />

        <input type="file" />

        <button onClick={btnEvento} className="admin-btn">Registrar Evento</button>
        </div>

    </div>
  )
}

export default AdminEventosCom