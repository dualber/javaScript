export class planta{
    constructor (nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    set Nombre(nombre){
        this.nombre = nombre;
    }
    set Tipo(tipo){
        this.tipo = tipo;
    }
    get Nombre(){
        return this.nombre;
    }
    get Tipo(){
        return this.tipo;
    }  
}