const express = require('express');
const morgan = require('morgan');

const bookRouter = require('./routers/books.router');

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

app.listen(port, () => {
    console.log("Servidor iniciado en http://localhost:" + port);
});



/*
app.get("/",(req,res)=>{
    res.send("Bienvenido a Libreria API");
});

app.get("/books/:bookId",(req,res)=>{
    const book = {
        nombre:"Harry Potter 1",
        stock: 20,
        year:2000
    };
    res.status(200).json({
        codigo:200,
        msg:"Exito al consultar",
        data: book
    })
});

app.put("/books/:bookId",(req,res)=>{
    const bookId = req.params.bookId;

    res.status(200).json({
        codigo:200,
        msg:"Error al actualizar libro con id: "+bookId,
    })
});

app.get("/books/",(req,res)=>{
    res.send("Consultando Libros");
});*/