
exports.getBooks = (req, res) => {
    try {
        return res.status(200).json(
            {
                message: "Consulta De Libros"
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
exports.getBooksById = (req, res) => {
    try {
        const bookId = req.params.bookId;
        return res.status(200).json(
            {
                message: "Consultando libro por ID" + bookId
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

exports.newBook = (req, res) => {
    try {
        const newBook = req.body;
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

exports.updateBook = (req, res) => {
    try {
        const bookId = req.params.bookId;
        const updateBook = req.body;
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

exports.deleteBook = (req, res) => {
    try {
        const bookId = req.params.bookId;
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
