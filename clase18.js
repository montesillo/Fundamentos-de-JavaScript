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

const esAlta = ({ altura }) => altura > 1.7;

var personas = [hiram, yeri, ricardo, vicky, paula];

var personasAltas = personas.filter(esAlta);

// var personasAltas = personas.filter(function (personas){
//     return personas.altura > 1.7;
// });

console.log(personasAltas);