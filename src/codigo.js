// todos los tipos de variable que necesitan saber 
// basicas
let logicas = true; 
let texto = "algo";
let numero = 2;

// especiales
let lista = ['uno','dos','tres'];

let objeto = {
    llave1 : 1,
    llave2 : 'texto'
}

let funcion = function( parametro1,parametro2){
    return parametro1 + parametro2;
}

//superespeciales
let = new Promise((resolve,reject)=>{
    resolve('hola muno');
    reject(false);
})


//////////////////////////////////////////



// operaciones basicas segun tipo de variable

// logicas(booleanas)
let verdadero = true ; 
let falso = false; 

// tabla logica 
let respuesta1 = verdadero && falso; // a "and" b  => false
let respuesta2 = verdadero || falso; // a "or" b  => verdadero 


// variable tipo texto

let texto1 = 'hola' ; 
let texto2 = ' mundo'; 

let respuestaTexto1 = texto1 + texto2; // 'hola mundo'

let _texto1 = 'hola' ; 
let _texto2 = 2; 

let _respuestaTexto1 = _texto1 + _texto2; // 'hola2'


// variable tipo numero

let numero1 = 1 ; 
let numero2 = 2; 

let respuestaNumero1 = numero1 + numero2; // 3
let respuestaNumero2 = numero1 - numero2; // -1
let respuestaNumero3 = numero1*numero2; // 2
let respuestaNumero4 = numero1/numero2; // 0.5

// listas o arrays
//"spread" =>"..." operators  array en español es lista 
let array1 = [1,2,3]
let array2 = [4,5,6]

let nuevoArray = [...array1,...array2] // => [1,2,3,4,5,6]

// objetos
//"spread" =>"..." operators  objetos 

let objeto1 = {uno:1,dos:2,tres:3}
let objeto2 = {cuatro:4,cinco:5,seis:6}

let nuevoObjeto = {...objeto1,...objeto2} // => {uno:1,dos:2,tres:3,cuatro:4,cinco:5,seis:6}

// operaciones basicas con funciones no existen 
let funcionQueNecesitaSerLLamada = function(parametro){
    return 'algo';
}

funcionQueNecesitaSerLLamada(pasoUnParametro);


//cada variable tiene metodos especiales según su tipo

// let resultadoDeMetodo = algunTipoDeVariable.elMetodo(parametroX,...)

// metodos populares en variables logicas (Booleanas)



unirPalabrasConEspacio('hola','mundo'); // "hola mundo"

let unirPalabrasConEspacio = function (text1,text2){
    return text1 + ' '+ text2
}