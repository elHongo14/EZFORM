function Validar()
{
var errorp  = document.getElementById("error")
var usuario = document.getElementById("user").value;
var contraseña = document.getElementById("psw").value;


const Usuarios = {
        Correo: "ezform@gmail.com",
        contraseña:"hola"
}

if (usuario == Usuarios.Correo){
   
    if (Usuarios.contraseña == contraseña) {
        // alert('espera')
        // errorp.innerHTML = "Correo y contraseña correcto"
        window.location.href = 'http://localhost:5050/pagina1.html'
    }else{
        errorp.innerHTML = "Contraseña incorrecta"
    }

}else
{
    errorp.innerHTML = "Correo y contraseña incorrectos"
}
  
//var, left const, son formas de declarar una variable
//ejemplo
//var x=20;, let m=hola, const z=3.1416;
//parseInt() Convierte a un valor entero
//parseFloat() Convierte un valor decimal
//document.getElementById()- obtiene el objeto de eiqueta
//por ID



}

function load_pagina(){
    document.getElementById("content").innerHTML='<object type="type/html" data="pagina1.html" ></object>';
}