'use strict'

var numPantalla = ''; //el numero saldra por pantalla 
var numerosEnPantalla ='si';//dira si es una operacion de numeros enteros 
var puntoPantalla ='no';//dira si es operaciones decimales 
var numEspera =0; //es para realizar la operacion con el segundo valor
var operacion = ""//aqui iran los operadores para realizar las operaciones 
var resultado = ''//para mostrar el resultado de la operacion 

/*
En la function addNum se añade los numeros para pode realizar las operaciones.
Aqui se comprobara si la operacion sera de numeros enteros o sera con numeros decimales
 */

function addNum(num){

//En este primer if comprobara si son numeros entero, para poder realizar la operacion.

    if (num != '.') {
        if (numPantalla=='0' || numerosEnPantalla == 'si') {
          document.getElementById('resultado').value =num  ;
            numPantalla=num;
            

        }else if (num!='.') {
            document.getElementById('resultado').value +=num  ;
            numPantalla+=num;
            
        }
    } ;

    //El segundo if se comprueba si son los numeros decimales, para poder realizar la operacion correctamente
    
    if(num=='.' && puntoPantalla =='no' && numerosEnPantalla=='0'){
        document.getElementById('resultado').value ='0.';
        numPantalla=num;
        puntoPantalla ='si';

    }  else if(num=='.' && puntoPantalla =='no' ){
        document.getElementById('resultado').value  +=num;
        numPantalla += num;
        puntoPantalla ='si'


    }
    else if (num=='.' && puntoPantalla =='si') {
        
    };

    numerosEnPantalla ='no';
};

 //aqui vamos a capturar los simbolos de las operaciones
function realizaOperacion(operar){
    if (operacion == '') {
        numEspera =  document.getElementById('resultado').value;
        document.getElementById('resultado').value  += operar;
        operacion = operar;
        numPantalla=""
        puntoPantalla='no'
        numerosEnPantalla = 'no'
    }
    
};

//aqui se hara una concatenacion donde se realizara las operaciones correspondientes 
function mostrarResultado(){
    if (operacion != "") {
        resultado = numEspera + operacion + numPantalla;//esta concatenacion es donde se realizan las operaciones
        document.getElementById('resultado').value = eval(resultado);
        //
        numPantalla +=eval(resultado)
        operacion = "";
        puntoPantalla = "no"
        numerosEnPantalla ="no"
    };


}

//esto es para poder limpiar la pantalla
function limpiar(){

    numPantalla = '';
    numerosEnPantalla ='si';
    puntoPantalla ='no';
    numEspera =0;
    operacion = "";
    resultado = '';

    document.getElementById('resultado').value  = 0;
}
