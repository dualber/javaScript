export class bacteria{
    constructor (nombre,forma,patogenicidad){
        this.nombre = nombre;
        this.forma = forma;
        this.patogenicidad = patogenicidad;
    }
    set Nombre(nombre){
        this.nombre = nombre;
    }
    set Forma(forma){
        this.forma = forma;
    }
    set Patogenicidad(patogenicidad){
        this.patogenicidad = patogenicidad;
    }
    get Nombre(){
        return this.nombre;
    }
    get Forma(){
        return this.forma;
    }
    get Patogenicidad(){
        return this.patogenicidad;
    }
}