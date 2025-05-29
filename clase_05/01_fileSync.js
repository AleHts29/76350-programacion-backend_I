/**
 * Manejo de archivos usando NodeJs
 * Implementación usando nodejs:fs
 */

/**
 * Fs Sincrono:
 * 
    - writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
    - readFileSync = Para obtener el contenido de un archivo.
    - appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
    - unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
    - existsSync = Corrobora que un archivo exista!
*/


const fs = require('fs'); // Importacion de la lib

const dirName = './files'
const fileName = dirName + '/ejemplo.txt'


console.log('Generando archivo de forma Sync con `fs` en el path: ' + fileName);
if (!fs.existsSync(dirName)) fs.mkdirSync(dirName)
fs.writeFileSync(fileName, "Hola Coders!!")


if (fs.existsSync(fileName)) {
    console.log(`Archivo creado con exito en la ruta: ${fs.realpathSync(fileName)}`);

    // 01_ Lectura de data del archivo
    let contenido = fs.readFileSync(fileName, 'utf-8')
    console.log("contenido_01: ", contenido);


    // 02_ agregar contenido si eliminar lo que ya esta
    fs.appendFileSync(fileName, " - Mas contenido...")


    // 03_ volvemos a leer
    let contenido2 = fs.readFileSync(fileName, 'utf-8')
    console.log("contenido_02: ", contenido2);
} else {
    console.error("Error creando el archivo.");
}