const mongose = require('mongoose');

let bookSchema = new mongose.Schema({
    titulo: {type:String},
    autor: {type:String},
    isbn: {type:String},
    genero: {type:String},
    precio:{type:Number},
    stock: {type:Number},
});

module.exports = mongose.model('Book',bookSchema,'book');