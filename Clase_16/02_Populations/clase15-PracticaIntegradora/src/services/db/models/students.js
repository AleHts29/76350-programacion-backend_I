import mongoose from 'mongoose';
import { type } from 'os';

const collectionName = 'students';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const stringTypeSchemaNonUniqueRequired = {
    type: String,
    required: true
};


const studentSchema = new mongoose.Schema({
    name: stringTypeSchemaNonUniqueRequired,
    lastName: stringTypeSchemaNonUniqueRequired,
    age: stringTypeSchemaNonUniqueRequired,
    courses: {// Aqui creamos la relacion hacia la coleccion `curses`
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default: []
    }

});

/**
 * Middleware para agregar dentro del método 'find' un llamado a una función, en este 
 * caso llamamos al metodo populate.
 */
studentSchema.pre('find', function () {
    this.populate('courses.course')
})

const studentsModel = mongoose.model(collectionName, studentSchema);
export default studentsModel;