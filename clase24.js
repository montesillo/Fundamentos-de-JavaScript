function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8;
}

function Desarrollador(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
}


// var hiram = new Persona('Hiram', 'Montesillo', 1.73);
// var yeri = new Persona('Yeri', 'Sanchez', 1.63);
// var ale = new Persona('Ale', 'Garcia', 1.93);


