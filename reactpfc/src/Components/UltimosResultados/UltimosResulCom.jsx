import React, { useState, useEffect } from 'react'
import '../../Components/UltimosResultados/UltimosResul.css'
import CrudUltimosResultados from '../../Services/CrudUltimosResultados'
import CrudPartidos from '../../Services/CrudPartidos'
import uploadImageToS3 from '../../Components/AWS/AwsConection'
import { FaPlusCircle } from 'react-icons/fa';

function UltimosResulCom() {

const[resultadonPartido,setResultadonPartido] = useState('')
const[guardarPartidos, setGuardarPartidos] = useState([])
const[datoselect, setdatoselect] = useState("")
const[imagenEquipos,setImagenEquipos] = useState(null)

    useEffect(() => {

        async function fetchDataUsers() {
            const dato = await CrudPartidos.getPartidos()
            console.log(dato);
            
            setGuardarPartidos(dato)
        };
        fetchDataUsers()
    }, []) 


  function resultado(evento) {
    setResultadonPartido(evento.target.value)
  }

  function seleccionado(evento) {
    setdatoselect(evento.target.value)
  }

  function imagen(evento) {
    setImagenEquipos(evento.target.files[0])
  }
  function setear(){
    setResultadonPartido('')
    setImagenEquipos('')
    
  }

 async function button() {
    const rest_amazon = await uploadImageToS3(imagenEquipos)
    console.log(rest_amazon.Location);
    CrudUltimosResultados.postUltimosResultados(resultadonPartido, datoselect, rest_amazon.Location)
    location.reload();
    setear()
  }

  return (
    <div className='bodyUltimosResul'>
       <h3 className='tituloUl'>Agregar Resultados</h3>
          <label>Resultado Partido:</label>
          <input className='inputTodos' placeholder='Último Resultado' value={resultadonPartido} onChange={resultado} type="text" /> 
          <input className="file-input" placeholder='Imagen' onChange={imagen} type="file"/><br /><br />
          <h1>Fecha y Equipos</h1>
        <select name="" id="" onChange={seleccionado} value={datoselect}>
            {guardarPartidos.map((dato) => (

              <option key={dato.id} value={dato.id}>{dato.Fecha} - PFC vs {dato.Equipos}</option>
              
        
            ))}
        </select>
          
          <button className='butt' onClick={button}><FaPlusCircle className="icon" /> Agregar Partido</button><br /><br /> 

    </div>
  );
}

export default UltimosResulCom