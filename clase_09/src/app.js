import express from 'express';
import usersRouter from './routes/users.routes.js';
import petsRouter from './routes/pets.routes.js';
import handlebars from 'express-handlebars';
import viewRouter from './routes/views.router.js'

import __dirname from './utils.js';


const app = express();

// prepara la confiuguracion del servidor para trabajar con archivos JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
const PORT = 9090;

// configuracion de HBS
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + "/views/");
app.set('view engine', 'handlebars');



app.get('/hello', (req, res) => {
    const testUser = {
        name: "Santiago",
        last_name: "Kosacoff",
        age: 26
    }

    res.render('hello', testUser)
})

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)

// usando router y hbs
app.use('/food', viewRouter)

// EJERCICO

const users = [
    {
        name: "Mauricio",
        last_name: "Espinosa",
        age: 26,
        phone: "5541231355",
        email: "correomau@correo.com"
    },
    {
        name: "Marisol",
        last_name: "Cadena",
        age: 23,
        phone: "15431231355",
        email: "correomary@correo.com"
    },
    {
        name: "Jorge",
        last_name: "Velez",
        age: 28,
        phone: "4331234155",
        email: "correojorge@correo.com"
    },
    {
        name: "Uriel",
        last_name: "Dueñas",
        age: 18,
        phone: "1233315451",
        email: "correouriel@correo.com"
    },
    {
        name: "Verónica",
        last_name: "Duarte",
        age: 45,
        phone: "66521233",
        email: "correoVero@correo.com"
    }
];

app.get('/users', (req, res) => {
    const random = Math.floor(Math.random() * users.length);
    res.render('users', { user: users[random] })
})

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})

