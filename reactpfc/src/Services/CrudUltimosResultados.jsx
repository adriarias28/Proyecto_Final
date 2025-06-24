async function getUltimosResultados() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/ultimosResultados/ ', {
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

async function postUltimosResultados(Resultado, partidos_id, Imagen) {
    try {
     
        const userData3 = { 
            Resultado, 
            partidos_id,
            Imagen
        };

        console.log(userData3);
        


        const response = await fetch("http://127.0.0.1:8000/api/ultimosResultados/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData3)
        });

     
        const resp = await response.json();
        /* console.log('Respuesta del BK: ' + response.json()); */
        return resp
        

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}


//////////////LLAMADO UPDATE/////////////

async function updateUltimosResultados(id, data) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/ultimosResultados/${id}/`, {
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

async function deleteUltimosResultados(id) {
    console.log(id);
    
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/ultimosResultados/${id}/`, {
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

export default {getUltimosResultados, postUltimosResultados,deleteUltimosResultados,updateUltimosResultados,}