const { error } = require('console');
const fs = require('fs');
const moment = require('moment');


const fyh = moment().format('YYYY-MM-DD HH:mm:ss')
const contenido = `Fecha y hora actual: ${fyh}`
console.log(contenido);


const nameFile = 'fecha_hora.txt'


fs.writeFile(nameFile, contenido, (error) => {
    if (error) throw Error('Error al escribir en el archivo!!');

    console.log('Archivo creado y contenido agregado');



    fs.readFile(nameFile, 'utf-8', (error, data) => {
        if (error) throw Error('Error al leer el archivo!!');
        console.log('Contenido: ', data);
    })
})