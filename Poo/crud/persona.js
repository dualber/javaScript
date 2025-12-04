export class Persona{
    constructor(nombre,edad,altura){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }

    set nombre(nombre){
        this.nombre = nombre;
    }
    set edad(edad){
        this.edad = edad;
    }
    set altura(altura){
        this.altura = altura;
    }

    get nombre(){
        return this.nombre;
    }
    get edad(){
        return this.edad;
    }
    get altura(){
        return this.altura;
    }

}