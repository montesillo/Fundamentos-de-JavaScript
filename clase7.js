var hiram = {
    nombre: 'Hiram',
    apellido: 'Montesillo',
    edad: 28
};

var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
};

function imprimirNombreEnMayusculas(persona){
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(hiram);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre: 'Pepito'});
//imprimirNombreEnMayusculas();

function imprimirNombreYEdad(persona){
    var {nombre} = persona;
    var {edad} = persona;
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(hiram);