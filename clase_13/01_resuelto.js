

// Creamos colleccion 'mascotas'
db.createCollection('mascotas')

// insert data
db.mascotas.insertMany([
    { nombre: "Kathy", especie: "gato", edad: "1" },
    { nombre: "Dory", especie: "pez", edad: "1" }
])

db.mascotas.insertMany([
    { nombre: "Tony2", especie: "perro", edad: "4" },
    { nombre: "Salem", especie: "gato", edad: "1" },
    { nombre: "Kitty", especie: "gato", edad: "1" }
])




/* =====================================
=               Estudiantes            =
===================================== */
db.estudiantes.insertMany([
    { nombre: "Pedro", apellido: "Lopez", curso: "backend", correo: "micorreo@fgmail.com", edad: 25, sexo: "M" },
    { nombre: "Laura", apellido: "Suarez", curso: "marketing", correo: "micorreo@fgmail.com", edad: 27, sexo: "F" },
    { nombre: "German", apellido: "Caicedo", curso: "backend", correo: "micorreo@fgmail.com", edad: 22, sexo: "M" },
    { nombre: "Pedro", apellido: "David", curso: "backend", correo: "micorreo@fgmail.com", edad: 25, sexo: "M" },
    { nombre: "Marta", apellido: "Spaghetti", curso: "react", correo: "marta@fgmail.com", edad: 32, sexo: "F" }
])



db.estudiantes.insertMany([
    { nombre: "Carla", apellido: "Dutra", curso: "backend", correo: "micorreo@fgmail.com", edad: 25 },
    { nombre: "Elias", apellido: "Cafiero", curso: "react", correo: "micorreo@fgmail.com", edad: 37 }
])



// FILTROS
miPrimerBase > db.estudiantes.find({ sexo: { $exists: false } })
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
    },
    {
        _id: ObjectId('68630fe646252343b86eca36'),
        nombre: 'Carla',
        apellido: 'Dutra',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25
    },
    {
        _id: ObjectId('68630fe646252343b86eca37'),
        nombre: 'Elias',
        apellido: 'Cafiero',
        curso: 'react',
        correo: 'micorreo@fgmail.com',
        edad: 37
    }
]




miPrimerBase > db.estudiantes.find({ nombre: 'Pedro', sexo: { $exists: true } })
[
    {
        _id: ObjectId('68630fc746252343b86eca31'),
        nombre: 'Pedro',
        apellido: 'Lopez',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25,
        sexo: 'M'
    },
    {
        _id: ObjectId('68630fc746252343b86eca34'),
        nombre: 'Pedro',
        apellido: 'David',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25,
        sexo: 'M'
    }
]
miPrimerBase > db.estudiantes.find({ nombre: 'Pedro', sexo: { $exists: false } })
[
    {
        _id: ObjectId('685c89f16c3dcbc5d31f8597'),
        nombre: 'Pedro',
        apellido: 'Sánchez',
        curso: 'Ciencias',
        correo: 'pedro.sanchez@example.com'
    }
]



miPrimerBase > db.estudiantes.distinct('curso')
[
    'Arte',
    'Ciencias',
    'Historia',
    'Inglés',
    'Matemáticas',
    'backend',
    'marketing',
    'react'
]




miPrimerBase > db.estudiantes.find({ edad: { $lte: 25 } })
[
    {
        _id: ObjectId('68630fc746252343b86eca31'),
        nombre: 'Pedro',
        apellido: 'Lopez',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25,
        sexo: 'M'
    },
    {
        _id: ObjectId('68630fc746252343b86eca33'),
        nombre: 'German',
        apellido: 'Caicedo',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 22,
        sexo: 'M'
    },
    {
        _id: ObjectId('68630fc746252343b86eca34'),
        nombre: 'Pedro',
        apellido: 'David',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25,
        sexo: 'M'
    },
    {
        _id: ObjectId('68630fe646252343b86eca36'),
        nombre: 'Carla',
        apellido: 'Dutra',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25
    }
]


