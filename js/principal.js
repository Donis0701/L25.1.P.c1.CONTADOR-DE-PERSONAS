/*sea el nombre y el sexo de varias personas(F.M). Se necesita un programa
que lea estos datos y reporte al final la cantidad de hombres y la cantidad
de mujeres procesados.*/
import cl_vDato from "./cl_vDato.js";
import cl_mDato from "./cl_mDato.js";
import cl_controlador from "./cl_controlador.js";

export default class cl_principal {
    constructor(){
        let vista = new cl_vDato();
        let modelo = new cl_mDato();
        let controlador = new cl_controlador(modelo,vista);
        vista.controlador = controlador;
    }
}