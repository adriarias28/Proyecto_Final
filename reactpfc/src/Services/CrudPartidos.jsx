async function getPartidos() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/partidos/ ', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

//////////LLAMADO POST//////////

async function postPartidos(Ubicacion,Fecha,Hora,Equipos) {
    try {
     
        const userData3 = { 
            'Ubicacion': Ubicacion,
            'Fecha': Fecha,
            'Hora': Hora,
            'Equipos': Equipos
        };




        const response = await fetch("http://127.0.0.1:8000/api/partidos/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData3)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}


//////////////LLAMADO UPDATE/////////////

async function updatePartidos(id, data) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/partidos/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        // Manejar errores HTTP
        const errorText = await response.text();
        throw new Error(`Error HTTP: ${response.status} - ${errorText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error update user:', error);
      throw error;
    }
  }

//////////////LLAMADO DELETE/////////////

async function deletePartidos(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/partidos/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export default {getPartidos, postPartidos,deletePartidos,updatePartidos,}