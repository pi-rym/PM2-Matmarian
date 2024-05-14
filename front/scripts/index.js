const moviesContainer = document.getElementById('movies-container');


$.get('https://students-api.up.railway.app/movies', (data) => {
    // Verificar si la solicitud es exitosa
    if (data && data.length > 0) {
        // Renderizar las tarjetas de películas
        renderCards(data);
    } else {
        console.error('No se recibió ningún dato de películas.');
    }
});

// Función para renderizar las tarjetas de películas
function renderCards(data) {
    data.forEach((movie) => {
        // Crear elementos HTML para la tarjeta
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h3');
        title.classList.add('card-title');
        title.textContent = `Título: ${movie.title}`;;

        const director = document.createElement('p');
        director.classList.add('card-director');
        director.textContent = `Director: ${movie.director}`;;

        const duration = document.createElement('p');
        duration.classList.add('card-duration');
        duration.textContent = `Duración: ${movie.duration}`;

        const genre = document.createElement('p');
        genre.classList.add('card-genre');
        genre.textContent = `Genero: ${movie.genre}`;

        const rate = document.createElement('p');
        rate.classList.add('card-rate');
        rate.textContent = `Puntuacion: ${movie.rate}`;
               
        const poster = document.createElement('img');
        poster.classList.add('card-image');
        poster.src = movie.poster;

        const year = document.createElement('p');
        year.classList.add('card-text');
        year.textContent = `Año: ${movie.year}`;

        const button = document.createElement('button');
        button.classList.add('card-button');
        button.textContent = 'Haz clic para Ver';

        card.appendChild(poster);
        card.appendChild(title);
        card.appendChild(director);
        card.appendChild(duration);
        card.appendChild(genre);
        card.appendChild(rate);
        card.appendChild(year);
        card.appendChild(button);
     

        // Agregar la tarjeta al contenedor
        moviesContainer.appendChild(card);
    });
}
