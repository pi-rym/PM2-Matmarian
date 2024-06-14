
const express = require("express");
const { moviesController, movieCreateController } = require("../controllers/moviesController");

const router = express.Router();

router.get("/movies", moviesController); 
router.post("/movies", movieCreateController); 

module.exports = router;
