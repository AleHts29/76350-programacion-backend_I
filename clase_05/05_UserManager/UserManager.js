const path = require('path')
const fs = require('fs').promises;

class UserManager {

    constructor() {
        this.filePath = path.join(__dirname, "Usuarios.json")
    }



    // crearUsuario
    async crearUsuario(data) {
        try {
            // Leer el archivo si existe, de lo contrario inicializar un arreglo vacío
            let usuarios = []
            try {
                const result = await fs.readFile(this.filePath)
                if (result != "") {
                    usuarios = JSON.parse(result)
                }
            } catch (error) {
                console.log(" Couldn't read");
            }

            // generar un ID al nuevo user
            const id = usuarios.length + 1


            // añadimos el id al nuevo user
            data.id = id

            // Añadir el nuevo usuario al array
            usuarios.push(data)


            // Añadir el data del array al archivo
            await fs.writeFile(this.filePath, JSON.stringify(usuarios, null, 2), 'utf-8')


            console.log("Usuario dado de alta!!..");
        } catch (error) {
            console.log("error al crar usuario", error);
        }
    }



    // consultarUsuarios
    async consultarUsuarios() {
        try {
            const result = await fs.readFile(this.filePath, 'utf-8')
            const usuarios = JSON.parse(result)
            return usuarios;
        } catch (error) {
            console.error(`Error al consultar usuarios: ${error}`);
        }
    }
}


module.exports = UserManager // 👈 no olvidar