function Azar(numAzar: number):number{
    let numRamdon:number = Math.random() * numAzar;
    console.log(numRamdon)
    console.log(Math.floor(numRamdon))
    return Math.floor (Math.random() * numAzar)
}

Azar(90);

function Azar1(numAzar: number):number{
    return Math.floor (Math.random() * numAzar)
}


function cargar(arreglo: number [], cantidad: number, numAzar: number){
    for(let i :number=0;i< cantidad;i++){
        arreglo[i]=Azar(numAzar);
    }
}


function escribirEnUnaLinea(arreglo: number[], cantidad: number) {
    let vector: string = "";
    for (let i: number = 0; i < cantidad; i++) {
      
      vector += `${arreglo[i]} `; 
    }
    console.log(vector);
  }

function intercambiar(arreglo:number[], i:number, j:number){
    let aux:number;
    aux=arreglo[i];
    arreglo[i]= arreglo[j];
    arreglo[j]=aux;
}

function comparar (arreglo:number[], i :number, j:number): number{
    let comparacion:number;
    if(arreglo[i] === arreglo[j]){
        comparacion= 0;
    } else if (arreglo[i]< arreglo [j]){
        comparacion=-1;
    } else{
        (arreglo[i]< arreglo[j])
        comparacion=1;
    }
    return comparacion;
}



function burbuja(arreglo: number[], cantidad:number){
let i: number, j: number;
    for(i=0; i< cantidad;i++) {
        for(j=0; j< cantidad -1 -i;j++) {
            if (comparar (arreglo,j,j+1)==-1){
                intercambiar(arreglo,j,j+1);
            }
        }

    }
}

let limite :number=10;
let array: number[]=new Array(limite); 
cargar(array, limite, 100);
escribirEnUnaLinea(array, limite);
burbuja(array,limite);
escribirEnUnaLinea(array, limite);