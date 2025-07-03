import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import EventosCrud from "./EventosCrud"; // ajusta la ruta según tu estructura
import uploadImageToS3 from "./uploadImageToS3"; // ajusta igual

function AdminEventosCom() {
  //️⃣ Estados
  const [guardarEvento, setGuardarEvento] = useState([]);
  const [nombreEvento, setNombreEvento] = useState("");
  const [nombreDescrip, setNombreDescrip] = useState("");
  const [imagenUrl, setImagenUrl] = useState("");
  const id = Cookies.get("id"); // ajusta la cookie si es distinto
  const navigate = useNavigate();

  // 🔄 useEffect para cargar datos
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await EventosCrud.getEventos(id);
        setGuardarEvento(data);
        if (data && data.length > 0) {
          setNombreEvento(data[0].evento);
          setNombreDescrip(data[0].descripcion);
        }
      } catch (err) {
        console.error("Error cargando evento:", err);
        Swal.fire("Error al cargar evento", "", "error");
      }
    }
    fetchData();
  }, [id]);

  // 🖊️ Handlers
  function eventos(e) {
    setNombreEvento(e.target.value);
  }

  function descripcion(e) {
    setNombreDescrip(e.target.value);
  }

  async function imagen(e) {
    const file = e.target.files[0];
    if (file) {
      try {
        const url = await uploadImageToS3(file);
        setImagenUrl(url);
      } catch (err) {
        console.error("Error subiendo imagen:", err);
        Swal.fire("Error al subir imagen", "", "error");
      }
    }
  }

  async function handleUpdate() {
    try {
      await EventosCrud.updateEventos({
        id,
        evento: nombreEvento,
        descripcion: nombreDescrip,
        imagenUrl, // solo si en backend acepta este campo
      });
      Swal.fire("Evento actualizado correctamente", "", "success");
      // opcional: refrescar datos sin recargar
      const nuevo = await EventosCrud.getEventos(id);
      setGuardarEvento(nuevo);
    } catch (error) {
      console.error(error);
      Swal.fire("Error al actualizar evento", "", "error");
    }
  }

  function btnEliminar() {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esto eliminará el evento permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await EventosCrud.deleteEvento(id);
          Swal.fire("Evento eliminado", "", "success");
          navigate("/"); // ajusta ruta
        } catch (err) {
          console.error(err);
          Swal.fire("Error al eliminar", "", "error");
        }
      }
    });
  }

  return (
    <div className="admin-eventos">
      <h2>Editar Evento</h2>
      <div className="form-group">
        <label htmlFor="evento">Nombre</label>
        <input
          id="evento"
          type="text"
          value={nombreEvento}
          onChange={eventos}
          className="input-evento"
          placeholder="Nombre del evento"
        />
      </div>

      <div className="form-group">
        <label htmlFor="descripcion">Descripción</label>
        <input
          id="descripcion"
          type="text"
          value={nombreDescrip}
          onChange={descripcion}
          className="input-evento"
          placeholder="Descripción del evento"
        />
      </div>

      <div className="form-group">
        <label htmlFor="imagen">Imagen</label>
        <input
          id="imagen"
          type="file"
          accept="image/*"
          onChange={imagen}
          className="input-evento"
        />
        {imagenUrl && (
          <div className="preview">
            <img src={imagenUrl} alt="Vista previa" className="img-preview" />
          </div>
        )}
      </div>

      <div className="btn-group">
        <button onClick={handleUpdate} className="btn btn-primary">
          Guardar Cambios
        </button>
        <button onClick={btnEliminar} className="btn btn-danger">
          Eliminar Evento
        </button>
      </div>
    </div>
  );
}

export default AdminEventosCom;
