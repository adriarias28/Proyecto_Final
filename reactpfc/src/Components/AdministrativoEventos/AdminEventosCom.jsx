import { useState, useEffect} from 'react'
import '../../Components/AdministrativoEventos/AdminEventos.css'
import EventosCrud from '../../Services/EventosCrud'
import uploadImageToS3 from '../../Components/AWS/AwsConection'

function AdminEventosCom() {

  const [nombreEvento,setnombreEvento]=useState("")
  const [nombreDescrip,setnombreDescrip]=useState("")
  const[imagenEvento,setImagenEvento] = useState(null)

  function eventos(evento) {
    
    setnombreEvento(evento.target.value)
  }

  function descripcion(evento) {
    
    setnombreDescrip(evento.target.value)
  }

  function imagen(evento) {
    setImagenEvento(evento.target.files[0])
  }

  function seteareventos() {

    setnombreEvento('')
    setnombreDescrip('')
    setImagenEvento('')
    
  }

  async function btnEvento() {
    const rest_amazon = await uploadImageToS3(imagenEvento)
    console.log(rest_amazon.Location);
    EventosCrud.postEventos(nombreEvento,nombreDescrip,rest_amazon.Location) 
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

        <input className='img' placeholder='Imagen' onChange={imagen} type="file"/><br /><br />

        <button onClick={btnEvento} className="admin-btn">Registrar Evento</button>
        </div>

    </div>
  )
}

export default AdminEventosCom