import express from 'express';
import usersRouter from './routes/users.routes.js';
import petsRouter from './routes/pets.routes.js';

import __dirname from './utils.js';
// console.log(__dirname);

const app = express();

// prepara la confiuguracion del servidor para trabajar con archivos JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
const PORT = 9090;


// Middleware 
app.use(function (req, res, next) {
    console.log("Mi propio middleware a nivel de Aplicacion");
    console.log(`Time ${Date().toLocaleString()}`);


    // Aqui va el - next
    next() // <-- Esto me permite salir
})




app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)



app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})





/*
let users = [{
    name: "Juan"
    apellido: xxxx
    .
    .
    .
    cart: 12
}]


const carts = [
{1}, 
{2},
.
.
.
{
    id: 12
    prod: [{pId: 2}, {pId:45}, {pId: 34}]
}

]


*/