miPrimerBase > db.estudiantes.find({ $or: [{ curso: 'backend' }, { curso: 'marketing' }] })
[
    {
        _id: ObjectId('68630fc746252343b86eca31'),
        nombre: 'Pedro',
        apellido: 'Lopez',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25,
        sexo: 'M'
    },
    {
        _id: ObjectId('68630fc746252343b86eca32'),
        nombre: 'Laura',
        apellido: 'Suarez',
        curso: 'marketing',
        correo: 'micorreo@fgmail.com',
        edad: 27,
        sexo: 'F'
    },
    {
        _id: ObjectId('68630fc746252343b86eca33'),
        nombre: 'German',
        apellido: 'Caicedo',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 22,
        sexo: 'M'
    },
    {
        _id: ObjectId('68630fc746252343b86eca34'),
        nombre: 'Pedro',
        apellido: 'David',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25,
        sexo: 'M'
    },
    {
        _id: ObjectId('68630fe646252343b86eca36'),
        nombre: 'Carla',
        apellido: 'Dutra',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25
    }
]



// Proyecciones
miPrimerBase > db.estudiantes.find({}, { curso: 1, correo: 1, _id: 0 })
[
    { curso: 'Matemáticas', correo: 'juan.perez@example.com' },
    { curso: 'Historia', correo: 'maria.gonzalez@example.com' },
    { curso: 'Ciencias', correo: 'pedro.sanchez@example.com' },
    { curso: 'Inglés', correo: 'laura.martinez@example.com' },
    { curso: 'Arte', correo: 'ana.lopez@example.com' },
    { curso: 'backend', correo: 'micorreo@fgmail.com' },
    { curso: 'marketing', correo: 'micorreo@fgmail.com' },
    { curso: 'backend', correo: 'micorreo@fgmail.com' },
    { curso: 'backend', correo: 'micorreo@fgmail.com' },
    { curso: 'react', correo: 'marta@fgmail.com' },
    { curso: 'backend', correo: 'micorreo@fgmail.com' },
    { curso: 'react', correo: 'micorreo@fgmail.com' }
]



// Ordenamiento
miPrimerBase > db.estudiantes.find().sort({ edad: -1 })
[
    {
        _id: ObjectId('68630fe646252343b86eca37'),
        nombre: 'Elias',
        apellido: 'Cafiero',
        curso: 'react',
        correo: 'micorreo@fgmail.com',
        edad: 37
    },
    {
        _id: ObjectId('68630fc746252343b86eca35'),
        nombre: 'Marta',
        apellido: 'Spaghetti',
        curso: 'react',
        correo: 'marta@fgmail.com',
        edad: 32,
        sexo: 'F'
    },
    {
        _id: ObjectId('68630fc746252343b86eca32'),
        nombre: 'Laura',
        apellido: 'Suarez',
        curso: 'marketing',
        correo: 'micorreo@fgmail.com',
        edad: 27,
        sexo: 'F'
    },
    {
        _id: ObjectId('68630fc746252343b86eca31'),
        nombre: 'Pedro',
        apellido: 'Lopez',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25,
        sexo: 'M'
    },
    {
        _id: ObjectId('68630fc746252343b86eca34'),
        nombre: 'Pedro',
        apellido: 'David',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25,
        sexo: 'M'
    }
]



// Ordenamiento con proyecciones
miPrimerBase > db.estudiantes.find({}, { nombre: 1, apellido: 1, curso: 1, edad: 1, _id: 0 }).sort({ edad: -1 })
[
    { nombre: 'Elias', apellido: 'Cafiero', curso: 'react', edad: 37 },
    { nombre: 'Marta', apellido: 'Spaghetti', curso: 'react', edad: 32 },
    { nombre: 'Laura', apellido: 'Suarez', curso: 'marketing', edad: 27 },
    { nombre: 'Pedro', apellido: 'Lopez', curso: 'backend', edad: 25 },
    { nombre: 'Pedro', apellido: 'David', curso: 'backend', edad: 25 },
    { nombre: 'Carla', apellido: 'Dutra', curso: 'backend', edad: 25 },
    { nombre: 'German', apellido: 'Caicedo', curso: 'backend', edad: 22 },
    { nombre: 'Juan', apellido: 'Perez', curso: 'Matemáticas' },
    { nombre: 'María', apellido: 'González', curso: 'Historia' },
    { nombre: 'Pedro', apellido: 'Sánchez', curso: 'Ciencias' },
    { nombre: 'Laura', apellido: 'Martínez', curso: 'Inglés' },
    { nombre: 'Ana', apellido: 'López', curso: 'Arte' }
]




