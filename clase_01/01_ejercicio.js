


const testScope = function () {
    var num = 3
    let nombre = "Juan"

    if (true) {
        const variable = 12
        console.log(nombre); // ?? Juan
        console.log(variable); // ?? 12

    }
    // console.log(variable); // ?? ReferenceError: variable is not defined

    console.log("dentro de testScope:", num); // ??

    return num
}
// const num = testScope()
console.log(testScope());



/* =====================================
=               Const                  =
===================================== */

const obj1 = {
    name: "Juan",
    edad: 25
}
console.log(obj1);

const obj2 = { ...obj1 }

obj2.name = "Marcelo"

console.log(obj2);

// obj2 = 12
// console.log(obj2);

// const nombre = "juan"
// nombre = 12



/* =====================================
=               Funciones              =
===================================== */

const fullName = (nombre, apellido) => {
    const fullname = `Hola, ${nombre} - ${apellido}, como estas?`
    return fullname
}

console.log(fullName("Juan", "Karin"));
console.log(fullName("Marcelo", "Karin"));

const resta = (a, b) => {
    let result;
    result = a - b;
    return result
}
console.log(resta(5, 3)); // 2

// Refactor
const resta_02 = (a, b) => a - b
console.log(resta_02(6, 2));

