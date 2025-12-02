export class Persona{
    constructor(nombre,edad,altura){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }
    setEdad(edad){
        this.edad = edad;
    }
    setAltura(altura){
        this.altura = altura;
    }

    getNombre(){
        return this.nombre;
    }
    getEdad(){
        return this.edad;
    }
    getAltura(){
        return this.altura;
    }

}