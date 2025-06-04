import React from 'react'
import '../../Components/Contactos/Contactos.css'


function ContactosCom() {


  return (
    <div>
      <div className='divConsulta'><br /><br /><br /><br /><br /><br /><br />
          <h2 className='consultaTitulo'>¿Tienes alguna consulta?</h2><br />
            <p className='consultaParrafo'>¡Estamos listos para atenderte!</p>
              <div className='consultaInputs'> 
                <input placeholder='Nombre y Apellidos' type="text" />
                <input placeholder='Email' type="email" />
                <input placeholder='Telefono' type="number" />
                <input className='inputGrande' placeholder='Escribe tu consulta...' type="text" /><br />
                <button className='btnConsulta'>Enviar</button><br /><br />
              </div>
      </div>
    </div>
  )
}

export default ContactosCom
