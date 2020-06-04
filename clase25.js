class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
    soyAlto(){
         return this.altura > 1.8;
    }
}
class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
    }
}

// var hiram = new Persona('Hiram', 'Montesillo', 1.73);
// var yeri = new Persona('Yeri', 'Sanchez', 1.63);
// var ale = new Persona('Ale', 'Garcia', 1.93);


