import React from 'react'
import '../../Components/Jugadores/Jugadores.css'
import hiram from '../../Components/Imagenes/hiram.png'

function JugadoresCom() {
  return (
    <div>
      <div className="container">
            <div className="segCont">
              <div className="bio">
                <img src={hiram} alt="Hiram Muñoz" className="jug" />
                <div className="details">
                  <h1>Hiram Muñoz</h1> 
                  <h2>Nombre completo:</h2>
                  <h3>Hiram Eduardo Muñoz Cantú</h3>
                  <h2>Fecha de Nacimiento</h2>
                  <h3>26 de mayo, 1995</h3>
                  <h2>Edad</h2>
                  <h3>29</h3>
                  <h2>Lugar de nacimiento</h2>
                  <h3>Torreón, Coahuila, México</h3>
                  <h2>Nacionalidad</h2>
                  <h3>Mexicana</h3>
                  <h2>Altura</h2>
                  <h3>1.68 m</h3>
                  <h2>Peso</h2>
                  <h3>81 kg</h3>
                  <h2>Posición</h2>
                  <h3>Defensa central</h3>
                  <h2>Número</h2>
                  <h3>15</h3>
                  <h2>Club actual</h2>
                  <h3>Puntarenas FC</h3>
                  <h2>Pie dominante</h2>
                  <h3>Derecho</h3>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default JugadoresCom
