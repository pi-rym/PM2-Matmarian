const  app = require("./src/server")
const router = require("./src/routers/moviesRoutes")
const PORT= 3000;

//!llamamos a la ruta raiz de movies
app.use(router);

app.listen(PORT, () => {
    console.log("Se esta utilizando el puerto 3000");

});

