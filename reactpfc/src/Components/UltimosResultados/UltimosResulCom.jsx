import React, { useState, useEffect } from 'react'
import '../../Components/UltimosResultados/UltimosResul.css'
/* import escudopfc from '../../Images/escudopfc.png'
import EscudoLiga from '../../Images/EscudoLiga.png'
import SantaAna from '../../Images/SantaAna.jfif'  */
import CrudUltimosResultados from '../../Services/CrudUltimosResultados'
import MapeoPartidos from '../MapeoPartidos/MapeoPartidos'
import CrudPartidos from '../../Services/CrudPartidos'


function UltimosResulCom() {

const[resultadonPartido,setResultadonPartido] = useState('')
const[guardarPartidos, setGuardarPartidos] = useState([])
const[datoselect, setdatoselect] = useState("")

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

  function setear(){
    setResultadonPartido('')
  }

  function button() {
    console.log(datoselect);
    
    CrudUltimosResultados.postUltimosResultados(resultadonPartido, datoselect)
    setear()
  }

  return (
    <div className='bodyUltimosResul'>
       <h1 className='tituloUl'>ÚLTIMOS RESULTADOS</h1>
          <label>Resultado</label>
          <input className='inputTodos' placeholder='Resultado' value={resultadonPartido} onChange={resultado} type="text" /> 
          {/* <MapeoPartidos esAdmin={true}/>    esAdmin={true}/ */}

          <h1>Fecha y Equipos</h1>
        <select name="" id="" onChange={seleccionado}>
            {guardarPartidos.map((dato,index) => (

              <option value={dato.id}>{dato.Fecha} - {dato.Equipos}</option>
        
            ))}
        </select>
          


          <button className='butt' onClick={button}>Agregar Partido</button><br /><br /> 

    {/*   <h1 className='tituloUl'>ÚLTIMOS RESULTADOS</h1>
       <div className='df'>
      <div className="resultados">
        <div className="fecha">14 mayo, 2025</div>
        <div className="equipos">
          <img src={escudopfc} alt="" />
          <h1>0 - 1</h1>
          <img src={EscudoLiga} alt="" />
        </div>
        <div className="fut">
          Fútbol de Primera División - Liga Promerica
        </div>
        </div>
        <div className='resultados'>
        <div className="fecha">11 mayo, 2025</div>
        <div className="equipos">
          <img src={escudopfc} alt="" />
          <h1>0 - 0</h1>
          <img src={EscudoLiga} alt="" />
        </div>
        <div className="fut">
          Fútbol de Primera División - Liga Promerica
        </div>
        </div>
        <div className='resultados'>
        <div className="fecha">07 mayo, 2025</div>
        <div className="equipos">
          <img src={escudopfc} alt="" />
          <h1>1 - 0</h1>
          <img src={SantaAna} alt="" />
        </div>
        <div className="fut">
          Fútbol de Primera División - Liga Promerica
        </div>
        </div>
      </div>  */}
    </div>
  );
}

export default UltimosResulCom