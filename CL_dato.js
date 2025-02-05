export default class dato {
    constructor(){
        this.cnth=0;
        this.cntm=0;
        this.cntp=0;
    }
    procesarPersona(persona){
        this.cntp++;
        if(persona.sexo == 'M')
            this.cnth++;
        else
            this.cntm++;
        }
    }
