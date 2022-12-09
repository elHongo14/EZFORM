const sexo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const btn = document.getElementById("botoncito")
btn.addEventListener('click',()=>{
    if(sexo.test(document.getElementById("correo").value)){
        
    }
    else{
        alert("no puta")
    }
})