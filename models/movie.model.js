const mongoose = require('mongoose')

let movieSchema = new mongoose.Schema({
    titulo: {type:String},
    director: {type:String},
    genero: {type:String},
    year:{type:String},
    duracion:{type:Number},
});
module.exports = mongoose.model('Movie',movieSchema,'movie');