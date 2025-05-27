const crypto = require('crypto')


class UserManager {
    static usuarios = []


    // Método para hashear la contraseña
    static hashPassword(password) {
        return crypto.createHash('sha256').update(password).digest('hex');
    }


    // Método para crear un nuevo usuario
    static crearUsuario({ nombre, apellido, nombreUsuario, password }) {
        const nuevoUsuario = {
            nombre,
            apellido,
            nombreUsuario,
            password: this.hashPassword(password)
        }

        this.usuarios.push(nuevoUsuario)
        console.log(`Usuario ${nombreUsuario} creado de forma exitosa!!`);
    }

    static mostrarUsuarios() {
        console.log(`Lista de usuarios:`, this.usuarios);
    }


    static validarUsuario(nombreUsuario, password) {
        const userFind = this.usuarios.find(u => u.nombreUsuario === nombreUsuario)

        if (!userFind) {
            console.log(`Error: Usuario no encontrado!`);
            return;
        }

        // Validar hash
        const hashedPassword = this.hashPassword(password)
        console.log("NewHash", hashedPassword);


        // Comparo los Hash
        if (userFind.password === hashedPassword) {
            console.log(`Loggin Success!`);
        } else {
            console.log("Error: credenciales invalidas.");
        }
    }
}


// Crear usuarios
UserManager.crearUsuario({
    nombre: "Luis",
    apellido: "Munar",
    nombreUsuario: "lmunar",
    password: "password123"
})

UserManager.crearUsuario({
    nombre: "Ana",
    apellido: "Perez",
    nombreUsuario: "aperez",
    password: "mySecretPassword"
});

UserManager.mostrarUsuarios()


UserManager.validarUsuario('lmunar', 'password123')
UserManager.validarUsuario('lmunar', 'password456')


console.log("Probando --watch");




//?? Buscando en memoria/DB al usuario (si existe el user - ya tiene un pass con Hash_01)

//?? El nuevo pass voy a crear un Hash_02

//?? Comparo Has_01 == Hash_02