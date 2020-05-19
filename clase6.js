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

function imprimirNombreEnMayusculas({ nombre }){
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(hiram);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre: 'Pepito'});
//imprimirNombreEnMayusculas();