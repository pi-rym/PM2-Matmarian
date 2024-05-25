
const renderCards = require('./renderCards');

const fechtMovie = async ()=>{
    try {
        const data = await axios.get("https://students-api.up.railway.app/movies")
        console.log(data.data);
        
    } catch (error) {
        console.log(error.message);                
    }
}

fechtMovie();