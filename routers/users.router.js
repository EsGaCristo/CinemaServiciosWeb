const express = require('express');
const router = express.Router();
const userController=  require('../controllers/users.controller')
const autMiddleware = require('../utils/auth.middleware')

router.post('/',autMiddleware.authenticateToken,userController.registerUser);

router.get('/',userController.getUser);

router.post('/login',userController.loginUser);

module.exports = router;