// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "pokemon";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 151;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  var string = str;
  return string
  
}

function suma(x, y) {
  var suma = x + y;
  return suma;
  
}

function resta(x, y) {
  var resta = x - y;
  return resta;
  
}

function multiplica(x, y) {
  var mult = x * y;
  return mult;
  
}

function divide(x, y) {
  var pro = x / y;
  return pro;
  
}

function sonIguales(x, y) {
  if (x === y) {
    return true; 
  }
  if (x < y) {
    return false;
  }
  if (x > y) {
    return false;
  }
  
}

function tienenMismaLongitud(str1, str2) {
  return str1.length === str2.length;

}

function menosQueNoventa(num) {
  if (num <90) {
    return true;
  }

  return false;
  
}

function mayorQueCincuenta(num) {
  if (num >50) {
    return true;
  }

  return false
  
}

function obtenerResto(x, y) {
  var Div = x % y;
  return Div;
  
}

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  }

  return false
  
}

function esImpar(num) {
  if (num % 2 === 1) {
    return true;
  }

  return false
  
}

function elevarAlCuadrado(num) {
  var AlCuadrado = num * num;
  return AlCuadrado;
  
}

function elevarAlCubo(num) {
  var AlCubo = num * num * num;
  return AlCubo;
  
}

function elevar(num, exponent) {
  return Math.pow (num, exponent)
  
}

function redondearNumero(num) {
  return Math.round (num)
  
}

function redondearHaciaArriba(num) {
  return Math.ceil (num)
  
}

function numeroRandom(x, y) {
  return Math.random (x, y)
  
}

function esPositivo(numero) {
  if (numero === 0) {
    return false;
  }
  else if (numero > 0) {
    return "Es positivo";
  }
  else if (numero < 0) {
    return "Es negativo";
  }
  
}

function agregarSimboloExclamacion(str) {
  return str + '!';
}

function combinarNombres(nombre, apellido) {
  return nombre + " " + apellido;
  
}

function obtenerSaludo(nombre) {
  return 'Hola ' + nombre + '!';
  
}

function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
  
}


function retornarPerimetro(lado){
  return lado + lado + lado + lado;
  
}


function areaDelTriangulo(base, altura){
  return base * altura / 2; 

}


function deEuroAdolar(euro){
  return euro * 1.2;
  
}


function esVocal(letra){
  if (letra.length >1){
    return "Dato incorrecto"
  }
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return "Es vocal"
  }
  return "Dato incorrecto"
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
