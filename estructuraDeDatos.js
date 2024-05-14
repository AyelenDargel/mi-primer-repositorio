//algoritmo encontrar el numero mas grande
//4,7,9,3,1,45,67,23,29,78,11,16
var num = new Array();
var indice = 0;
num[0] = 4;
num[1] = 7;
num[2] = 9;
num[3] = 3;
num[4] = 1;
num[5] = 45;
num[6] = 67;
num[7] = 23;
num[8] = 29,
    num[9] = 78;
num[10] = 11;
num[11] = 16;
var maximo = num[0];
for (var i = 1; i < maximo; i++) {
    if (num[i] > maximo) {
        maximo = num[i];
    }
}
console.log("el elemento mas grande del arreglo es:  " + maximo);
function parOImpar(numero) {
    if (numero === 0) {
        console.log("El número ingresado es cero");
    }
    else if (numero % 2 === 0) {
        console.log("El número ingresado es par");
    }
    else {
        console.log("El número ingresado es impar");
    }
}
parOImpar(maximo);
