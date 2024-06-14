
const URL_FORM = 'http://localhost:3000/movies';

const buttonSend = document.getElementById('send');

buttonSend.addEventListener('click', (evento) => {
    evento.preventDefault();
   
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const poster = document.getElementById('poster').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;
    const duration = document.getElementById('duration').value;
    const rate = document.getElementById('rate').value;

    const data = {
        title,
        director,
        poster,
        year,
        genre,
        duration,
        rate
    };

    fetch(URL_FORM, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Limpiar los campos del formulario después de enviar los datos
        document.getElementById('title').value = '';
        document.getElementById('director').value = '';
        document.getElementById('poster').value = '';
        document.getElementById('year').value = '';
        document.getElementById('genre').value = '';
        document.getElementById('duration').value = '';
        document.getElementById('rate').value = '';
    })
    .catch(error => console.error('Error:', error));
});

const buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', (evento) => {
    evento.preventDefault();
    // Limpiar los campos del formulario
    document.getElementById('title').value = '';
    document.getElementById('director').value = '';
    document.getElementById('poster').value = '';
    document.getElementById('year').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('rate').value = '';
});


