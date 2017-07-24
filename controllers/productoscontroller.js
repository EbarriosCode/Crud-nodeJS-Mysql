var mysql = require('mysql');
var dateFormat = require('dateformat');

// productos controller
module.exports = {

    // funciones del controlador

    // obtener todos los productos de la base de datos
    getProductos : function(req,res,next)
    {
        var config = require('../database/config');
        var db = mysql.createConnection(config);
        db.connect();

        var productos = null;

        db.query('SELECT * FROM productos',function(err, rows, fields){
            if(err) throw err;

            productos = rows;
            db.end();

            res.render('productos/productos',{productos : productos}); 
        });
    },

    getNuevoProducto : function(req,res,next){
        res.render('productos/nuevo');
    },

    postNuevoProducto : function(req,res,next){
        var fechaActual = new Date();
        var fecha = dateFormat(fechaActual,'yyyy-mm-dd');

        var producto = {
            nombre : req.body.nombre,
            precio : req.body.precio,
            stock : req.body.stock
            //fecha_creacion : fecha 
        }
        console.log(producto);

        var config = require('../database/config');
        var db = mysql.createConnection(config);
        db.connect();

        db.query('INSERT INTO productos SET ?',producto,function(err,rows,fields){
            if(err) throw err, console.log(err);

            db.end();
        });

        res.render('productos/nuevo', {info : 'Producto Creado Correctamente!'});
    },

    eliminarProducto: function(req,res,next){
        var idProducto = req.body.id;
        console.log(idProducto);
        
        var config = require('../database/config');
        var db = mysql.createConnection(config);
        db.connect();

        var respuesta = {res : false};
        
        db.query('DELETE FROM productos WHERE idProducto = ?',idProducto,function(err,rows,fields){
            if(err) throw err;          

            db.end();
            respuesta.res = true;

            res.json(respuesta);
        }); 
    },

    getModificarProducto: function(req,res,next){
        var idProducto = req.params.idProducto;
        console.log(idProducto);

        var config = require('../database/config');
        var db = mysql.createConnection(config);
        db.connect();

        var producto = null;
        db.query('SELECT * FROM productos WHERE idProducto = ?',idProducto,function(err,rows,fields){
            if(err) throw err;

            producto = rows;
            db.end();

            res.render('productos/modificar',{producto: producto});
        });
    },
    
    postModificarProducto: function(req,res,next){
        
        var producto = {
            nombre : req.body.nombre,
            precio : req.body.precio,
            stock : req.body.stock
            //fecha_creacion : fecha 
        }

        var config = require('../database/config');
        var db = mysql.createConnection(config);
        db.connect();

        db.query('UPDATE productos SET ? WHERE ?',[producto, {idProducto: req.body.idProducto}],function(err,rows,fields){
            if(err) throw err;
            db.end();
        });

        res.redirect('/productos');
    }
}