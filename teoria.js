//para crear un elemento html se hace así:
let header = document.createElement("header");

//para poner un elemento dentro de otro se hace así:

//creo un nav
let nav = document.createElement("nav");

//lo meto adentro del header:
header.appendChild(nav);

//muchas veces vamos a necesitar obtener un elemento del html y agregarle cosas:
let elemento = document.getElementById("idDelElemento que queremos");

//y después a ese elemento le hacemos el appendChild.