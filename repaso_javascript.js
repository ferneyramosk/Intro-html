//comentario una sola linea
/*
comentario
 doble linea
*/

//definicion de variable simbre con let 

let nombre="Rolando";
let edad_supuesta="18";
console.log("nombre: "+nombre+" edad: "+edad_supuesta);    # Muestra en la pagina en consola


//condicional if
if(nombre =='Rolando' && edad_supuesta>18){
    alert("Eres mayor rolando")                            # Sele una ventana emergente en la pag.
}else if(nombre =='Rolando' && edad_supuesta==18){
    alert("Tienes 18")
}else{
    alert("No eres mayor")
}

//funcion
function saludar(){
    alert("Esto es un saludo desde funcion");
}

//saludar();

let lista_javascript=['Variables','Condicionales','Funciones','Iteraciones','Listas'];

for (let i = 0; i < lista_javascript.length; i++) {
    console.log(lista_javascript[i])
    
}


/

//Entrada de dato
//let edad = prompt("¿Cuántos años tienes?");
//console.log("tu edad es: ",edad)
*/

//salida de informacion
//console.log("Hola esto es javascript")
//alert("hola")