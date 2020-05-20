var hiram = {
    nombre: 'Hiram',
    apellido: 'Montesillo',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}
var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}
function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `);
    if(persona.ingeniero){
        console.log(`Ingeniero`);
    }else{
        console.log('No es ingeniero');
    }
    if(persona.cocinero){
        console.log('Cocinero');
    }
    if(persona.cantante){
        console.log('Cantante');
    }
    if(persona.dj){
        console.log('dj');
    }
    if(persona.guitarrista){
        console.log('guitarrista');
    }
    if(persona.drone){
        console.log('drone');
    }
}

imprimirProfesiones(hiram);

const MAYORIA_DE_EDAD = 18;

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;


function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    }else{
        console.log(`${persona.nombre} No es mayor de edad`);
    }
}

// function permitirAcceso(persona){
//     if(!esMayorDeEdad(persona)){
//         console.log('Acceso denegado');
//     }
// }

const permitirAcceso = persona => {
    if(!esMayorDeEdad(persona)) {
        console.log('Acceso denegado')
    }
}

imprimirSiEsMayorDeEdad(hiram);