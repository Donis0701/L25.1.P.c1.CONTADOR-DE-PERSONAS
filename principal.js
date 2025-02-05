/*sea el nombre y el sexo de varias personas(F.M). Se necesita un programa
que lea estos datos y reporte al final la cantidad de hombres y la cantidad
de mujeres procesados.*/
import persona from "./cl_persona.js";
import dato from "./CL_dato.js";

let persona1 = new persona("luisa","F");
let persona2 = new persona("Ana","F");
let persona3 = new persona("Jose","M");
let persona4 = new persona("Carmen","F");
let persona5 = new persona("Rosa","F");
let persona6 = new persona("Jose","M");
let persona7 = new persona("Maria","F");
let persona8 = new persona("Luz","F");
let persona9 = new persona("Rafael","M");
let persona10 = new persona("Liz","F");
let persona11 = new persona("Marcos","M");
let persona12 = new persona("Leo","M");

let datos = new dato();
datos.procesarPersona(persona1);
datos.procesarPersona(persona2);
datos.procesarPersona(persona3);
datos.procesarPersona(persona4);
datos.procesarPersona(persona5);
datos.procesarPersona(persona6);
datos.procesarPersona(persona7);
datos.procesarPersona(persona8);
datos.procesarPersona(persona9);
datos.procesarPersona(persona10);
datos.procesarPersona(persona11);
datos.procesarPersona(persona12);

let salida = document.getElementById("salida");
salida.innerHTML = `Cantidad de personas: ${datos.cntp}
<br> cantidad de mujeres: ${datos.cntm}
<br> cantidad de hombres: ${datos.cnth}`