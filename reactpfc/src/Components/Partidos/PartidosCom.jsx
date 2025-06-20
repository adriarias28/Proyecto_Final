import React, { useState, useEffect } from 'react'
import CrudPartidos from '../../Services/CrudPartidos'
import '../../Components/Partidos/Partidos.css'

function PartidosCom() {

const[ubicacionPartido,setUbicacionPartido] = useState('')
const[fechaPartido,setFechaPartido] = useState('')
const[horaPartido,setHoraPartido] = useState('')
const[equiposPartido,setEquiposPartido] = useState('')


  function ubicacion(evento) {
    setUbicacionPartido(evento.target.value)
  }

  function fecha(evento) {
    setFechaPartido(evento.target.value)
  }

  function tiempo(evento) {
    setHoraPartido(evento.target.value)
  }

  function equipos(evento) {
    setEquiposPartido(evento.target.value)
  }


  function setear(){
    setUbicacionPartido('')
    setFechaPartido('')
    setHoraPartido('')
    setEquiposPartido('')
  }

  function btnAgregarPar() {
    CrudPartidos.postPartidos(ubicacionPartido,fechaPartido,horaPartido,equiposPartido)
    location.reload();
    setear()

  }

  return (
    <div className='contePrin'>
      <div className='di'>
      <div className='conDiv'>
          <label>Ubicación</label>
          <input className='inputTodos' placeholder='Ubicacion' value={ubicacionPartido} onChange={ubicacion} type="text" />
          <label>Fecha</label>
          <input className='inputTodos' placeholder='Fecha' value={fechaPartido} onChange={fecha} type="date" />
          <label>Hora</label>
          <input className='inputTodos' placeholder='Hora' value={horaPartido} onChange={tiempo} type="time" />
          <label>Equipos</label>
          <input className='inputTodos' placeholder='Equipos' value={equiposPartido} onChange={equipos} type="text" />
          <button className='btnPartido' onClick={btnAgregarPar}>Agregar Partido</button><br /><br /> 
       </div> <br /> <br />
      </div>
    </div>
  )
}

export default PartidosCom