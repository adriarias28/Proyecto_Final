/*import CryptoJS from "crypto-js"; //import para el sha256 */
import Cookies from 'js-cookie'
const token = Cookies.get("access_token");

console.log(token);

    
    async function getUsuarios() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/usuario/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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



async function getUsuariosid(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/usuario/${id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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
	
async function postUsuarios(username, apellido, email, password) {
    try {
        const userData = { 
            username,
            email,
            password, 
            first_name: username,
            last_name: apellido  // importante si tu serializer lo espera
        };

        console.log(userData);

        const response = await fetch("http://127.0.0.1:8000/api/usuario/", {
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


async function updateUsuarios(username, last_name, email, id ) 
{
    try {
     
        const userData = { 
            username, 
            last_name, 
            email,
            id
        };

        console.log(userData);
        
        const response = await fetch("http://127.0.0.1:8000/api/usuario/"+id+'/', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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


async function deleteUsuarios(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/usuario/${id}`, {
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


//////////// llamamdos login

async function postApiToken(username,password) {
    try {
        const userData = { 
            username: username,
            password: password // importante si tu serializer lo espera
        };

        console.log(userData);

        const response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            const errorData = await res.json();
            console.error("Backend error:", errorData); 
            throw new Error("Error posting user");
        }
        const result = await response.json();
        console.log(result);
         return result;
        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}


export default { deleteUsuarios, postUsuarios, updateUsuarios, getUsuarios, postApiToken, getUsuariosid }
