import { Router } from 'express';
import { uploader } from '../utils.js'


const router = Router();


let pets = [];


// GET
router.get('/', (req, res) => {
    res.send({ status: "Success", payload: pets })
})


// POST
router.post('/', (req, res) => {
    // _01 - Obtengo la info del req.body
    let pet = req.body;
    pet.id = Math.floor(Math.random() * 100 + 1);

    // _01.1 - Validaciones
    if (!pet.nombre || !pet.especie) {
        return res.status(400).send({ status: "Error", message: "Verifique los datos de entrada - formato invalido" })
    }

    // _02 - Guardo data en el array --> con un .push
    pets.push(pet)

    // _03 - notificar al cliente
    res.send({ status: "Success", payload: ` mascotaID: ${pet.id} -  creada con exito!!..` })
})


/*=============================================
=                   Section_02                =
=============================================*/
let Mid
// middleware a nivel de router

router.use(function (req, res, next) {
    console.log("Mi propio middleware a nivel de Router");
    console.log(`Time ${Date().toLocaleString()}`);
    next() // <-- Esto me permite salir
})


router.get('/test', (req, res) => {
    Mid = true

    res.send({ status: "Success" })
})


function miMiddleware(req, res, next) {
    console.log("Middleware a nivel de EndPoint");

    if (Mid) {
        next()
    } else {
        console.log("Estoy atrapado dentro de miMiddleware");
    }
}

router.get('/test_02', miMiddleware, (req, res) => {
    console.log("Estoy dentro del Enpoint - /api/pets/test_02");

    res.send("ok")
})



/*=============================================
=                   Section_03                =
=============================================*/


router.post('/profile', uploader.single("file"), (req, res) => {

    if (!req.file) {
        return res.status(400).send({ status: "error", mensaje: "No se adjunto archivo." });
    }
    console.log(req.file);

    // _01 - Obtengo la info del req.body
    let pet = req.body;
    pet.id = Math.floor(Math.random() * 100 + 1);

    // le agregamos la imagen al objPet
    pet.image = req.file.path


    // _01.1 - Validaciones
    if (!pet.nombre || !pet.especie) {
        return res.status(400).send({ status: "Error", message: "Verifique los datos de entrada - formato invalido" })
    }

    // _02 - Guardo data en el array --> con un .push
    pets.push(pet)

    // _03 - notificar al cliente
    res.send({ status: "Success", payload: ` mascotaID: ${pet.id} -  creada con exito!!..` })
})



export default router;