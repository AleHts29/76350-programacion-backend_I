// Crear uns DB 
test > use nombreDeLaDB


// Muestra las colleciones
miPrimerBase > show collections
estudiantes
usuarios

// para insertar un solo documento:
miPrimerBase > db.usuarios.insertOne({ name: "Juan", apellido: "Cafiero", edad: 25, email: "juan12@gmail.com" })


// para insert de mas registros
miPrimerBase > db.estudiantes.insertMany([
    {
        nombre: "Juan",
        apellido: "Perez",
        curso: "Matemáticas",
        correo: "juan.perez@example.com"
    },
    {
        nombre: "María",
        apellido: "González",
        curso: "Historia",
        correo: "maria.gonzalez@example.com"
    },
    {
        nombre: "Pedro",
        apellido: "Sánchez",
        curso: "Ciencias",
        correo: "pedro.sanchez@example.com"
    },
    {
        nombre: "Laura",
        apellido: "Martínez",
        curso: "Inglés",
        correo: "laura.martinez@example.com"
    },
    {
        nombre: "Ana",
        apellido: "López",
        curso: "Arte",
        correo: "ana.lopez@example.com"
    }
])



// Para listar la info
miPrimerBase > db.estudiantes.find()
[
    {
        _id: ObjectId('685c89f16c3dcbc5d31f8595'),
        nombre: 'Juan',
        apellido: 'Perez',
        curso: 'Matemáticas',
        correo: 'juan.perez@example.com'
    },
    {
        _id: ObjectId('685c89f16c3dcbc5d31f8596'),
        nombre: 'María',
        apellido: 'González',
        curso: 'Historia',
        correo: 'maria.gonzalez@example.com'
    },
    {
        _id: ObjectId('685c89f16c3dcbc5d31f8597'),
        nombre: 'Pedro',
        apellido: 'Sánchez',
        curso: 'Ciencias',
        correo: 'pedro.sanchez@example.com'
    },
    {
        _id: ObjectId('685c89f16c3dcbc5d31f8598'),
        nombre: 'Laura',
        apellido: 'Martínez',
        curso: 'Inglés',
        correo: 'laura.martinez@example.com'
    },
    {
        _id: ObjectId('685c89f16c3dcbc5d31f8599'),
        nombre: 'Ana',
        apellido: 'López',
        curso: 'Arte',
        correo: 'ana.lopez@example.com'
    }
]