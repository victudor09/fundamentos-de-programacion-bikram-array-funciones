
let arrayVacio = [];

let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];

let arrayNumerosPares = [0,2,4,6,8];

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//Funciones

//5

function suma (a, b) {
    return a + b;
}


//6
function potenciacion (a, b) {
    return a**b;
}


//7
function separarPalabras (string) {
    return string.split (' ');
}
/*
let string = "hola mundo";
let palabras = separarPalabras(texto);
console.log(palabras);
*/

//8
function repetirString (string, num){
    return string.repeat (num)
}

//9
function esPrimo (num) {
   for (let i = 2; i < num; i++) {
        if (num % i === 0) {
        return false
        }
   }
   return true
    }

//10

function ordenarArray (array) {
    array.sort ();
    return array
}

//11
function obtenerPares(array) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
    
        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}

//12

function pintarArray(array) {
    let resultado = array[0].toString();
  
    for (let i = 1; i < array.length; i++) {
      resultado += ", " + array[i].toString();
    }
    return "[" + resultado + "]";
  }
  
  pintarArray([0, 1, 2]);


//13

function arrayMapi(array, funcion) {
    // Creamos un nuevo array para almacenar los resultados
    let resultado = [];

    // Iteramos sobre cada elemento del array dado
    for (let i = 0; i < array.length; i++) {
        // Aplicamos la función a cada elemento y almacenamos el resultado en el nuevo array
        resultado.push(funcion(array[i], i));
    }

    // Devolvemos el nuevo array con los resultados
    return resultado;
}

//14

function eliminarDuplicados(array) {
    let resultelim = [];
    for (let i = 0; i < array.length; i++) {
        if (resultelim.indexOf(array[i]) === -1){
            resultelim.push(array[i])
        }
    }
    return resultelim;
}

//15
let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];

//16
let holaMundo = ['Hola','Mundo'];

//17

let loGuardoTodo = ['hola','que', 23, 42.33, 'tal'];

//18
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

//FUNCIONES
//19

function multiplicacion(a,b) {
    return a*b;
}

//20
function division(a,b) {
    return a/b;
}

//21
function esPar(num) {
    if(num % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

//22
function resta(a, b){
    return a-b;
}

let arrayFunciones = [suma, resta, multiplicacion]

//23
function ordenarArray2(arraynum){    
    let arrayord = []
    arraynum.sort();
    arrayord = arraynum.reverse()
    return arrayord
}

//24
function obtenerImpares(array) {
    let impares = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0){
            impares.push(array[i]);
        }
    }
    return impares;
}

//25
function sumarArray(arraynum){
    let suma = 0;
    for(let i = 0; i<arraynum.length; i++){
        suma += arraynum[i]; // Así sumo elemento actual a la suma total
    }
    return suma;
}

//26
function multiplicarArray(arraynum){
    let multiplicacion = 1; 
    for(let i=0; i<arraynum.length; i++){
        multiplicacion *= arraynum[i];
    }
    return multiplicacion
}