async function getBiografiaJugador() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/biografiaJugador/ ', {
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

async function postBiografiaJugador(Nombre_Completo,
            Fecha_Nacimiento,
            Edad,
            Lugar_Nacimiento,
            Nacionalidad,
            Altura,
            Peso,
            Posicion,
            Numero,
            Club_Actual,
            Pie_Dominante) {
    try {
     
        /* const userData = { 
            'Nombre_Completo': Jugador,
            'Fecha_Nacimiento': Nacimiento,
            'Edad': Edad,
            'Lugar_Nacimiento': Lugar,
            'Nacionalidad': Nacionalidad,
            'Altura': Altura,
            'Peso': Peso,
            'Posicion' :Posicion,
            'Numero': Numero,
            'Club_Actual': Club,
            'Pie_Dominante': Dominante
    
        };

        const userData2 = { 
            Nombre_Completo: Jugador,
            Fecha_Nacimiento: Nacimiento,
            Edad: Edad,
            Lugar_Nacimiento: Lugar,
            Nacionalidad: Nacionalidad,
            Altura: Altura,
            Peso: Peso,
            Posicion :Posicion,
            Numero: Numero,
            Club_Actual: Club,
            Pie_Dominante: Dominante
    
        };
 */
        const userData3 = { 
            Nombre_Completo,
            Fecha_Nacimiento,
            Edad,
            Lugar_Nacimiento,
            Nacionalidad,
            Altura,
            Peso,
            Posicion,
            Numero,
            Club_Actual,
            Pie_Dominante
        };




        const response = await fetch("http://127.0.0.1:8000/api/biografiaJugador/", {
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

async function updateBiografiaJugador(id, data) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/biografiaJugador/${id}/`, {
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

async function deleteBiografiaJugador(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/biografiaJugador/${id}/`, {
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

export default {getBiografiaJugador, postBiografiaJugador,deleteBiografiaJugador,updateBiografiaJugador,}