import React from 'react'
import { useState } from 'react'
import '../../Components/TerminosCondiciones/TyC.css'

function TermCondi() {
/* 
  const [aceptoTC,setAceptoTC]=useState("")

    function acepto(evento) {
    
      setAceptoTC(evento.target.value)

    } */
  return (
    <div className="terms-container">
        <h1>TÉRMINOS Y CONDICIONES DE USO</h1>

        <h3>ACEPTACIÓN DE LOS TÉRMINOS</h3>
        <p>Navegar o usar este sitio implica tu aceptación de estos términos.</p>
       
        <h3>Propósito</h3>
        <p>El sitio presenta el Proyecto Final de Carrera (“PFC”) de [Tu Nombre] en [Institución].</p>
        
        <h3>Uso permitido</h3>
        <p>Puedes visualizar y usar el contenido con fines académicos o personales. Queda prohibida su reproducción, modificación o distribución sin autorización expresa.</p>
        
        <h3>Propiedad intelectual</h3>
        <p>Todo el contenido (textos, imágenes, gráficos) es propiedad de [Tu Nombre] o está autorizado. Está protegido por derechos de autor.</p>
       
        <h3>Exención de responsabilidad</h3>
        <p>El sitio se ofrece “tal cual”, sin garantías. No garantizamos exactitud ni disponibilidad; no seremos responsables por daños derivados del uso </p>
       
        <h3>Enlaces externos</h3>
        <p>Pueden incluirse enlaces a recursos de terceros. No asumimos responsabilidad por su contenido ni accesibilidad.</p>
       
        <h3>Cambios en los términos</h3>
        <p>Podemos actualizar estos términos en cualquier momento. El uso continuado implica aceptación de cambios</p>
       
        <h3>Jurisdicción</h3>
        <p>Cualquier disputa se resolverá conforme a las leyes de [Costa Rica]; los tribunales competentes serán los de [Puntarenas, CR].</p>

       {/*  <div className='ip'>
          <input className='inpuesti' value={nombrePersona} onChange={nombre} placeholder='Ingrese tu nombre' type="text" />
          <input value={aceptoTC} onChange={acepto} type="checkbox" />
          <p> <strong>Acepto los Términos y Condiciones</strong></p>
        </div> */}
        
    </div>
  )
}

export default TermCondi