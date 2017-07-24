$(function(){
    $('.form-nuevoproducto form').form({
        nombre : {
            identifier : 'nombre',
            rules : [
                {
                    type : 'empty',
                    prompt : 'El campo nombre es obligatorio'
                }
            ]
        },

        precio : {
            identifier : 'precio',
            rules : [
                {
                    type : 'empty',
                    prompt : 'El campo precio es obligatorio'
                },
                {
                    type : 'number',
                    prompt : 'El precio debe ser númerico'
                }
            ]
        },

        stock : {
            identifier : 'stock',
            rules : [
                {
                    type : 'empty',
                    prompt : 'El campo stock es obligatorio'
                },
                {
                    type : 'integer',
                    prompt : 'El stock debe ser un número entero'
                }
            ]
        }
    });
});