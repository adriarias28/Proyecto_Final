import { useState, useEffect} from 'react'
import '../../Components/AdministrativoEventos/AdminEventos.css'
import EventosCrud from '../../Services/EventosCrud'
import uploadImageToS3 from '../../Components/AWS/AwsConection'
import { FaCloudUploadAlt, FaPlusCircle} from 'react-icons/fa';

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
    /* location.reload(); */
    seteareventos()

  }

  return (
    <div className="admin-event-form">
      <h1 className="form-title">Agregar Eventos</h1>
      <div className='form-evento'> 
        <label className='labelEvento' htmlFor="">Evento</label>
        <input className="input-evento" value={nombreEvento} onChange={eventos} type="text" id="evento" placeholder="Nombre del evento"/>

        <label className='labelEvento' htmlFor="">Descripción</label>
        <input className="input-evento" value={nombreDescrip}onChange={descripcion} type="text" id="descripcion"placeholder="Descripción del evento"/>
        
        <input id="imagen" type="file" onChange={imagen} className="file-input"/>

        <button onClick={btnEvento} className="btn-agregar"><FaPlusCircle className="icon" /> Registrar Evento </button>
      </div>
    </div>
  );
}

export default AdminEventosCom;