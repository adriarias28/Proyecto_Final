import React, { useState, useEffect } from 'react'
import CrudJugadores from '../../Services/CrudJugadores'
import '../../Components/BiografiaJugador/BioJugador.css'
import uploadImageToS3 from '../../Components/AWS/AwsConection'
import { FaPlusCircle } from 'react-icons/fa';



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
const[imagenJugador,setImagenJugador] = useState(null)



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

  function imagen(evento) {
    setImagenJugador(evento.target.files[0])
  }

  function setear(){
    setNombreJugador('')
    setFechaNacimiento('')
    setEdadJugador('')
    setLugarNacimiento('')
    setNacionalidadJugador('')
    setAlturaJugador('')
    setPesoJugador('')
    setPosicionJugador('')
    setNumeroJugador('')
    setClubActual('')
    setPieDominante('')
    setImagenJugador('')
  }

    async function btnAgregarJu() {
    const rest_amazon = await uploadImageToS3(imagenJugador)
    console.log(rest_amazon.Location);
    location.reload();
    CrudJugadores.postBiografiaJugador(nombreJugador,fechaNacimiento,edadJugador,lugarNacimiento,nacionalidadJugador,alturaJugador,pesoJugador,posicionJugador,numeroJugador,clubActual,pieDominante, rest_amazon.Location)
    setear()

  }


  return (

    <div className='concontJugador'>
      <div className='divCont'>
        <h1 className='tij'>Agregar Jugadores</h1> <br />
          <label className='labelBio'>Nombre completo</label>
          <input className='inputTodos' placeholder='Nombre' value={nombreJugador} onChange={jugador} type="text" />
          <label className='labelBio'>Fecha de Nacimiento</label>
          <input className='inputTodos' placeholder='Fecha' value={fechaNacimiento} onChange={nacimiento} type="date" />
          <label className='labelBio'>Edad</label>
          <input className='inputTodos' placeholder='Edad' value={edadJugador} onChange={edad} type="number" />
          <label className='labelBio'>Lugar de nacimiento</label>
          <input className='inputTodos' placeholder='Lugar' value={lugarNacimiento} onChange={lugar} type="text" />
          <label className='labelBio'>Nacionalidad</label>
          <input className='inputTodos' placeholder='Nacionalidad' value={nacionalidadJugador} onChange={nacionalidad} type="text" />
          <label className='labelBio'>Altura</label>
          <input className='inputTodos' placeholder='Altura' value={alturaJugador} onChange={altura} type="number" />
        </div><br />

      <div className='divCont'>
          <label className='labelBio'>Peso</label>
          <input className='inputTodos' placeholder='Peso' value={pesoJugador} onChange={peso} type="number" />
          <label className='labelBio'>Posicion</label>
          <input className='inputTodos' placeholder='Posicion' value={posicionJugador} onChange={posicion} type="text" />
          <label className='labelBio'>Numero Jugador</label>
          <input className='inputTodos' placeholder='Numero Jugador' value={numeroJugador} onChange={numero} type="number" />
          <label className='labelBio'>Club Actual</label>
          <input className='inputTodos' placeholder='Club' value={clubActual} onChange={club} type="text" />
          <label className='labelBio'>Pie dominante</label>
          <input className='inputTodos' placeholder='Dominante' value={pieDominante} onChange={dominante} type="text" /><br />

          <input className="file-input" placeholder='Imagen' onChange={imagen} type="file"/><br /><br />

          <button className='btnJugador' onClick={btnAgregarJu}><FaPlusCircle className="icon" /> Agregar Jugador</button>
      </div>       
   </div>

      )
    }

export default BioJugadorCom