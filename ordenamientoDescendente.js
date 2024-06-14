function Azar(numAzar) {
    var numRamdon = Math.random() * numAzar;
    console.log(numRamdon);
    console.log(Math.floor(numRamdon));
    return Math.floor(Math.random() * numAzar);
}
Azar(90);
function Azar1(numAzar) {
    return Math.floor(Math.random() * numAzar);
}
function cargar(arreglo, cantidad, numAzar) {
    for (var i = 0; i < cantidad; i++) {
        arreglo[i] = Azar(numAzar);
    }
}
function escribirEnUnaLinea(arreglo, cantidad) {
    var vector = "";
    for (var i = 0; i < cantidad; i++) {
        vector += "".concat(arreglo[i], " ");
    }
    console.log(vector);
}
function intercambiar(arreglo, i, j) {
    var aux;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}
function comparar(arreglo, i, j) {
    var comparacion;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    }
    else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    }
    else {
        (arreglo[i] < arreglo[j]);
        comparacion = 1;
    }
    return comparacion;
}
function burbuja(arreglo, cantidad) {
    var i, j;
    for (i = 0; i < cantidad; i++) {
        for (j = 0; j < cantidad - 1 - i; j++) {
            if (comparar(arreglo, j, j + 1) == -1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
}
var limite = 10;
var array = new Array(limite);
cargar(array, limite, 100);
escribirEnUnaLinea(array, limite);
burbuja(array, limite);
escribirEnUnaLinea(array, limite);
