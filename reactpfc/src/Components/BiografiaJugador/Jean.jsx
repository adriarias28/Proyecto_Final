import React from 'react'
import '../../Components/BiografiaJugador/BioJugador.css'
import Jean from '../../Components/Imagenes/Jean.png'

function Jean() {
  return (
      <div className="container">
                <div className="segCont">
                  <div className="bio">
                    <img src={Jean} alt="" className='jug'/>
                    <div className="details">
                      <h1>Jean Sánchez</h1> 
                    <h2>Nombre completo:</h2>
                    <h3>Jean Carlos Sánchez Rose</h3>
                    <h2>Fecha de Nacimiento</h2>
                    <h3>13 de agosto,1999 </h3>
                    <h2>Edad</h2>
                    <h3>25</h3>
                    <h2>Lugar de nacimiento</h2>
                    <h3>Ciudad de Panamá</h3>
                    <h2>Nacionalidad</h2>
                    <h3>Panameño</h3>
                    <h2>Altura</h2>
                    <h3>1,75 m</h3>
                    <h2>Peso</h2>
                    <h3>75 kg </h3>
                    <h2>Posición</h2>
                    <h3>Defensa central</h3>
                    <h2>Número</h2>
                    <h3>4</h3>
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

export default Jean