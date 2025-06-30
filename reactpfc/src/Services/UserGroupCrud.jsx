async function getUserGroup() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/usergroup/', {
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

async function postUserGroup(user, group=2) {
    try {
     
        const userData3 = { 
          user,
          group
        };



        const response = await fetch("http://127.0.0.1:8000/api/usergroup/", {
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

async function postUserGroupAdmin(user, group=1) {
    try {
     
        const userData3 = { 
          user,
          group
        };



        const response = await fetch("http://127.0.0.1:8000/api/usergroup/", {
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

async function updateUserGroup(user, group) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/usergroup/${id}/`, {
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

async function deleteUserGroup(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/usergroup/${id}/`, {
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

export default { getUserGroup, postUserGroup, updateUserGroup, deleteUserGroup, postUserGroupAdmin }