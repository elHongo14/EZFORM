function validarFormulario(){
    $('.alert').remove();


    var nombre=$('#nombre').val(),
        apellidos=$('#apellidos').val(),
        correo=$('#correo').val(),
        comentarios=$('#comentarios').val();

    if(nombre=="" || nombre==null){

        cambiarColor("nombre");
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(nombre)){
            cambiarColor("nombre");
            mostraAlerta("No se permiten carateres especiales o numeros");
            return false;
        }
    }

    if(apellidos=="" || apellidos==null){

        cambiarColor("apellidos");
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(apellidos)){
            cambiarColor("apellidos");
            mostraAlerta("No se permiten carateres especiales o numeros");
            return false;
        }
    }

    if(correo=="" || correo==null){

        cambiarColor("correo");
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(correo)){
            cambiarColor("correo");
            mostraAlerta("Por favor ingrese un correo válido");
            return false;
        }
    }

     if(comentarios=="" || comentarios==null){

        cambiarColor("comentarios");
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(comentarios)){
            cambiarColor("comentarios");
            mostraAlerta("No se permiten caracteres especiales");
            return false;
        }
    }

    $('form').submit();
    return true;
    
} 

$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('asunto');
});

$('textarea').focus(function(){
    $('.alert').remove();
    colorDefault('mensaje');
});

function colorDefault(dato){
    $('#' + dato).css({
        border: "1px solid #999"
    });
}

function cambiarColor(dato){
    $('#' + dato).css({
        border: "1px solid #dd5144"
    });
}

function mostraAlerta(texto){
    $('#nombre').before('<div class="alert">Error: '+ texto +'</div>');
}