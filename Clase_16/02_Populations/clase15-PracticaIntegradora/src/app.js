import express from 'express';
import __dirname from './util.js';
import handlebars from 'express-handlebars';

import mongoose from 'mongoose';
import studentRouter from './routes/students.router.js'
import coursesRouter from './routes/courses.router.js'
import viewsRouter from "./routes/views.router.js";

import studentsModel from './services/db/models/students.js';
import { coursesModel } from './services/db/models/courses.js';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Template engine
 */
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'))

//Declaración de Routers:
app.use('/', viewsRouter);
app.use("/api/students", studentRouter);
app.use("/api/courses", coursesRouter);

const SERVER_PORT = 9091;
app.listen(9091, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {
    try {

        /*=============================================
        =                   Population                =
        =============================================*/

        await mongoose.connect('mongodb://localhost:27017/colegio_C16?retryWrites=true&w=majority');
        console.log("Conectado con exito a MongoDB usando Moongose.");




        // 1ro creamos al estudiante
        // const newStudent = await studentsModel.create({
        //     name: "Guillermo",
        //     lastName: "Laviero",
        //     age: 27
        // })

        // Buscamos el user en la db
        // const student = await studentsModel.find({ _id: newStudent._id })
        // console.log(student);


        // 2do creamos un nuevo curso
        // const newCourse = await coursesModel.create({
        //     title: "Curso Python",
        //     description: "curso avanzado de python",
        //     teacherName: "Carlos"
        // })
        // // Buscamos el Course en la db
        // const course = await coursesModel.find({ _id: newCourse._id })
        // console.log(course);


        // 3ro creamos la relacion
        // let student = await studentsModel.findOne({ _id: "68758bd7547b63fef6e53666" })
        // console.log(student);
        // // console.log(JSON.stringify(student, null, '\t'));

        // // al estudiante le agregamos el ID del curso
        // student.courses.push({ course: "68758d06a26d3c5ca97ca217" })
        // console.log(student);

        // // guardar al estudiante en la DB --> otra forma de guardar student.save()
        // const result = await studentsModel.updateOne({ _id: "68758bd7547b63fef6e53666" }, student)
        // console.log(result);


        // 4to añadimos el populate
        // let student = await studentsModel.findOne({ _id: "67b3e19a619885be27dc8895" }).populate('courses.course')
        // console.log(JSON.stringify(student, null, 2));


        // usando Middleware
        let student = await studentsModel.find({ _id: "67b3e19a619885be27dc8895" })
        console.log(JSON.stringify(student, null, 2));

    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();