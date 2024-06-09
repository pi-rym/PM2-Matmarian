class Movie {
    constructor(title, director, poster){
        if(!title || !director || !poster || !year || !genre || !duration || !rate) {
            throw new Error ("Faltan campos obligatorios")
        }
        this.title = title;
        this.director = director;
        this.poster = poster;
        this.year = year;
        this.genre = genre;
        this.duration = duration;
        this.rate = rate;

    }
}

module.exports = Movie;