import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io'



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



// para renderizar vistas
app.use('/views', viewRouter)


const httpServer = app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})


// Instanciamos Socket
const socketServer = new Server(httpServer)



const dataLogMessage = []
socketServer.on('connection', socket => {

    console.log("Nuevo cliente conectado!!...");




    // escuchando al cliente
    socket.on('message2', data => {
        console.log("Data: ", data);
        dataLogMessage.push({ id: socket.id, message: data })

        socketServer.emit("log", { dataLogMessage })
    })









})