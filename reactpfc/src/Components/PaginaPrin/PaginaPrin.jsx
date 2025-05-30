import React,  { useEffect, useState } from 'react'
import '../../Components/PaginaPrin/PaginaPrin.css'
import Jean from '../../Components/Imagenes/Jean.png'
import AndreyM from '../../Components/Imagenes/AndreyM.png'
import Hiram from '../../Components/Imagenes/Hiram.png'
import Gael from '../../Components/Imagenes/Gael.png'
import Ulises from '../../Components/Imagenes/Ulises.png'

function PaginaPrin() {
  return (
    <div className="paginaPrin">
        <h1 className="titulo">Nuestros Jugadores</h1>
        <div className="jugadoresCont">
          <div className='jugt'>
              <img src={Jean} alt="" />
              <h2>Jean Carlos Sanchez</h2>
              <h3>Defensa</h3>
          </div>
            <div className='jugt'>
              <img src={AndreyM} alt="" />
              <h2>Andrey Mora</h2>
              <h3>Defensa</h3>
          </div>
          <div className='jugt'>
              <img src={Hiram} alt="" />
              <h2>Hiram Muñoz</h2>
              <h3>Defensa</h3>
          </div>
          <div className='jugt'>
              <img src={Gael} alt="" />
              <h2>Gael Alpizar</h2>
              <h3>Defensa</h3>
          </div>
          <div className='jugt'>
              <img src={Ulises} alt="" />
              <h2>Ulises Segura</h2>
              <h3>Defensa</h3>
          </div>
        </div>
    </div>
  )
}

export default PaginaPrin