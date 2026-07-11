
Multiplicar · JS
function generarTablas(){
    let contenido = "";
    let contenedor = document.getElementById("tabla");
    let numero = parseInt(document.getElementById("txtNumero").value);
 
    if(isNaN(numero)){
        contenedor.innerHTML = "<p class='aviso'>Escribe un número para ver su tabla ✨</p>";
        return;
    }
 
    for(let i = 1; i <= 12; i++){
        contenido = contenido + "<div class='fila'>" + numero + " × " + i + " = " + (numero * i) + "</div>";
    }
    contenedor.innerHTML = contenido;
}