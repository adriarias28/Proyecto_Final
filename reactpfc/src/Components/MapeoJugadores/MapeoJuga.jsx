import CrudJugadores from '../../Services/CrudJugadores'
import React, { useEffect, useState } from 'react'
import '../../Components/MapeoJugadores/MapeoJugadores.css'

function MapeoJuga({ esAdmin = false }) {

const[guardarJugadores, setGuardarJugadores] = useState([])

    useEffect(() => {

        async function fetchDataUsers() {
            const dato = await CrudJugadores.getBiografiaJugador()
            console.log(dato);
            
            setGuardarJugadores(dato)
        };
        fetchDataUsers()
    }, []) 

    

    function eliminar(id) {
    CrudJugadores.deleteBiografiaJugador(id)
    } 

    function editar() {
      
    CrudJugadores.updateBiografiaJugador(nombreJugador,fechaNacimiento,edadJugador,lugarNacimiento,nacionalidadJugador,alturaJugador,pesoJugador,posicionJugador,numeroJugador,clubActual,pieDominante)
    } 

  return (
    <div className="jugadores-grid">
        {guardarJugadores.map((dato,index) => (
        <div key={dato.id} className="jugador-card">
            <div className='jugador-agregado'>
                  <p className='datos'><strong>Nombre: </strong>{dato.Nombre_Completo}</p><br />
                  <p className='datos'><strong>Fecha Nacimiento: </strong>{dato.Fecha_Nacimiento}</p><br />
                  <p className='datos'><strong>Edad: </strong>{dato.Edad}</p><br />
                  <p className='datos'><strong>Lugar Nacimiento: </strong>{dato.Lugar_Nacimiento}</p><br />
                  <p className='datos'><strong>Nacionalidad: </strong>{dato.Nacionalidad}</p><br />
                  <p className='datos'><strong>Altura: </strong>{dato.Altura}</p><br />
                  <p className='datos'><strong>Peso: </strong>{dato.Peso}</p><br />
                  <p className='datos'><strong>Posicion: </strong>{dato.Posicion}</p><br />
                  <p className='datos'><strong>Numero: </strong>{dato.Numero}</p><br />
                  <p className='datos'><strong>Club: </strong>{dato.Club_Actual}</p><br />
                  <p className='datos'><strong>Pie Dominante: </strong>{dato.Pie_Dominante}</p>
                {esAdmin && (
                  <div className="botones-jugador">
                    <p className='butt'>
                        <button className='boton eliminar' onClick={() => eliminar(dato.id)}>Eliminar</button>
                        <button className='boton editar' onClick={() => editar(dato.id)}>Editar</button>
                    </p>
                  </div>
                )}
            </div>
        </div>
            ))}

    </div>
  )
}

export default MapeoJuga