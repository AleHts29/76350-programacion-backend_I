class TicketManager {
    // Variable privada
    #precioBaseDeGanancia = 0.15

    constructor() {
        this.eventos = [];
        this.idCounter = 0; // Para manejar el id autoincrementable
    }


    // Método para obtener los eventos guardados
    getEvents() {
        return this.eventos;
    }


    // Método para agregar un evento
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        const nuevoEvento = {
            id: this.idCounter++, // simulo un ID autoincremental
            nombre,
            lugar,
            precio: precio + (precio * this.#precioBaseDeGanancia),
            capacidad,
            fecha,
            participantes: []  // Inicia con un arreglo vacío de participantes
        }

        this.eventos.push(nuevoEvento)
        return nuevoEvento;
    }

    // Método para agregar un usuario a un evento
    agregarUsuario(idEvento, idUsuario) {
        const evento = this.eventos.find(e => e.id === idEvento);

        if (!evento) {
            return `Error: El evento con id ${idEvento} no existe.`;
        }

        if (evento.participantes.includes(idUsuario)) {
            return `Error: El usuario con id ${idUsuario} ya está registrado en este evento.`;
        }

        evento.participantes.push(idUsuario)

        return `Usuario con id ${idUsuario} añadido al evento con id ${idEvento}.`;
    }


    // Método para poner un evento en gira
    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        const eventoExistente = this.eventos.find(e => e.id === idEvento);

        if (!eventoExistente) {
            return `Error: El evento con id ${idEvento} no existe.`;
        }

        const nuevoEvento = {
            ...eventoExistente,
            id: this.idCounter++,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            participantes: []
        }

        this.eventos.push(nuevoEvento)

        return nuevoEvento;
    }


}


const manager = new TicketManager();

manager.agregarEvento('Concierto de rock', 'Buenos Aires', 90, 1000);
manager.agregarEvento('Conferencia Tech', 'Barcelona', 50);


// ver eventos
console.log(manager.getEvents());


// Agregar un usuario a un evento
console.log(manager.agregarUsuario(1, 101));
console.log(manager.agregarUsuario(1, 102));


// ver eventos
console.log(manager.getEvents());



// Poner evento en gira
console.log(manager.ponerEventoEnGira(1, 'Valencia', new Date('2025-12-01')));

// Ver eventos después de la gira
console.log(manager.getEvents());