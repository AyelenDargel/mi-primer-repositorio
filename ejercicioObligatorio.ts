import * as fs from 'node:fs';
import { parse } from 'node:path';

const precios: number[]= [525, 3500, 400, 1999];
let contenido: string = " ";

for (let i:number = 0; i < precios.length; i++) {
    contenido += `${precios[i]} ` ;
}

let numeroString: string = precios.toString();
console.log(precios);


fs.writeFileSync('./precios.txt', contenido);

const datos: string = fs.readFileSync('./precios.txt', 'utf8');
console.log(datos);

const datos1:string = datos.trim();
const nuevoArray1:string[] = datos1.split(" ");


const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
let contenido2: string = " ";

for (let i:number = 0; i < productos.length; i++) {
    contenido2 += `${productos[i]} ` ;
}

fs.writeFileSync('./productos.txt', contenido2);

const dato: string = fs.readFileSync('./productos.txt', 'utf8');
console.log(dato);

const datos2:string = dato.trim();
const nuevoArray:string[] = datos2.split(" ");

console.log(nuevoArray);
