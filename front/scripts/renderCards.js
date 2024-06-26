const moviesContainer = document.getElementById('movies-container');

// Función para renderizar las tarjetas de películas
function renderCards(data) {
    // Vaciar el contenedor de películas
    moviesContainer.innerHTML = '';

    data.forEach((movie) => {
        // Crear elementos HTML para la tarjeta
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h3');
        title.classList.add('card-title');
        title.textContent = `Título: ${movie.title}`;

        const director = document.createElement('p');
        director.classList.add('card-director');
        director.textContent = `Director: ${movie.director}`;

        const duration = document.createElement('p');
        duration.classList.add('card-duration');
        duration.textContent = `Duración: ${movie.duration}`;

        const genre = document.createElement('p');
        genre.classList.add('card-genre');
        genre.textContent = `Género: ${movie.genre}`;

        const rate = document.createElement('p');
        rate.classList.add('card-rate');
        rate.textContent = `Puntuación: ${movie.rate}`;

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

module.exports = renderCards;
