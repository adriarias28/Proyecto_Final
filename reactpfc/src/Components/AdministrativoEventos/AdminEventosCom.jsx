import '../../Components/AdministrativoEventos/AdminEventos.css'

function AdminEventosCom() {
  return (

    <div>

        <div className="admin-event-form">
        <h1>Agrega los Próximos Eventos</h1>

        <label htmlFor="evento">Evento</label>
        <input type="text" id="evento" placeholder="Nombre del evento" />

        <label htmlFor="descripcion">Descripción</label>
        <input type="text" id="descripcion" placeholder="Descripción del evento" />

        <button className="admin-btn">Guardar Evento</button>
        </div>

    </div>
  )
}

export default AdminEventosCom