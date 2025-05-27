// Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. Indicar por consola la finalización de esta operación con un mensaje.
// Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número.Representar por consola los resultados.

//  Rango de numero de: 1 a 20
// 10000 iteraciones

/*

1 <-- 300
2 <-- 250
3
4 <-- 560
5
6
...
20


--
Resultado final
const ObjNum = {
1: 300,
2: 250
....


}

*/


const generarNumerosRandom = () => {
    return new Promise((resolve, reject) => {
        try {
            const numeros = []
            for (let i = 0; i < 10000; i++) {
                const numero = Math.floor(Math.random() * 20) + 1
                numeros.push(numero)
            }
            resolve(numeros)
        } catch (error) {
            reject(error)
        }
    })
}


const contarFrecuencias = (numeros) => {
    return new Promise((resolve, reject) => {
        try {
            const frecuencias = {}

            numeros.forEach(num => {

                if (!frecuencias[num]) {
                    frecuencias[num] = 1
                } else {
                    frecuencias[num]++
                }
            });
            resolve(frecuencias)
        } catch (error) {
            reject(error)
        }
    })
}





const main = async () => {
    // 01_ generar numeros random
    const numeros = await generarNumerosRandom();

    // 02_ Contar frecuencias
    const frecuencias = await contarFrecuencias(numeros); // retorna un array de numeros

    // 03_ Mostrar resultados
    console.log("Frecuencias de los numeros: ", frecuencias);

}

main();





// for (let i = 0; i < 100; i++) {
//     console.log(Math.floor(Math.random() * 20) + 1);
// }
// Math.floor(Math.random() * 20) + 1


// const persona = {
//     nombre: 'Juan',
//     edad: 23
// }

// persona[nombre]