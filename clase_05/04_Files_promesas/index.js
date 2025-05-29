const fs = require('fs').promises // 👈 lib Nativa de NODEJS
const moment = require('moment') // 👈 lib No es Nativa de NODEJS


// Data
const data = {
    nombre: "Juan Perez",
    edad: 30,
    ciudad: "Madrid",
    fecha: moment().format('YYYY-MM-DD HH:mm:ss')
}

const nameFile = "datos.json"


// escritura
const escribirArchivoJSON = async (fileName, data) => {
    try {
        // convierto a texto plano
        const jsonData = JSON.stringify(data, null, 2) // null, 2 ===> para darle formato

        // guardar en el archivo datos.json
        fs.writeFile(fileName, jsonData)

        console.log('Archivo creado y contenido agregado..');
    } catch (error) {
        console.error(`Error al escribir el archivo: ${error}`);
    }
}


// Lectura
const leerArchivoJSON = async (fileName) => {
    try {
        const data = await fs.readFile(fileName);
        const objData = JSON.parse(data)

        console.log("datos: ", objData.nombre, objData.edad);
        console.log("objData: ", objData);
    } catch (error) {
        console.error(`Error al leer el archivo: ${error}`);
    }
}


// Metodo Core
const main = async (nameFile, data) => {
    await escribirArchivoJSON(nameFile, data)

    await leerArchivoJSON(nameFile)
}

main(nameFile, data);