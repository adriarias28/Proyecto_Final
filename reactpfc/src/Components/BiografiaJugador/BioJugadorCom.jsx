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


//GET


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

  function btnAgregarJu() {
    
    CrudJugadores.postBiografiaJugador(nombreJugador,fechaNacimiento,edadJugador,lugarNacimiento,nacionalidadJugador,alturaJugador,pesoJugador,posicionJugador,numeroJugador,clubActual,pieDominante)

  }



//BOTONES FUNCIONES

//POST (AGREGAR PODUCTO)


  return (
    <div className='divCont'>
      <h1>Jugadores</h1>
        <label>Nombre completo</label>
        <input className='inputTodos' placeholder='Nombre' value={nombreJugador} onChange={jugador} type="text" />
        <label>Fecha de Nacimiento</label>
        <input className='inputTodos' placeholder='Fecha' value={fechaNacimiento} onChange={nacimiento} type="date" />
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
        <label>Numero Jugador</label>
        <input className='inputTodos' placeholder='Numero Jugador' value={numeroJugador} onChange={numero} type="number" />
        <label >Club Actual</label>
        <input className='inputTodos' placeholder='Club' value={clubActual} onChange={club} type="text" />
        <label>Pie dominante</label>
        <input className='inputTodos' placeholder='Dominante' value={pieDominante} onChange={dominante} type="text" />
        <button className='btnJugador' onClick={btnAgregarJu}>Agregar Jugador</button>
        
   </div>
            
      )
    }

export default BioJugadorCom