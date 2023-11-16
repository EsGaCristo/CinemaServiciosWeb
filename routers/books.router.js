const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controller');
const autMiddleware = require('../utils/auth.middleware')
router.get('/',autMiddleware.authenticateToken,booksController.getBooks);

router.get('/:bookId',booksController.getBooksById);

router.post('/',autMiddleware.authenticateToken,booksController.newBook);

router.put('/:bookId',autMiddleware.authenticateToken,booksController.updateBook);

router.delete('/:bookId',autMiddleware.authenticateToken,booksController.deleteBook);

module.exports = router;