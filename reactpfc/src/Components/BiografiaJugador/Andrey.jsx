import React from 'react'
import '../../Components/BiografiaJugador/BioJugador.css'
import Andrey from '../../Components/Imagenes/Andrey.png'

function Andrey() {
  return (
      <div className="container">
                <div className="segCont">
                  <div className="bio">
                    <img src={Andrey} alt="" className='estadio'/>
                    <div className="details">
                      <h1>Andrey Mora</h1> 
                      <h2>Nombre completo:</h2>
                      <h3>Andrey Gerardo Mora Matarrita</h3>
                      <h2>Fecha de Nacimiento</h2>
                      <h3>18 de septiembre, 1996</h3>
                      <h2>Edad</h2>
                      <h3>28 </h3>
                      <h2>Lugar de nacimiento</h2>
                      <h3>Puntarenas, Costa Rica</h3>
                      <h2>Nacionalidad</h2>
                      <h3>Costarricense</h3>
                      <h2>Altura</h2>
                      <h3>1.74 m</h3>
                      <h2>Peso</h2>
                      <h3>67 kg</h3>
                      <h2>Posición</h2>
                      <h3>Centrocampistas</h3>
                      <h2>Número</h2>
                      <h3>26</h3>
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

export default Andrey