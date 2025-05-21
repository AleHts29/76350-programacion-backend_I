function funA() {
    console.log(1);
    funB()
    console.log(2);
}


function funB() {
    console.log(3);
    funC()
    console.log(4);
}


function funC() {
    console.log(5);
}


funA() //? 1, 3, 5, 4, 2


// opc_A --> 1 3 5 4 2
// opc_B --> 1, 3, 4, 2, 5
// opc_C --> 12345