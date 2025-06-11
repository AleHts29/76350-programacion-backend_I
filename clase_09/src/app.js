import express from 'express';
import usersRouter from './routes/users.routes.js';
import petsRouter from './routes/pets.routes.js';
import handlebars from 'express-handlebars';

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



app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})

