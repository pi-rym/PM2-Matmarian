class Movie {
    constructor(title, director, poster){
        if(!title || !director || !poster) {
            throw new Error ("Faltan campos obligatorios")
        }
        this.title = title;
        this.director = director;
        this.poster = poster;
    }
}

module.exports = Movie;