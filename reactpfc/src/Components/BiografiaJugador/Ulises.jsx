import React from 'react'
import '../../Components/BiografiaJugador/BioJugador.css'
import Ulises from '../../Components/Imagenes/Ulises.png'

function Ulises() {
 return (
     <div className="container">
               <div className="segCont">
                 <div className="bio">
                   <img src={Ulises} alt="" className='estadio'/>
                   <div className="details">
                     <h1>Ulises Segura</h1> 
                     <h2>Nombre completo:</h2>
                     <h3>Ulises Antonio Segura Machado</h3>
                     <h2>Fecha de Nacimiento</h2>
                     <h3>23 de junio, 1993</h3>
                     <h2>Edad</h2>
                     <h3>31</h3>
                     <h2>Lugar de nacimiento</h2>
                     <h3>Goicoechea, San José</h3>
                     <h2>Nacionalidad</h2>
                     <h3>Costarricense</h3>
                     <h2>Altura</h2>
                     <h3>1,83 m </h3>
                     <h2>Peso</h2>
                     <h3>70 kg </h3>
                     <h2>Posición</h2>
                     <h3>Centrocampista</h3>
                     <h2>Número</h2>
                     <h3>30</h3>
                     <h2>Club actual</h2>
                     <h3>Puntarenas FC</h3>
                     <h2>Pie dominante</h2>
                     <h3>Derecho</h3>
                   </div>
                 </div>
               </div>
             </div>
             
       )
     }

export default Ulises