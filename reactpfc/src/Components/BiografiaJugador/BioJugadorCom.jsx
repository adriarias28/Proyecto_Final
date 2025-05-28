import React, { useState, useEffect } from 'react'
import CrudJugadores from '../../Services/CrudJugadores'
import '../../Components/BiografiaJugador/BioJugador.css'


function BioJugadorCom() {

const[nombreJugador,setNombreJugador] = useState('')
const[fechaNacimiento,setFechaNacimiento] = useState('')
const[edadJugador,setEdadJugador] = useState('')
const[lugarNacimiento,setLugarNacimiento] = useState('')
const[nacionalidadJugador,setNacionalidadJugador] = useState('')
const[alturaJugador,setAlturaJugador] = useState('')
const[pesoJugador,setPesoJugador] = useState('')
const[posicionJugador,setPosicionJugador] = useState('')
const[numeroJugador,setNumeroJugador] = useState('')
const[clubActual,setClubActual] = useState('')
const[pieDominante,setPieDominante] = useState('')
const[guardarJugadores, setGuardarJugadores] = useState([])

//GET
 useEffect(() => {
  
        async function fetchDataUsers() {
            const dato = await CrudJugadores.getBiografiaJugador()
            setGuardarJugadores(dato)
        };
        fetchDataUsers()
    }, []) 

    function jugador(evento) {
      setNombreJugador(evento.target.value)
    }

    function nacimiento(evento) {
      setFechaNacimiento(evento.target.value)
    }

    function edad(evento) {
      setEdadJugador(evento.target.value)
    }

    function lugar(evento) {
      setLugarNacimiento(evento.target.value)
    }

    function nacionalidad(evento) {
      setNacionalidadJugador(evento.target.value)
    }

    function altura(evento) {
      setAlturaJugador(evento.target.value)
    }

    function peso(evento) {
      setPesoJugador(evento.target.value)
    }

    function posicion(evento) {
      setPosicionJugador(evento.target.value)
    }

    function numero(evento) {
      setNumeroJugador(evento.target.value)
    }

    function club(evento) {
      setClubActual(evento.target.value)
    }

    function dominante(evento) {
      setPieDominante(evento.target.value)
    }

    //BOTONES FUNCIONES

//POST (AGREGAR PODUCTO)

function agregar() {
 CrudJugadores.postBiografiaJugador(nombreJugador,fechaNacimiento,edadJugador,lugarNacimiento,nacionalidadJugador,alturaJugador,pesoJugador,posicionJugador,numeroJugador,clubActual,pieDominante)
}

function eliminar(id) {
 CrudJugadores.deleteBiografiaJugador(id)
} 

function editar() {
 CrudJugadores.updateBiografiaJugador(nombreJugador,fechaNacimiento,edadJugador,lugarNacimiento,nacionalidadJugador,alturaJugador,pesoJugador,posicionJugador,numeroJugador,clubActual,pieDominante)
} 
console.log(guardarJugadores);

  return (
    <div className='divCont'>
      <h1>Jugadores</h1>
        <label>Nombre completo</label>
        <input className='inputTodos' placeholder='Nombre' value={nombreJugador} onChange={jugador} type="text" />
        <label>Fecha de Nacimiento</label>
        <input className='inputTodos' placeholder='Fecha' value={fechaNacimiento} onChange={nacimiento} type="text" />
        <label>Edad</label>
        <input className='inputTodos' placeholder='Edad' value={edadJugador} onChange={edad} type="text" />
        <label>Lugar de nacimiento</label>
        <input className='inputTodos' placeholder='Lugar' value={lugarNacimiento} onChange={lugar} type="text" />
        <label>Nacionalidad</label>
        <input className='inputTodos' placeholder='Nacionalidad' value={nacionalidadJugador} onChange={nacionalidad} type="text" />
        <label>Altura</label>
        <input className='inputTodos' placeholder='Altura' value={alturaJugador} onChange={altura} type="text" />
        <label>Peso</label>
        <input className='inputTodos' placeholder='Peso' value={pesoJugador} onChange={peso} type="text" />
        <label>Posicion</label>
        <input className='inputTodos' placeholder='Posicion' value={posicionJugador} onChange={posicion} type="text" />
        <label>Numero</label>
        <input className='inputTodos' placeholder='Numero' value={numeroJugador} onChange={numero} type="text" />
        <label >Club Actual</label>
        <input className='inputTodos' placeholder='Club' value={clubActual} onChange={club} type="text" />
        <label>Pie dominante</label>
        <input className='inputTodos' placeholder='Dominante' value={pieDominante} onChange={dominante} type="text" />
        
        
        {guardarJugadores.map((dato,index) => (
        <tr key={dato.id}>
          <td>{dato.Nombre_Completo}</td>
          <td>{dato.Fecha_Nacimiento}</td>
          <td>{dato.Edad}</td>
          <td>{dato.Lugar_Nacimiento}</td>
          <td>{dato.Nacionalidad}</td>
          <td>{dato.Altura}</td>
          <td>{dato.Peso}</td>
          <td>{dato.Posicion}</td>
          <td>{dato.Numero}</td>
          <td>{dato.Club_Actual}</td>
          <td>{dato.Pie_Dominante}</td>
          <td className='butt'>
          <button className='boton' onClick={() => agregar(dato.id)}>Agregar</button>
          <button className='boton' onClick={() => eliminar(dato.id)}>Eliminar</button>
          <button className='boton' onClick={() => editar(dato.id)}>Editar</button>
          </td>
        </tr>
            ))}
   </div>
            
      )
    }

export default BioJugadorCom