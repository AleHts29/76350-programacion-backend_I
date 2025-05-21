
let valoresOriginales = [1, 2, 3, 4, 5];

let nuevosValores = valoresOriginales.map(x => "A")
// console.log(nuevosValores);


//Que pasa si declaramos el callback fuera?

const mapCallback = (valor) => {
    if (valor % 2 === 0) {
        return valor;
    } else {
        return "No es par!!"
    }
}
let evaluarParesMap = valoresOriginales.map(mapCallback)
// console.log(evaluarParesMap);



//Recrear un callback de funcion map:
//Usemos un arreglo de prueba:
let arregloDePrueba = [1, 2, 3, 4, 5];

const miFuncionMap = (arreglo, callback) => {
    let nuevoArreglo = []
    for (let i = 0; i < arreglo.length; i++) {
        let nuevoValor = callback(arreglo[i])
        nuevoArreglo.push(nuevoValor)
    }
    return nuevoArreglo;
}

console.log("myCallBackTest");
let nuevoArregloCallback = miFuncionMap(arregloDePrueba, x => x + 2)
console.log(nuevoArregloCallback);

console.log("func .map");
let nuevosValoresMap = arregloDePrueba.map(x => x + 2)
console.log(nuevosValoresMap);



//Extra: Podemos agregar nuestra funcion al arreglo como tal, usando el prototype del objeto Array:
Array.prototype.miFuncMap = function (callback) {
    let nuevoArreglo = []
    for (let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i])
        nuevoArreglo.push(nuevoValor)
    }
    return nuevoArreglo;
}

console.log('miFuncMap: ', arregloDePrueba.miFuncMap(x => x + 2))



// Ejemplo de propiedades de los Obj
// const user = {
//     name: "Ariel",
//     apellido: "Suarez"
// }


// user.email = "ariel@gmail.com"
// user.telefono = "111111"



/* =====================================
=               Caluladora             =
===================================== */
// **
// * Callbacks usando distintas operaciones
// */

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;



const realizarOperacion = (num1, num2, callback) => {
    console.log(`Voy a realizar una operacion, de tipo: ${callback}`);

    let result = callback(num1, num2)
    console.log(`Result: ${result}`);
}

// Test de operaciones
// realizarOperacion(2, 5, sumar)
// realizarOperacion(2, 5, restar)
// realizarOperacion(2, 5, multiplicar)
// realizarOperacion(2, 5, dividir)


//* Callbacks Anidados
function uno(callback) {
    setTimeout(function () {
        console.log("Uno");
        callback();
    }, 1000)
}

function dos(callback) {
    setTimeout(function () {
        console.log("Dos");
        callback();
    }, 1000)
}

function tres(callback) {
    setTimeout(function () {
        console.log("Tres");
        callback();
    }, 1000)
}


// Uso de las funciones de devolución de llamada anidadas
uno(function () {
    dos(function () {
        tres(function () {
            console.log("Fin del callback Hell!!");
        })
    })
})