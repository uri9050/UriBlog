//seleccionar contenido
//. clase;   #id
//query selector*****************************************************************************************
const heading= document.querySelector('.header__texto h2');//retorna 0 o 1 elemnto, header_texto es una clase
// console.group('Heading'); //o lo de arriba puede ser con el id #nommbre del Id, el '#' es obligatorio para seleccionar
heading.textContent= 'Nuevo Heading';
console.log(heading);

//querySelectorAll************************************************************************************
const enlaces = document.querySelectorAll('.navegacion a');// retorna de 0 a todos los que coincidan con el selector
// console.log(enlaces[0]);
enlaces[0].textContent ='Nueovo Texto para Enlace';
enlaces[0].classList.add('nueva-clase'); //para agregar o eliminar clases no hace falta el punto al prinicipio
// enlaces[0].classList.remove('navegacion__enlace');

//getElementById]**********************************************************************************
// const heading2= document.getElementById('heading h2');
// console.log(heading2);


//clase 144 crear HTML con CreateElement**********************************************
//generar un enlance
const nuevoEnlace= document.createElement('A')//ponemos la etiqueta HTML en mayuscula, sin apertura ni cierre
//agregar el href
nuevoEnlace.href= 'nuev-enlace.html';
//agregar el texto
nuevoEnlace.textContent='Un nuevo enlace';
//agregar la clase
nuevoEnlace.classList.add(navegacion__enlace);
//agregarlo al documento
const navegacion= document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); //agrega un hijo

console.log(nuevoEnlace);
