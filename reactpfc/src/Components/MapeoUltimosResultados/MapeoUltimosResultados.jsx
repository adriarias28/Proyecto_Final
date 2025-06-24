import React, { useEffect, useState } from 'react'
import CrudUltimosResultados from '../../Services/CrudUltimosResultados'
import Swal from 'sweetalert2'
import '../../Components/MapeoUltimosResultados/MapUResultados.css'
import Escudopfc from '../../Images/Escudopfc.png'

function MapeoUltimosResultados({ esAdmin = false }) {

const[guardarUltimosResultados, setUltimosResultados] = useState([])

    useEffect(() => {

        async function fetchDataUsers() {
            const dato = await CrudUltimosResultados.getUltimosResultados()
            console.log(dato);
            
            setUltimosResultados(dato)
        };
        fetchDataUsers()
    }, []) 


//ELIMINAR

function valor(evento) {

  setUltimosResultados(evento.target.value)
}

function eliminar(id) {
    console.log(id);
    location.reload();
    CrudUltimosResultados.deleteUltimosResultados(id)
} 

    
//EDITAR



  return (
    <div className="divPrin">
      {/* <h1 className='urs'>Útimos Resultados</h1> */}
        {guardarUltimosResultados/* .slice(-3) */.map((dato,index) => (
        <div key={dato.id} className="caj">
            <div className=''>
              <div className='hh'>
                  <p className='ps'><strong>Resultado: </strong>{dato.Resultado}</p><br /> 
                  <p className='ps'><strong>Fecha: </strong>{dato.fecha}</p><br />
                  <p className='ps'><strong>Equipos: </strong>{dato.equipos}</p><br />
                 <div className='vs'>
                    <img className='imgEscudo' src={Escudopfc} alt="" />
                    <p className='vs'><strong>VS</strong></p>
                    <img src={dato.Imagen} className='imagenEquipo' alt="" />
                 </div>
              </div>
                {esAdmin && (
                  <div className="bottns">
                    <p className='but'>
                        <button className='boton delete' onClick={() => eliminar(dato.id)}>Eliminar</button>
                        <button className='boton update' onClick={() => editar(dato.id)}>Editar</button>
                    </p>
                  </div>
                )}
            </div>
        </div>
            ))}

    </div>
  )
}

export default MapeoUltimosResultados