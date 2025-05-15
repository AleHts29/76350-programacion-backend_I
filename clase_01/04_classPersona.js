class Persona {
    // Variable estática accesible por todas las instancias
    static contadorPersonas = 0;

    // Constructor para inicializar la instancia con un nombre
    constructor(nombre) {
        this.nombre = nombre;
        Persona.contadorPersonas++;
    }

    // Método para mostrar el nombre de la persona
    mostrarNombre() {
        return `nombre de la persona: ${this.nombre}`
    }

    // Método estático para acceder al contador de personas
    static mostrarContador() {
        console.log(`Se han creado ${Persona.contadorPersonas}`);
    }

}

const persona_01 = new Persona("Juan");
const persona_02 = new Persona("Anabel");

console.log(persona_01.mostrarNombre());

// Persona.mostrarContador()

console.log(Persona.contadorPersonas);

