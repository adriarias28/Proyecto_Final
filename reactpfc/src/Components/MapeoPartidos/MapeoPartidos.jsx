import React, { useEffect, useState } from 'react'
import CrudPartidos from '../../Services/CrudPartidos'
import '../../Components/MapeoPartidos/Mapeo.css'

function MapeoPartidos({ esAdmin = false }) {

const[guardarPartidos, setGuardarPartidos] = useState([])

    useEffect(() => {

        async function fetchDataUsers() {
            const dato = await CrudPartidos.getPartidos()
            console.log(dato);
            
            setGuardarPartidos(dato)
        };
        fetchDataUsers()
    }, []) 


    function eliminar(id) {
    CrudPartidos.deletePartidos(id)
    } 

    function editar() {
    CrudPartidos.updatePartidos(ubicacionPartido,fechaPartido,horaPartido,equiposPartido)
    } 


  return (
    <div className="partidos-grid">
        {guardarPartidos.map((dato,index) => (
        <div key={dato.id} className="jugador-card">
            <div className='jugador-agregado'>
                  <p className='datos'><strong>Ubicacion: </strong>{dato.Ubicacion}</p><br />
                  <p className='datos'><strong>Fecha: </strong>{dato.Fecha}</p><br />
                  <p className='datos'><strong>Hora: </strong>{dato.Hora}</p><br />
                  <p className='datos'><strong>Equipos: </strong>{dato.Equipos}</p><br />
                {esAdmin && (
                  <div className="botones-partidos">
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

export default MapeoPartidos