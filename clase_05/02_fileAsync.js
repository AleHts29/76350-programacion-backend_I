/**
 * Fs Asincrono:
 * 
- writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
- readFile = Para obtener el contenido de un archivo. Como pide información, su callback es de la forma: (error, resultado)=>
- appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
- unlink = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
*/


const fs = require('fs'); // Importacion de la lib

const dirNameAsync = './files2'
const fileNameAsync = dirNameAsync + '/ejemploCallback.txt'


let data = "Hola Coders, estoy en un archivo! - utilizando callbacks"


fs.mkdir(dirNameAsync, { recursive: true }, (error) => {
    if (error) throw Error('No se pudo crear el directorio')


    // Escritura
    fs.writeFile(fileNameAsync, data, (error) => {
        if (error) throw Error('No se pudo escribir el archivo!!')

        console.log("Archivo creado y con informacion");
    })



    /* =====================================
    =               Anidaciones            =
    ===================================== */
    // lectura del archivo
    fs.readFile(fileNameAsync, 'utf-8', (error, contenido) => {
        if (error) throw Error('No se pudo leer el archivo!!')
        console.log("contenido_01: ", contenido);

        // Agregamos mas contenido
        fs.appendFile(fileNameAsync, " - otro contenido..", (error) => {
            if (error) throw Error('No se pudo actualizar el archivo!!')

            // lectura del archivo
            fs.readFile(fileNameAsync, 'utf-8', (error, contenido) => {
                if (error) throw Error('No se pudo leer el archivo!!')
                console.log("contenido_02: ", contenido);


                // Eliminacion del archivo
                fs.unlink(fileNameAsync, (error) => {
                    if (error) throw Error('No se pudo eliminar el archivo!!')
                    console.log("Archivo borrado!..");
                })
            })
        })
    })
})
