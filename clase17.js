var hiram = {
    nombre: 'Hiram',
    apellido: 'Montesillo',
    altura: 1.74
}
var yeri = {
    nombre: 'Yeri',
    apellido: 'Sanchez',
    altura: 1.60
}
var ricardo = {
    nombre: 'Ricardo',
    apellido: 'Garcia',
    altura: 1.45
}
var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}
var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [hiram, yeri, ricardo, vicky, paula];

for(var i = 0; i < personas.length; i++){
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura}`);
}