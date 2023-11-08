const mongoose= require('mongoose');

mongoose.connect(
    'mongodb+srv://root:YyYpUwoT4ltUOjrh@cluster0.ddfnhb2.mongodb.net/libreria-db?retryWrites=true&w=majority'
)
.then(()=>console.log('Conexion exitosa a MongoseDB'))
.catch(err=>console.error('Error al conectar MongoDB:',err));

module.exports = mongoose;