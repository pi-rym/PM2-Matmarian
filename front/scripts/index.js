console.log(tempData);
//$.get("https://students-api.2.us-1.fl0.io/movies").done((data) => {

// Obtener el contenedor creado en el HTML
const container = document.querySelector('.container');

// Mapear los objetos en tempData y construir las tarjetas
//tempData.forEach(movie); {
    $.get("https://students-api.2.us-1.fl0.io/movies", (movies)=>{
        movies.forEach((movie) => {
                  

    // Crear elementos HTML para la tarjeta
    const card = document.createElement('div');
    card.classList.add('card');

    const personaje = document.createElement('div');
    personaje.classList.add('personaje');

    const imagenPelicula = document.createElement('div');
    imagenPelicula.classList.add('imagen_pelicula');
    imagenPelicula.style.backgroundImage = `url(${movie.poster})`; // Establecer la imagen de fondo

    const detalle = document.createElement('div');
    detalle.classList.add('detalle');

    const title = document.createElement('h2');
    title.textContent = movie.title;

    const description = document.createElement('p');
    description.textContent = `Year: ${movie.year}, Director: ${movie.director}, Duration: ${movie.duration}, Genre: ${movie.genre.join(', ')}, Rate: ${movie.rate}`;

    const btn = document.createElement('div');
    btn.classList.add('btn');
    btn.innerHTML = '<h6>Leer Más</h6>';

    // Construir la estructura de la tarjeta
    detalle.appendChild(title);
    detalle.appendChild(description);
    detalle.appendChild(btn);

    personaje.appendChild(imagenPelicula);
    personaje.appendChild(detalle);

    card.appendChild(personaje);

    // Agregar la tarjeta al contenedor
    container.appendChild(card);
})
});


