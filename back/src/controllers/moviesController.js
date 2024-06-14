
const { moviesService,  createMovie } = require("../service/moviesService");

const moviesController = async (req, res) => {
    try {
        const movies = await moviesService();
        res.status(200).json(movies);
    } catch (error) {    
        res.status(500).send({
            message: "Error en el servidor",
            error: error.message
        });
    }
};

const movieCreateController = async (req, res) => {
      try {
        const movies = await createMovie(req.body);
        res.status(200).json(movies);
    } catch (error) {
        res.status(400).send({
            message: "Error en el servidor",
            error: "Pelicula no ha sido creada con éxito"
        });       
        
    };
};

module.exports = { moviesController, movieCreateController };
