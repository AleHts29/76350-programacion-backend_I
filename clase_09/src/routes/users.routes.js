import { Router } from 'express';



const router = Router();


router.get('/ping', (req, res) => {
    res.send("pong")
})

let users = [];


// GET
router.get('/', (req, res) => {
    res.send({ status: "Success", payload: users })
})


// POST
router.post('/', (req, res) => {
    // _01 - Obtengo la info del req.body
    let user = req.body;
    user.id = Math.floor(Math.random() * 100 + 1);

    // _01.1 - Validaciones
    if (!user.first_name || !user.last_name) {
        return res.status(400).send({ status: "Error", message: "Verifique los datos de entrada - formato invalido" })
    }

    // _02 - Guardo data en el array --> con un .push
    users.push(user)

    // _03 - notificar al cliente
    res.send({ status: "Success", payload: ` usaurio: ${user.id} -  creado con exito!!..` })
})


// PUT
router.put('/:userId', (req, res) => {
    let { userId } = req.params
    // Obtengo la info del req.body

    // esto es lo que viene en el req.body
    // {
    //     "first_name": "Maria",
    //      "last_name": "Dutra",
    //      "password": "123qwe",
    //      "email": "juan_d_12@gmail.com"
    // }
    let userUpdate = req.body;




    // Buscamos el user en el array
    const userPosition = users.findIndex((u => u.id === parseInt(userId)))

    if (userPosition < 0) {
        return res.send({ status: "Error", error: "Usuario no encontrado!!!" })
    }


    // Actualizamos el user con la nueva info y conservando el id original
    userUpdate.id = users[userPosition].id;
    users[userPosition] = userUpdate;



    // notificar al cliente
    res.send({ status: "Success", payload: ` usaurio: ${userUpdate.id} -  Actualizado con exito!!..` })
})


// DELETE
router.delete('/:userId', (req, res) => {
    let { userId } = req.params

    // tomamos el tamanio del array antes de elimiar el dato
    let sizeUsers = users.length

    // Buscamos el user en el array
    const userPosition = users.findIndex((u => u.id === parseInt(userId)))

    if (userPosition < 0) {
        return res.send({ status: "Error", error: "Usuario no encontrado!!!" })
    }


    // eliminamos al suer del array
    users.splice(userPosition, 1);

    // validamos si el array tienen un tamanio menor al original
    if (users.length === sizeUsers) {
        return response.status(500).send({ status: "error", error: "Usuario no se pudo borrar." });
    }

    // notificar al cliente
    res.send({ status: "Success", payload: ` usaurio: ${userId} -  Eliminado con exito!!..` })
})




export default router;