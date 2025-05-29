
// _01 - setTimeout
const temporizador = (callback) => {
    setTimeout(() => {
        callback(); //* <-- Ejecuta funcion solo una vez despues del intervalo de tiempo
    }, 5000)
}

const soyOtraFuncion = () => console.log('Realizando Op con setTimeout');
temporizador(soyOtraFuncion);



// _02 - setInterval
const contador = () => {
    let constador = 1
    console.log('Realizando Op de setInterval!!');
    let timer = setInterval(() => {
        console.log(constador++); //* <-- Incrementa el contador cada vez que pase el intervalo de tiempo
        if (constador > 5) {
            console.log('Conteo terminado');
            clearInterval(timer)
        }
    }, 2000)
}
contador();