// importar UserManager
const UserManager = require('./UserManager.js')

// instaciar UserManager
const manager = new UserManager();


// Crear un nuevo usuario
const nuevoUsuario = {
    nombre: "test",
    apellido: "test",
    edad: 33,
    curso: "Node.js"
};


async function main(data) {
    // Ejecuto el metodo de la clase para crear un usuario
    await manager.crearUsuario(data)

    // Consulto los usuario creados mediante la clase UserManager
    const result = await manager.consultarUsuarios()
    console.log("result: ", result);

}

main(nuevoUsuario);