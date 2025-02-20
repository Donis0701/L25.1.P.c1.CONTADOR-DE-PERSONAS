export default class persona{
    constructor({nombre,sexo}){
        this._nombre=nombre;
        this._sexo=sexo;
    }
    set sexo(s){
        this._sexo= s.toUpperCase();
        if(this._sexo != 'M' && this._sexo != 'F'){
            this._sexo = 'M';
        }
    }
    get sexo(){
        return this._sexo;
    }   
}