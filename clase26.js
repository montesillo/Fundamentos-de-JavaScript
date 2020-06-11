class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
        if(fn){
            fn(this.nombre, this.apellido)
        }
    }
    soyAlto(){
         return this.altura > 1.8;
    }
}
class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        var {nombre, apellido} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function resporderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev){
        console.log(`Ah mirá, no sabía que eras desarrollador/a`);
    }
}

var hiram = new Persona('Hiram', 'Montesillo', 1.73);
var yeri = new Persona('Yeri', 'Sanchez', 1.63);
var ale = new Desarrollador('Ale', 'Garcia', 1.93);

hiram.saludar();
yeri.saludar(resporderSaludo);
ale.saludar(resporderSaludo);
