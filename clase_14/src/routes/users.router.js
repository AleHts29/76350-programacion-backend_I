import { Router } from "express";
import { userModel } from '../models/user.model.js'

const router = Router()

// GET
router.get('/', async (req, res) => {
    try {
        // 01_ Consultamos data a la DB mediante un Modelo
        const users = await userModel.find()

        // 02_ Retorno al cliente la data
        res.send({ status: "Success", payload: users })
    } catch (error) {
        console.log(`No se pudo obtener data: error: ${error}`);
    }
})


// POST
router.post('/', async (req, res) => {
    try {
        // Recibo la info de ??
        const { first_name, last_name, email, age } = req.body

        // Agrego la info a la DB mediante el modelo
        const user = await userModel.create({ first_name, last_name, email, age })


        console.log(user);

        // Le respondo al cliente
        res.send({ status: "Success", payload: user._id })

    } catch (error) {
        console.log(`No se pudo crear data: error: ${error}`);
    }
}
)

// PUT
router.put('/:id', async (req, res) => {
    try {
        const updateUser = req.body

        const userResult = await userModel.updateOne({ _id: req.params.id }, updateUser)

        console.log(userResult);

        // Le respondo al cliente
        res.send({ status: "Success", payload: userResult })

    } catch (error) {
        console.log(`No se pudo actualizar data: error: ${error}`);
    }
}
)
// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const userResult = await userModel.deleteOne({ _id: req.params.id })

        // Le respondo al cliente
        res.send({ status: "Success", payload: userResult })
    } catch (error) {
        console.log(`No se pudo eliminar data: error: ${error}`);
    }
}
)

export default router;