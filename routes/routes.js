var express = require('express');
var router = express.Router();

var controllers = require('../controllers');
/* GET home page. */
router.get('/', controllers.homecontroller.index);


/* Rutas para productos */
router.get('/productos',controllers.productoscontroller.getProductos);
router.get('/nuevo',controllers.productoscontroller.getNuevoProducto);
router.post('/crear',controllers.productoscontroller.postNuevoProducto);
router.post('/eliminar',controllers.productoscontroller.eliminarProducto);
router.get('/modificar/:idProducto',controllers.productoscontroller.getModificarProducto);
router.post('/editar',controllers.productoscontroller.postModificarProducto);

module.exports = router;
