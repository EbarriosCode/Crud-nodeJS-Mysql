// home controller
module.exports = {

    // funciones del controlador
    index : function(req,res,next)
    {
        res.render('index',{title : 'Bienvenido al crud con nodejs y mysql :)'});
    }

}