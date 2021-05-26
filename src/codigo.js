//git init => git add . => git commit -m 'comentario' => git push origin --set-upstream master
// todos los tipos de variable que necesitan saber 
// basicas
let nulo = null;
let indefinido = undefined;

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
let promesa = new Promise((resolve,reject)=>{
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


let respuestaNumero4 = numero1&&numero2; // true
let respuestaNumero4 = 0&&numero2; // false

let funcion = function (numero1,numero2){
    if(numero1&&numero2){
        //hacer algo 
    }else{
        return false
    }
}

// listas o arrays
// como llamar a un elemento dentro de un array 
let array_1 = [1,2,3];
let array_2 = [4,5,6];

console.log(array_1[2]) //=> 3
console.log(array_1[1]) //=> 2
console.log(array_1[0]) //=> 1



//"spread" =>"..." operators  array en español es lista 
let array1 = [1,2,3]
let array2 = [4,5,6]


let nuevoArray = [...array1,...array2] // => [1,2,3,4,5,6]

// objetos
// como llamar a un elemento dentro de un objeto 

let objeto_1 = {uno:1,dos:2,tres:3}

console.log(objeto_1.dos); // => 2
console.log(objeto_1.tres); // => 3
console.log(objeto_1.uno); // => 1

//"spread" =>"..." operators  objetos 

let objeto1 = {uno:1,dos:2,tres:3}
let objeto2 = {cuatro:4,cinco:5,seis:6}

let nuevoObjeto = {...objeto1,...objeto2} // => {uno:1,dos:2,tres:3,cuatro:4,cinco:5,seis:6}

// operaciones basicas con funciones no existen 
let funcionQueNecesitaSerLLamada = function(parametro){
    return 'algo';
}

funcionQueNecesitaSerLLamada(pasoUnParametro);

// sentencias 

// sentencia if  con else 
condition = true 

if (condition) { // true , numero mayores a 0 , textos diferentes de nulo  (no null), o cualquier otro tipo de variable distinta a undefined o null
    // hace algo 
} else { // todo lo diferente mencionado en la parte de arriba 
    // si condition es falso 
}

//sentencia for of 

array = [1,2]
for (const value of array) {

}

// sentencia for in 
object = {uno:1}

for (const key in object) {
    
}

// sentencia switch 
key = 'algo' // cualquier tipo de variable 

switch (key) {
    case value: // entra si value === key 
        
        break;

    case value1: // entra si value1 === key 
        
        break;

    default:
        break;
}

/// curiocodades "MUY SUPER IMPORTANTES"

// ALGO MUY CARACTERISTICO de los tipos de variables objetos y
// array es que pueden acumular otros tipos de variables 

let arrayDeTodo = [ null, undefined, true
                    ,"algo", 2, ['uno','dos','tres']
                    , {
                        llave1 : 1,
                        llave2 : 'texto'
                    }
                    ,function algo(){
                        return 'algo'
                    }
                    ,new Promise((resolve,reject)=>{
                        resolve('hola muno');
                        reject(false);
                    })
                 ];

console.log(arrayDeTodo[4]); // => ['uno','dos','tres']


let ObjetoDeTodo = {
    "nulo" : null,
    "indefinido" : undefined,
    "logicas" : true, 
    "texto" : "algo",
    "numero" : 2,
    "lista" : ['uno','dos','tres'],
    "objeto" : {
        "llave1" : 1,
        "llave2" : 'texto'
    },
    "funcion" : function( parametro1,parametro2){
        return parametro1 + parametro2;
    },
    "promesa" : new Promise((resolve,reject)=>{
        resolve('hola muno');
        reject(false);
    })
};

console.log(arrayDeTodo[4]); // => ['uno','dos','tres']



//cada variable tiene metodos especiales según su tipo

// let resultadoDeMetodo = algunTipoDeVariable.elMetodo(parametroX,...)

// metodos populares en variables logicas (Booleanas)



unirPalabrasConEspacio('hola','mundo'); // "hola mundo"

let unirPalabrasConEspacio = function (text1,text2){
    return text1 + ' '+ text2
}