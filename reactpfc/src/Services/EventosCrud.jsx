/*import CryptoJS from "crypto-js"; //import para el sha256 */
    
    
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
	
async function postEventos(Eventos, Descripcion) {
    try {
        const userData = { 
            Eventos,
            Descripcion
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


async function updateEventos(usuario, password, id) 
{
    try {
     
        const userData = { 
            usuario,
            password,
            id 
        };


        const response = await fetch("http://127.0.0.1:8000/api/proximosEventos/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
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

export default { getEventos, postEventos, updateEventos, deleteEventos }
