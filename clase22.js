function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura
}

Persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = () => this.altura > 1.8;


var hiram = new Persona('Hiram', 'Montesillo', 1.73);
var yeri = new Persona('Yeri', 'Sanchez', 1.63);
var ale = new Persona('Ale', 'Garcia', 1.93);


