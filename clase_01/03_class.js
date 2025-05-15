class Auto {
    // Constructor
    constructor(color, marca) {
        this.color = color;
        this.marca = marca;
    }


    // Metodos
    frenar() {
        return `Se frena el auto ${this.marca}`
    }

    acelerar() {
        return `Se acelera el auto de color: ${this.color}`
    }
}

const auto1 = new Auto("Negro", "Peugeot")
const auto2 = new Auto("Azul", "Ford")


console.log(auto1);
console.log(auto2);


console.log(auto1.frenar());
console.log(auto1.acelerar());