const dividirConPromesa = (dividendo, divisor) => {

    //resolve y reject son funciones callback igualmente.
    return new Promise((resolve, reject) => {
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        if (divisor === 0) {//La promesa no se puede cumplir para este caso...
            reject("No se puede dividir por cero..")
        } else {
            resolve(dividendo / divisor) //OJO le estoy pasando el valor resultado de esta operación, 
            //Tambien podria definir otra funcion y devolver un resultado unico. 
        }
    })
}


// console.log(dividirConPromesa(2, 5))


// implementacion con then y catch
dividirConPromesa(6, 2)
    .then(result => console.log('result:', result))
    .catch(error => console.log("error:", error))