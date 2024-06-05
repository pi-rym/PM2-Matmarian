const moviesService = require("../service/moviesService");

const moviesController = async (req, res) =>{

try {
    const movies = await moviesService();
    res.status(200).json(movies);

} catch (error) {    
    res.send({
        message: "Error en el servidor",
        error: "error, message"
    }); 
}
};

module.exports = moviesController;