// SKip

/*
:::: Offset

...
6
5
4
3 
2
1
0 
-1
-2
-3 <--- offset = -3
-4
-5
-6
.
.
.

*/

db.estudiantes.find().skip()
miPrimerBase > db.estudiantes.find().skip(3)
[
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
    },
    {
        _id: ObjectId('68630fc746252343b86eca31'),
        nombre: 'Pedro',
        apellido: 'Lopez',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25,
        sexo: 'M'
    },
    {
        _id: ObjectId('68630fc746252343b86eca32'),
        nombre: 'Laura',
        apellido: 'Suarez',
        curso: 'marketing',
        correo: 'micorreo@fgmail.com',
        edad: 27,
        sexo: 'F'
    },
    {
        _id: ObjectId('68630fc746252343b86eca33'),
        nombre: 'German',
        apellido: 'Caicedo',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 22,
        sexo: 'M'
    },
    {
        _id: ObjectId('68630fc746252343b86eca34'),
        nombre: 'Pedro',
        apellido: 'David',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25,
        sexo: 'M'
    },
    {
        _id: ObjectId('68630fc746252343b86eca35'),
        nombre: 'Marta',
        apellido: 'Spaghetti',
        curso: 'react',
        correo: 'marta@fgmail.com',
        edad: 32,
        sexo: 'F'
    },
    {
        _id: ObjectId('68630fe646252343b86eca36'),
        nombre: 'Carla',
        apellido: 'Dutra',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25
    },
    {
        _id: ObjectId('68630fe646252343b86eca37'),
        nombre: 'Elias',
        apellido: 'Cafiero',
        curso: 'react',
        correo: 'micorreo@fgmail.com',
        edad: 37
    }
]



// Ordenamiento, Offset y limit
miPrimerBase > db.estudiantes.find().sort({ edad: 1 }).skip(5).limit(3)
[
    {
        _id: ObjectId('68630fc746252343b86eca33'),
        nombre: 'German',
        apellido: 'Caicedo',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 22,
        sexo: 'M'
    },
    {
        _id: ObjectId('68630fc746252343b86eca34'),
        nombre: 'Pedro',
        apellido: 'David',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25,
        sexo: 'M'
    },
    {
        _id: ObjectId('68630fc746252343b86eca31'),
        nombre: 'Pedro',
        apellido: 'Lopez',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25,
        sexo: 'M'
    }
]


// UPDATE
// miPrimerBase> db.estudiantes.updateOne(filtro, actualizacion, opt)


miPrimerBase > db.estudiantes.updateOne({ _id: ObjectId('685c89f16c3dcbc5d31f8599') }, { $set: { sexo: 'F' } })
// {
//     acknowledged: true,
//         insertedId: null,
//             matchedCount: 1,
//                 modifiedCount: 1,
//                     upsertedCount: 0
// }


miPrimerBase > db.estudiantes.find({ _id: ObjectId('685c89f16c3dcbc5d31f8599') })
[
    {
        _id: ObjectId('685c89f16c3dcbc5d31f8599'),
        nombre: 'Ana',
        apellido: 'López',
        curso: 'Arte',
        correo: 'ana.lopez@example.com',
        edad: 35,
        sexo: 'F'
    }
]


miPrimerBase > db.estudiantes.deleteOne({ _id: ObjectId('685c89f16c3dcbc5d31f8596') })
// { acknowledged: true, deletedCount: 1 }