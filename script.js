console.log('Hola');


let diccionario= ["HOJAS","LISTA","ACTOR","BUSCA","DATOS"];
let indice= Math.floor(Math.random()* diccionario.length-1)+1;
console.log(indice);

let palabra= diccionario[indice];
console.log(palabra);
let intentos = 5;

const button= document.getElementById("guess-button");

button.addEventListener("click", intentar);

const input = document.getElementById("guess-input");
const valor = input.value;

function intentar(){

    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';

if ( INTENTO.length !=5){
    alert("SOLO SE ACEPTAN 5 LETRAS");
    return;
}

    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        
        if (INTENTO[i]===palabra[i]){

            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';

        } else if( palabra.includes(INTENTO[i]) ) {
          
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';

        } else {
           
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
       }

       ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
		intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!😖</h1>")
    }
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento= intento.value;
    intento= intento.toUpperCase();

    return intento;

}
 
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}