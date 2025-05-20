//ES8
//Uso de Object.entries, Object.values, Object.keys 
//para un mejor control interno sobre las propiedades de un objeto.

const impuesto = {
    impuesto_01: 2341,
    impuesto_02: 341,
    impuesto_03: 4611,
    impuesto_04: 111,
}

let parLLaveValor = Object.entries(impuesto)
console.log("entries", parLLaveValor);

let soloKeys = Object.keys(impuesto)
console.log("keys", soloKeys);

let soloValues = Object.values(impuesto)
console.log("values", soloValues);


// Calcular el total de impuestos en valores
let impuestoTotal = soloValues.reduce((valAcumulado, valActual) => {
    console.log(`ValorAcumulado: ${valAcumulado} + ValorInicial: ${valActual} `);

    return valAcumulado + valActual
})
console.log("Total", impuestoTotal);
