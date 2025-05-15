// console.log("Hola");
// console.warn("Warn");
// console.error("error: esto es un error");


// console.log(10);
// console.log(true);

let products = "valor"
console.log(products);

products = 12
console.log(products);
// let num = [1, 2, 3, 4, 5]
// console.log(num);

// const obj = { a: 12, b: 13, c: 14 }
// console.log(obj);




// 2da parte
let name = 'Anita';
let number = 12;


console.log(typeof name); // ?
console.log(typeof number); // ?

const obj1 = {
    name: "Anita",
    last_name: "Villalba"
}
console.log(typeof obj1); // ? <- object

const myArray = [2, 3, "Hola", true, { a: 12 }]
console.log(myArray);
console.log(typeof myArray); // ? <- object



// const obj2 = obj1; // <-- Copia por referencia
const obj2 = { ...obj1 } // <-- Copia por Valor
console.log("obj2 - sin modificar: ", obj2); // ?

obj2.name = "Guillermo";
console.log("obj2: ", obj2); // ?


console.log("obj1: ", obj1); // ?


// todo: Como lo resuelvo ??




// const num2 = 12
// num2 = "HOLA"
// console.log(num2);
