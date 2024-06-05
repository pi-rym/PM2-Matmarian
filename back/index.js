const  app = require("./src/server")
const router = require("./src/routers/moviesRoutes")

const PORT= 3000;

app.use(router);

app.listen(PORT, () => {
    console.log("Se esta utilizando el puerto 3000");

});

