/*import CryptoJS from "crypto-js"; //import para el sha256 */
import Cookies from 'js-cookie'
const token = Cookies.get("access_token")

console.log(token);
    
async function getEventos() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/proximosEventos/', {
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
	
async function postEventos(Eventos, Descripcion,Imagen) {
    try {
        const userData = { 
            Eventos,
            Descripcion,
            Imagen
        };

        console.log(userData);

        const response = await fetch("http://127.0.0.1:8000/api/proximosEventos/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const resp =  await response.json();
        console.log('La respuesta del BackEnd:', resp);
        return resp
        


    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}


//////////////LLAMADO UPDATE/////////////
//http://127.0.0.1:8000/api/proximosEventos/



async function updateEventos(id, data) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/proximosEventos/${id}/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
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


async function deleteEventos(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/proximosEventos/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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

export default { getEventos, postEventos, updateEventos, deleteEventos }
