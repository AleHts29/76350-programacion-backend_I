/**** Actividad en Clase ***************/
/**
 * Dados los objetos indicados:
 * Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), 
 * consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
 * Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)
 */

const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]


//!! Ejemplo a lo que quiero llegar
const products = ['manzanas', 'peras', 'carne', 'jugos', 'dulces', 'sandias', 'huevos', 'panes']
const totalProducts = [3, 2, 1, 5, 2, 1, 1, 6, 1, 4] // se le aplica un .reduce



let newArray = []
let totalCantProductos = 0
objetos.forEach(obj => {
    const keys = Object.keys(obj)

    keys.forEach(key => {
        if (!newArray.includes(key)) newArray.push(key)
    })

    // obtengo los valores para la sumatoriaTotal
    const soloValores = Object.values(obj)

    // calculo total
    let totalProductos = soloValores.reduce((Acc, Ini) => {
        return Acc + Ini;
    })

    totalCantProductos += totalProductos;
})

console.log(newArray);
console.log(totalCantProductos);

