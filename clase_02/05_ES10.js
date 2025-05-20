// Strim.trim()
let cadena = '     Hola      '
let newCadena = cadena.trim()
console.log(cadena);
console.log(newCadena);



// Array.flat()
let arreglo = [1, 2, 3, 4, [5, 6], [7, 8]]
let newArreglo = arreglo.flat(2)
console.log(arreglo)
console.log(newArreglo);



// Función asíncrona que utiliza dynamic import
// async function cargarModulo() {
//     const { default: moduleName } = await import('./miModulo.js');
//     moduleName.hacerAlgo()
// }
// Solo se carga el módulo cuando se llama la función
// cargarModulo();


// Operador Nullish
let persona = {
    last_name: "Perez",
    name: 'Guille'
}

// persona?.name

// let test = undefined
let nullish = persona.name ?? "Sin valor"
console.log(nullish);
