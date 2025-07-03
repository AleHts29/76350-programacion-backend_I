import express from 'express'
import mongoose from 'mongoose'
import usersRouter from './routes/users.router.js'

const app = express()
const PORT = 9090

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Declaracion de Ruta
app.use('/api/users', usersRouter)



app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})


//Conxion a la DB
const PathDB = 'mongodb+srv://admin:admin@cluster0.jprvunz.mongodb.net/clase14_test?retryWrites=true&w=majority&appName=Cluster0'
const connectMongoDB = async () => {
    try {
        await mongoose.connect(PathDB)
        console.log("conectado con exito a la Base de Datos!!...");
    } catch (error) {
        console.log('No se pudo conectar a la base de datos de Mongo');
        process.exit();
    }
}
connectMongoDB()