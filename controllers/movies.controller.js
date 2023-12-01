const Movie = require("../models/movie.model")

//Consultar todos los libros

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(
            {
                message: "Consulta De Libros",
                data: movies
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
exports.getMoviesById = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movies = await Movie.findById(movieId);
        return res.status(200).json(
            {
                message: "Consultando libro por ID" + movieId,
                data: movies
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

exports.newMovie = async (req, res) => {
    try {
        const { titulo, director, genero, year, duracion } = req.body;
        const newMovie = new Movie({ titulo, director, genero, year, duracion })
        await newMovie.save();
        return res.status(200).json(
            {
                message: "Libro creado",
                data: newMovie,
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

exports.updateMovie = async (req, res) => {
    const movieId = req.params.movieId;
    const newData = req.body;
    try {
        const updateMovie = await Movie.findByIdAndUpdate(movieId,newData,{new:true});
        return res.status(201).json(
            {
                message: `Actualizar libro por ID ${movieId} `,
                data: updateMovie,
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

exports.deleteMovie = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        await Movie.findOneAndDelete({_id:movieId});
        return res.status(200).json(
            {
                message: `Libro eliminado con ID ${movieId} `,
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error al eliminar el libro2",
                data: error,
            }
        );
    }
};
