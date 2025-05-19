//ES9
//Spread and Rest Operator 
//Tomemos un objeto de ejemplo:

const persona = {
    nombre: 'Max',
    edad: 29,
    ciudad: 'BA',
    email: 'max@gmail.com',
    tel: '123123123',
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}


const nombres = ['Juan', 'Camilo', 'Maria', 'AnalyserNode', 'Javier']


// Copiando Array: esto es una copia por referencia OJO!!
const copiaArray = nombres
console.log(copiaArray);


//Usando operador Spread: esto es una copia por valor
const copiaArray2 = [...nombres]
console.log(copiaArray2);



// _02
// Objects Destructuring 
// Usando el objeto persona como ejemplo:
// const nombre = persona.nombre
// const email = persona.email

const { nombre, email } = persona
console.log(nombre);
console.log(email);

//* Ejemplo practico - caso de req.body (lo vemos en servidores)
// const { nombre, email, lastName } = req.body




// con funciones 
const printNameStandard = (per) => {
    console.log("printNameStandard: ", per.nombre);

}
printNameStandard(persona)


const printNameStandard2 = ({ nombre, edad }) => {
    console.log("printNameStandard_02: ", nombre, edad);

}
printNameStandard2(persona)