export class animal{
    constructor (nombre,raza,peso){
        this.nombre = nombre;
        this.raza = raza;
        this.peso = peso;
    }

    set Nombre(nombre){
        this.nombre = nombre;
    }

    set Raza(raza){
        this.raza = raza;
    }

    set Peso(peso){ 
        this.peso = peso;
    }

    get Nombre(){
        return this.nombre;
    }

    get Raza(){
        return this.raza;
    }
    
    get Peso(){
        return this.peso;
    }   

}