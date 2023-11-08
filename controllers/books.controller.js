const Book = require("../models/book.model")

//Consultar todos los libros

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json(
            {
                message: "Consulta De Libros",
                data: books
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error al consultar libros",
                data: error
            }
        );
    }
};
exports.getBooksById = async (req, res) => {
    const bookId = req.params.bookId;
    try {
        const book = await Book.findById(bookId);
        return res.status(200).json(
            {
                message: "Consultando libro por ID" + bookId,
                data: book
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error al consultar libros",
                data: error
            }
        );
    }
};

exports.newBook = async (req, res) => {
    try {
        const { titulo, autor, isbn, genero, precio, stock } = req.body;
        const newBook = new Book({ titulo, autor, isbn, genero, precio, stock })
        await newBook.save();
        return res.status(200).json(
            {
                message: "Libro creado",
                data: newBook,
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error al crear libro",
                data: error
            }
        );
    }
};

exports.updateBook = async (req, res) => {
    const bookId = req.params.bookId;
    const newData = req.body;
    try {
        const updateBook = await Book.findByIdAndUpdate(bookId,newData,{new:true});
        return res.status(201).json(
            {
                message: `Actualizar libro por ID ${bookId} `,
                data: updateBook,
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error al actualizar el libro",
                data: error,
            }
        );
    }
};

exports.deleteBook = async (req, res) => {
    const bookId = req.params.bookId;
    try {
        await Book.findByIdAndRemove(bookId);
        return res.status(200).json(
            {
                message: `Libro eliminado con ID ${bookId} `,
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error al eliminar el libro",
                data: error,
            }
        );
    }
};
