import mongoose from "mongoose";

// nombre de coleccion
const userCollection = 'users'

// definimos Schema
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        require: [true, 'Correo es requerido para el alta']
    },
    age: Number
},
    {
        versionKey: false // Deshabilitar el parámetro "__v"
    }
)


// Creacion del Model de Users
export const userModel = mongoose.model(userCollection, userSchema)
