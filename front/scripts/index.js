
const renderCards = require('./renderCards');

$.get('https://students-api.up.railway.app/movies', (data) => {
    // Verificar si la solicitud es exitosa
    if (data && data.length > 0) {
        // Renderizar las tarjetas de películas
        renderCards(data);
    } else {
        console.error('No se recibió ningún dato de películas.');
    }
});

