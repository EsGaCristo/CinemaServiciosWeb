const express = require('express');
const morgan = require('morgan');

require('./utils/mongoConnection')

const bookRouter = require('./routers/books.router');
const movieRouter = require('./routers/movies.router');
const userRuter  = require('./routers/users.router');

//Declararemos puertos
const app = express();
const port = 3003;

app.use(morgan('dev'));

//Rutas
app.get("/", (req, res) => {
    res.send("Bienvenido a libreria API")
});
app.use(express.json({ limit: "50mb" }));

app.use('/books', bookRouter);
app.use('/movies',movieRouter);
app.use('/users',userRuter)

app.listen(port, () => {
    console.log("Servidor iniciado en http://localhost:" + port);
});


