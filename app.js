
//acá creamos una variable para guardar el acceso al botón de creación de tarea
let crearTareaButton = document.getElementById("crearTareaButton");

//esta linea indica que cuando se haga click en el botón de crear se va a ejecutar todo
//el código de la función creatTarea que está más abajo
crearTareaButton.addEventListener("click", creatTarea);


//acá tenes que escribir el código necesario para mostrar las tareas en pantalla
function creatTarea(){

    //acá se obtiene el texto de la tarea nueva
    let nuevaTarea = document.getElementById("inputTarea").value;

    //acá abajo tendrías que poner el código necesario para crear la tarea
    //es importante que solo la crees si se ingreso texto en en input,
    //si el input está vacio no se tiene que hacer nada
    //tendrías que verificar si nuevaTarea es distinto de un string vacio, el string vacio es ""
    //el pseudo codigo seria asi:
    //si la nueva tarea no esta vacia
    //creo un nuevo elemento de tipo li
    //le asigno el texto de la nueva tarea
    //agrego el elemento li dentro de la lista
}