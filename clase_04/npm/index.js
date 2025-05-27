const moment = require('moment') // <- iomportacionde la Lib externa: Moment


const fechaActual = moment();


// Almacenar la fecha de nacimiento (ejemplo: 15 de marzo de 1990)
const fechaNacimiento = moment('1990-03-15', 'YYYY-MM-DD')

// Validar si la fecha de nacimiento es válida
if (fechaNacimiento.isValid()) {
    console.log(`Fecha de nacimiento -> Valida`);


    // Calcular la diferencia en días entre la fecha de nacimiento y la fecha actual
    const diasTranscurridos = fechaActual.diff(fechaNacimiento, "days");
    console.log(`Han pasado ${diasTranscurridos} dias desde tu nacimiento!!`);
} else {
    console.log(`error: La fecha no es valida...`);
}