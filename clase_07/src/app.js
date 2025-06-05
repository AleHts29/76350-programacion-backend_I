import express from 'express';


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 9090;


// telemetria
app.get('/ping', (req, res) => {
    res.send("pong")
})



//Data
const userData = []

// User
app.get('/api/users', (req, res) => {
    res.send({ status: "Success", payload: userData })
})


app.post('/api/users', (req, res) => {
    const user = req.body
    console.log(user);


    // asignamos ID
    const numRamdom = Math.floor(Math.random() * 100 + 1)
    user.id = numRamdom + userData.length


    // hacemos validaciones
    if (!user.first_name || !user.last_name || !user.email) {
        return res.status(400).send({ status: 'error', payload: "valores imcompletos, revisar datos de entreda!!..." })
    }

    // damos de alta el user
    userData.push(user)

    res.send({ status: "Success", payload: `Usuario creado con id: ${user.id}` })
})



app.put('/api/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId)
    const userUpdate = req.body


    // hacemos busqueda del user que tengo en mi aray de datos
    const userPosition = userData.findIndex((u => u.id === userId))


    if (userPosition < 0) {
        return res.status(404).send({ status: "info", error: "Usuario no encontrado..." })
    }

    // hacemos validaciones
    if (!userUpdate.first_name || !userUpdate.last_name || !userUpdate.email) {
        return res.status(400).send({ status: 'error', payload: "valores imcompletos, revisar datos de entrada!!..." })
    }


    // actualizamos el user de la lista
    userData[userPosition] = userUpdate


    res.send({ status: "Success", payload: `Usuario actualizado!!..` })
})


app.delete('/api/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId)
    const userSize = userData.length

    // hacemos busqueda del user que tengo en mi aray de datos
    const userPosition = userData.findIndex((u => u.id === userId))

    if (userPosition < 0) {
        return res.status(404).send({ status: "info", error: "Usuario no encontrado..." })
    }

    // eliminamos el user de la lista
    userData.splice(userPosition, 1)

    // validamos si efectivamente se elimino el elemto
    if (userData.length === userSize) {
        return res.status(500).send({ status: "info", error: "Usuario no se pudo borrar" })
    }

    res.send({ status: "Success", payload: `Usuario eliminado!!..` })
})


app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})



//  [ A, B, C, D]
//    0  1  2  3