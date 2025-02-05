export default class persona{
    constructor(n,s){
        this._nombre=n;
        this._sexo=s;
    }
    set nombre(n){
        this._nombre=n;
    }
    set sexo(s){
        this._sexo=s;
    }
    get nombre(){
        return this._nombre;
    }
    get sexo(){
        return this._sexo;
    }   
}