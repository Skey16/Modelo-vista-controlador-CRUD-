var express = require('express');

var userController = require('../src/user/userController');
const router = express.Router();

// ruta para login
router.route('/user/login').get(userController.loginUserControllerFunc);
// ruta para crear usuario
router.route('/user/create').post(userController.createUserControllerFunc);
//ruta para buscar usuario 
router.route('/user/search').get(userController.searchEmailControllerFunc);
//ruta para eliminar usuario
router.route('/user/delete').delete(userController.deleteUserControllerFunc);
//ruta para modificar usuario
router.route('/user/update').put(userController.updateUserControllerFunc);

module.exports = router;
