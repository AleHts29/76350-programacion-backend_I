const dividirConPromesa = (dividendo, divisor) => {

    //resolve y reject son funciones callback igualmente.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);
            if (divisor === 0) {//La promesa no se puede cumplir para este caso...
                reject("No se puede dividir por cero..")
            } else {
                resolve(dividendo / divisor) //OJO le estoy pasando el valor resultado de esta operación, 
                //Tambien podria definir otra funcion y devolver un resultado unico. 
            }
        }, 2000)
    })
}


const dividirConPromesa_02 = (dividendo, divisor) => {

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



const funcionAsincronica = async (a, b) => {
    console.log('Ejecutando div por func_01 Async()')
    try {
        // uso await para esperar el resultado de las promesas
        let result = await dividirConPromesa(a, b) // cuanto tiempo tarda T: 2s

        let result2 = await dividirConPromesa_02(a, result)

        console.log("Result: ", result2);

    } catch (error) {
        console.log('Error: ', error);
    }
}

const funcionAsincronica2 = async (a, b) => {
    console.log('Ejecutando div por func_02 Async()')
    try {
        // uso await para esperar el resultado de las promesas
        let result = await dividirConPromesa(a, b) // cuanto tiempo tarda T: 2s

        let result2 = await dividirConPromesa_02(a, result)

        console.log("Result: ", result2);

    } catch (error) {
        console.log('Error: ', error);
    }
}


funcionAsincronica(9, 2)
funcionAsincronica2(15, 0)
console.log("<---- En donde aparezco en la consola???");
