import React from 'react'
import '../../Components/AcercaDe/Acercade.css'
import estadio from '../../Images/estadio.jpeg'
import logros from '../../Images/logros.jpeg'


function AcercadeCom() {

  return (
    
    <div>
        <div className='imagenhisto'>
          <img className='estadio' src={estadio} width={1335} height={800} alt="..." />
        </div>
      <div className='container-historia'>
        <div className='historia'> 
          <h1 className='tituloHisto'>Historia y Pasión</h1><br />
            <p className='parrafoHisto' >El Puntarenas Fútbol Club (PFC) es un club de fútbol costarricense fundado en 2004,
              nació con la misión de revivir la pasión por el fútbol en la provincia tras la desaparición del histórico Municipal Puntarenas.
              Desde entonces, los conocidos “Chuchequeros” han llevado alegría, identidad y garra a sus fieles seguidores.
              El club fue fundado por los empresarios Eduardo Li y Adrián Castro. 
              En su historia, el PFC ha logrado importantes hazañas:
              Campeón de la Copa Interclubes de la UNCAF:
              En 2006, venció al Olimpia de Honduras en la final para obtener el título. 
              Subcampeón nacional:
              Ha sido subcampeón en los torneos 2005-2006 y 2009. 
              Primeros juegos:
              En sus primeras temporadas, el equipo logró un buen rendimiento, incluso superando rachas de invictos. 
              Descenso y lucha por el ascenso:
              Descendió a la Liga de Ascenso en 2014 y luchó por regresar, finalmente logrando ascender. 
              El PFC juega sus partidos como local en el Estadio Lito Pérez,
              conocido como "La Olla Mágica" por la pasión de la afición y las altas temperaturas de la zona.
              Desde su debut en la Primera División, el PFC se ha ganado el respeto del fútbol nacional con un estilo aguerrido y una afición que convierte el Estadio "Lito" Pérez en una verdadera caldera. A lo largo de los años, ha sido protagonista tanto a nivel local como internacional, dejando huella en cada torneo que disputa.
              Hoy, el club mira al futuro con ilusión, impulsado por el proyecto del nuevo Estadio Reina del Mar, que será un símbolo de modernidad y crecimiento para todo Puntarenas.
              Actualmente, el equipo milita en la Primera División de Costa Rica.
            </p><br />
            <div className='imagenhisto'>
              <img className='logros' src={logros} width={900} height={500} alt="..." />
            </div><br /><br />
            <h2 className='tituloHisto'>🏆 Principales Logros</h2><br />
          <ul>
            <li> <strong>Campeón de la Copa Interclubes UNCAF (2006)</strong><br />
              Primer equipo costarricense en ganarla sin pertenecer a los llamados "grandes".</li>
            <li> <strong>Subcampeón Nacional (2005-2006 e Invierno 2009)</strong><br />
              Peleó títulos con coraje y talento, consolidándose como equipo competitivo.</li>
            <li><strong>Participación en la Liga de Campeones de Concacaf (2007)</strong><br />
              Representó con orgullo a Costa Rica en el torneo más importante de clubes de la región.</li>
            <li><strong>Ascenso a la Primera División (2022)</strong>
              Tras años de lucha, regresó con fuerza a la élite del fútbol costarricense.</li>
            <li><strong>Campeón Nacional como Municipal Puntarenas (1986)</strong>
              Un título que marcó la historia futbolística del puerto.</li>
         </ul>
     </div>
     </div>
  </div>
  )
}

export default AcercadeCom
