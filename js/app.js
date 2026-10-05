function tocaboton(){
    //con esto capturo lo que hay en el input
    let texto = document.getElementById("txtMensaje").value;
    //con esto cambio el estilo de una etiqueta html
    document.getElementById("parrafo").style.color="red";
    //cambiar texto de una etiqueta p
    document.getElementById("parrafo1").innerHTML="Esto lo cambie con javascript";
    alert(texto)
}