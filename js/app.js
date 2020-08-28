var contadorR = 0;    
var respuesta = 0;
var respuestaCorrecta = 1000; 
var intentosRestantes = 4;

function contadorRestantes(){
    var html = "";
    intentosRestantes--;
    console.log(intentosRestantes)
    html+=`<h1>${intentosRestantes}</h1>`;
    document.getElementById("intentosMostrar").innerHTML = html;

    
}
function contadorDeIntentos(){
    contadorRestantes();
    contadorR++;
    respuesta = parseInt(document.getElementById("respuestaObtenida").value) ;
    if(respuesta === this.respuestaCorrecta){
        alert("¡Felicidades ganaste!");
        document.getElementById("botonIntento").disabled="true";
    }
    else{
    this.darPistas(this.contadorR);
    }
};

function darPistas(){
    var html ="";
    console.log("estamos en darpistass")
    if(this.contadorR === 1) {
        html+=`<h5>Tenes mas intentos</h5>`;
        document.getElementById("pistasDar").innerHTML = html;
    }
    else if(this.contadorR === 2) {
        html+=`<h5>Primer pista  </h5><h5>La respuesta es de 4 cifras</h5>`;
        document.getElementById("pistasDar").innerHTML = html;
    }
    else if(this.contadorR === 3 ) {
        html+=`<h5>Segunda pista  </h5><h5>La respuesta empieza con el numero 1</h5>`;
        document.getElementById("pistasDar").innerHTML = html;
    }
    else if(this.contadorR <= 4) {
        alert("Perdiste, podes volver al Inicio y leer la informacion de nuevo")
        document.getElementById("botonIntento").disabled="true";
    };

};

