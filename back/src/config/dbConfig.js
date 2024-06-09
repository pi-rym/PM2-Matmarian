const mongoose = require ("mongoose");

const URI =  "mongodb+srv://matimariano85:IynwygeAJoe32ShT@prueba.xr9sjhr.mongodb.net/prueba"

const dbConfig = async ()=> {
    await mongoose.connect(URI)

}

module.exports = dbConfig;