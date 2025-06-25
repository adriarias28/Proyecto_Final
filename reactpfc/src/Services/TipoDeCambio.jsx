//API del Banco Central de Costa Rica para el tipo de cambio de dolar del dia a dia

    async function GetTipoDeCambio() {
    try {
        const response = await fetch('https://api.hacienda.go.cr/indicadores/tc', { 
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
        console.error('Error fetching USD:', error);
        throw error;
    }
}

export default GetTipoDeCambio