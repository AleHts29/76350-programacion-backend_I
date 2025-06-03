import express from 'express';


const app = express();
const PORT = 8080;

// esto es un MiddleWare a nivel de aplicacion
app.use(express.urlencoded({ extended: true }))


app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})




// ruta 
app.get("/saludo", (req, res) => {
    res.send("Hola desde Express!!!")
})



app.get("/bienvenida", (req, res) => {
    res.send('<p style="color:blue"> Bienvenid@ a Express, estoy usando maquetado HTML</p>')
})



app.get("/usuario", (req, res) => {
    res.send({
        nopmbre: "Guillermo",
        apellido: "Laviero",
        edad: 27,
        correo: "guille@gmail.com"
    })
})



/*=============================================
=         Usando req.params                  =
=============================================*/

// http://localhost:8080/usuario2/juan/garcia
app.get('/usuario2/:name/:last_name', (req, res) => {

    const { name, last_name } = req.params

    console.log(name);
    console.log(last_name);

    res.send(`El user que se esta registrando es: ${name} ${last_name}`);
})


/**
 * Ejemplo en vivo: Usando arreglos y request params
 */
const usuarios = [
    { id: 1, nomnbre: "Juan", apellido: "Torres", edad: "X", genero: "M" },
    { id: 2, nomnbre: "Carlos", apellido: "Garcia", edad: "20", genero: "M" },
    { id: 3, nomnbre: "Maria", apellido: "Torres", edad: "15", genero: "F" },
    { id: 4, nomnbre: "Patricia", apellido: "Ramirez", edad: "30", genero: "H" }
]


app.get('/usuarios', (req, res) => {
    res.send(usuarios)
})



app.get('/usuarios/:userId', (req, res) => {
    console.log(typeof req.params.userId);

    const user = usuarios.find(u => u.id == req.params.userId)
    if (!user) {
        return res.send({ error: "Error", msg: "Usuario no encontrado" })
    }

    res.send({ status: "Success", Payload: user })
})



/*=============================================
=         Usando req.query                 =
=============================================*/


const consultas = []
app.get('/ejemploQueries/query', (req, res) => {
    let datos = req.query
    console.log(datos);

    consultas.push(datos)
    res.send({ status: "Success", Payload: "User creado" })
})

app.get('/ejemploQueries/all', (req, res) => {
    res.send({ status: "Success", Payload: consultas })
})


app.get("/usuarios-genero", (req, res) => {
    let { genero } = req.query;
    if (!genero) {
        return res.send({ status: "Success", Payload: usuarios })
    }


    // si me pasan un genero, entonces filtro y retorno el user
    const user = usuarios.filter(u => u.genero == genero)
    console.log(user);
    if (user.length == 0) {
        return res.send({ status: "error", Payload: `No se encontraron usuarios asociados al genero: ${genero}` })
    }

    res.send({ status: "Success", Payload: user })
})


