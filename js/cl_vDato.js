import cl_vPersona from "./cl_vPersona.js";
import cl_mPersona from "./cl_mPersona.js";
export default class cl_vDato {
    constructor(){
        this.controlador = null;
        this.salida = document.getElementById("mainForm_salida");
        this.vPersona = new cl_vPersona();
        this.vPersona.btProcesar.onclick = () => this.controlador.procesarPersona();
    }
    procesarPersona(){
        this.mPersona = new cl_mPersona({
            nombre: this.vPersona.nombre,
            sexo: this.vPersona.sexo,
        });
        return this.mPersona;
    }
    reportarPersona(cntp,cnth,cntm){
        this.salida.innerHTML = `
        Cantidad de personas procesadas: ${cntp}<br>
        Cantidad de hombres procesados: ${cnth}<br>
        Cantidad de mujeres procesadas: ${cntm}<br>`;
    }
}