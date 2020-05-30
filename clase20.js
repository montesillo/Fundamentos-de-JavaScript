var hiram = {
    nombre: 'Hiram',
    apellido: 'Montesillo',
    altura: 1.74,
    cantidadDeLibros: 91
}
var yeri = {
    nombre: 'Yeri',
    apellido: 'Sanchez',
    altura: 1.60,
    cantidadDeLibros: 90
}
var ricardo = {
    nombre: 'Ricardo',
    apellido: 'Garcia',
    altura: 1.45,
    cantidadDeLibros: 85
}
var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 20
}
var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 100
}

const esAlta = ({ altura }) => altura > 1.7;

var personas = [hiram, yeri, ricardo, vicky, paula];

var personasAltas = personas.filter(esAlta);

// var personasAltas = personas.filter(function (personas){
//     return personas.altura > 1.7;
// });

const pasarAlturaACms = persona => ({
        ...persona,
        altura: persona.altura * 100
    
})

// var personasCms = personas.map(pasarAlturaACms);

// var acum = 0;

// for (var i = 0; i < personas.length; i++){
//     acum = acum + personas[i].cantidadDeLibros;
// }

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} libros`);