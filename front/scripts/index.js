
const axios = require("axios");
const renderCards = require('./renderCards');

const fechtMovie = async () => {
    try {
        const URL = "http://localhost:3000/movies";
        const response = await axios.get(URL);
        const movies = response.data;

        // Verificar si la respuesta es un array de películas
        if (Array.isArray(movies)) {
            renderCards(movies);
        } else {
            console.error('La respuesta no es un array de películas:', movies);
        }
    } catch (error) {
        console.error('Error al obtener las películas:', error.message);
    }
}

fechtMovie();
