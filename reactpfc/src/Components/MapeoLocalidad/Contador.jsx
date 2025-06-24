



<div className='localidad-container'>
  {guardarLocalidad.map((dato, index) => {
    const cantidad = dato.cantidad || 0;

    const incrementar = () => {
      const nuevasLocalidades = guardarLocalidad.map(loc => 
        loc.id === dato.id ? { ...loc, cantidad: (loc.cantidad || 0) + 1 } : loc
      );
      setGuardarLocalidad(nuevasLocalidades);
    };

    const decrementar = () => {
      const nuevasLocalidades = guardarLocalidad.map(loc =>
        loc.id === dato.id && (loc.cantidad || 0) > 0
          ? { ...loc, cantidad: loc.cantidad - 1 }
          : loc
      );
      setGuardarLocalidad(nuevasLocalidades);
    };

    return (
      <div key={dato.id} className="localidad-card entrada-item">
        <div className='entrada-info'>
          <span className='tipo-entrada'>{dato.Nombre}</span>
          <span className='precio-entrada'>₡ {parseFloat(dato.Precio).toLocaleString()}</span>
        </div>

        <div className="cantidad-control">
          <button className="cantidad-btn" onClick={decrementar}>−</button>
          <span className="cantidad-num">{cantidad}</span>
          <button className="cantidad-btn" onClick={incrementar}>+</button>
        </div>

        {esAdmin && (
          <div className="botones-partidos">
            <button className='boton delete' onClick={() => eliminar(dato.id)}>Eliminar</button>
            <button className='boton update' onClick={() => editar(dato.id)}>Editar</button>
          </div>
        )}
      </div>
    );
  })}

  {/* Mostrar total de entradas y total en colones */}
  <div className='total-container'>
    <p><strong>CANTIDAD DE ENTRADAS:</strong> {
      guardarLocalidad.reduce((acc, loc) => acc + (loc.cantidad || 0), 0)
    }</p>
    <p><strong>TOTAL:</strong> ₡ {
      guardarLocalidad.reduce((acc, loc) => acc + (loc.cantidad || 0) * parseFloat(loc.Precio || 0), 0).toLocaleString()
    } <span style={{ fontSize: "0.8rem" }}>IVA incluido</span></p>
    <button className='seleccionar-asientos-btn'>SELECCIONAR ASIENTOS</button>
  </div>
</div>