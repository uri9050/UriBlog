//eventos en JS
//window es un nivel mas alto que document
console.log(1);
window.addEventListener('load', function(){ //load espera a que JJS y los archivos que dependen del HTML estén listos
    console.log(2);
});
window.addEventListener('load', imprimir); //manda a llamar la funcion imprimir
window.onload= function(){ //es lo mismo de arriba, solo con diferente sintaxis
    console.log(3);
}
document.addEventListener('DOMContentLoaded', function() { //solo espera que se cargue el HTML, e ignora el CSS, img, etc...
     console.log(4);
});

console.log(5);

function imprimir(){
    console.log(2.1);
}
window.onscroll= function(){
    console.log('scrolling...');
}
//seleccionar elementos y asignarles un evento(clase 146)*********************************************
const btnEnviar= document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    console.log(evento.preventDefault());//no permite enviar el formulario
    //clase 149 validar un formulario**********************************************
    //validar un formulario
    const {nombre, email, mensaje}= datos; //datos= lin 40
    if(nombre=='' || email==''|| mensaje==''){ //"||" significa o
        mostrarAlerta('Todos los datos son obligatorios', true);//si alguno de los tres campos de arriba estan vacios, no se enviara el formulario
        return; //corta la ejecucion del codigo
    }
    //crear la otra alerta 'Enviado correctamente'
    mostrarAlerta('Enviado correctamente');
    //Enviar el formulario

    console.log('Enviando formulario');
});
function mostrarAlerta(mensaje, error= null){ //esta funcion es lo mismo que a¿las dos funciones de abajo
    const alerta= document.createElement('P');
    alerta.textContent= mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
     //desaparece el anuncio despues de 5 s
     setTimeout(()=>{
        alerta.remove(); //quita el anuncio rojo despues de 5 segundos
    },5000);
}
// function mostrarError(mensaje){
//     const error= document.createElement('P');
//     error.textContent= mensaje;
//     error.classList.add('error');
//     formulario.appendChild(error); //muestra el mensaje rojo en el HTML
    
//     //desaparece el anuncio despues de 5 s
//     setTimeout(()=>{
//         error.remove(); //quita el anuncio rojo despues de 5 segundos
//     },5000);
// }
// function mostrarMensaje(mensaje){
//     const alerta= document.createElement('P');
//     alerta.textContent= mensaje;
//     alerta.classList.add('correcto');

//     formulario.appendChild(alerta);
//     //desaparece el anuncio despues de 5 s
//     setTimeout(()=>{
//         alerta.remove(); //quita el anuncio rojo despues de 5 segundos
//     },5000);
// }

//eventos en el teclado********************************************************************************
const datos= {
    nombre:'',
    email:'',
    mensaje:''
}
//eventos de los input y text area
const nombreInput= document.querySelector('#nombre');
//nombreInput.addEventListener('change', function(){ //change solo funciona cuando nos salimos del espacio donde escribimos
    nombreInput.addEventListener('input', function(evento){  //sirve mas para hacerlo en tiempo real, se ejecuta cada vez que escribimos
    console.log(evento.target.value); //nos muestra lo que el usuario esta escribiendo
    datos[evento.target.id]= evento.target.value;
    console.log(evento.target)
    console.log(datos);
});

const email= document.querySelector('#email');
email.addEventListener('input', leerTexto);//esto es lo mismo de arriba (lin37-39) solo que usamos una funcion declarada

const mensaje= document.querySelector('#mensaje');
mensaje.addEventListener('input', leerTexto); //leerTexto es el nombre de la funcion (lin 47)

function leerTexto(evento){
    console.log(evento.target.value); 
    datos[evento.target.id]= evento.target.value;
    console.log(evento.target)
    // console.log(datos);
}

//Evento de Submit*****************************************************************************************(clase 148)
const formulario= document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log('Enviando formulario');
});


