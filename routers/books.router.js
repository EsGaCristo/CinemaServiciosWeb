const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controller');

router.get('/',booksController.getBooks);

router.get('/:bookId',booksController.getBooksById);

router.get('/',booksController.newBook);

router.get('/:bookId',booksController.updateBook);

router.get('/:bookId',booksController.deleteBook);

module.exports = router;