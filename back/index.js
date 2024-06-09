const  app = require("./src/server")
const router = require("./src/routers/moviesRoutes")
const dbConfig = require("../back/src/config/dbConfig")

const PORT= 3000;

app.use(router);

dbConfig().then(() => {
    app.listen(PORT, () => {
    console.log("Se esta utilizando el puerto 3000");    
}); 

}) .catch((error)=>{ console.log(error);});

