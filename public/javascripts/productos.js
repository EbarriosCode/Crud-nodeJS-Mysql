$(function(){
    // function ajax para eliminar prdocutos
    $('#tb-productos #btn-eliminar').click(function(e){
        e.preventDefault();
        var elemento = $(this);
        var id = elemento.parent().parent().find('#idProducto').text();
        //alert(id);

        var confirmar = confirm('Está seguro de eliminar este producto');
        if(confirmar)
        {
            $.ajax
            ({
                url:'http://localhost:3000/eliminar',
                method: 'post',
                data: {id: id},
                success: function(response){
                    //console.log(response);
                    if(response.res){
                        elemento.parent().parent().remove();
                    }
                }
            });
        }
        
    });
});