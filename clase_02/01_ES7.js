let myArray = [1, 2, 3, 4, 5]

const numeros = myArray.map(num => num * 2)
console.log(numeros); // ?? [ 2, 4, 6, 8, 10 ]

console.log(myArray); // ?? [ 1, 2, 3, 4, 5 ]

// Exp
const numeros2 = myArray.map(num => Math.pow(num, 2))
console.log(numeros2);

// Exp Nueva release
const numeros3 = myArray.map(num => num ** 2)
console.log(numeros3);



// .include -- retorna un bool
let numFind = 10
if (myArray.includes(numFind)) {
    console.log(`el ${numFind} si existe dentro del array`);
} else {
    console.log(`el ${numFind} No existe dentro del array`);
}


const nameList = ['Juan', 'Camilo', 'Maria', 'AnalyserNode', 'Javier']
const nameFind = 'CAmilo'
if (nameList.includes(nameFind)) {
    console.log(`el ${nameFind} si existe dentro del array`);
} else {
    console.log(`el ${nameFind} No existe dentro del array`);
}