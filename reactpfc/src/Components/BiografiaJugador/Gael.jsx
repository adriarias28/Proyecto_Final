import React from 'react'
import '../../Components/Jugadores/Jugadores.css'
import Gael from '../../Components/Imagenes/Gael.png'

function Gael() {
  return (
      <div className="container">
                <div className="segCont">
                  <div className="bio">
                    <img src={Gael} alt="" className='estadio'/>
                    <div className="details">
                      <h1>Gael Alpízar</h1> 
                      <h2>Nombre completo:</h2>
                      <h3>Jefferson Gael Alpízar Corrales</h3>
                      <h2>Fecha de Nacimiento</h2>
                      <h3>8 de septiembre , 2004</h3>
                      <h2>Edad</h2>
                      <h3>20</h3>
                      <h2>Lugar de nacimiento</h2>
                      <h3>Puntarenas, Costa Rica</h3>
                      <h2>Nacionalidad</h2>
                      <h3>Costarricense</h3>
                      <h2>Altura</h2>
                      <h3>1.68 m</h3>
                      <h2>Peso</h2>
                      <h3>81 kg</h3>
                      <h2>Posición</h2>
                      <h3>Defensa</h3>
                      <h2>Número</h2>
                      <h3>5</h3>
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

export default Gael