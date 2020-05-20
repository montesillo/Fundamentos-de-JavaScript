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

function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad > 17){
        console.log('Es mayor de edad');
    }else{
        console.log('No es mayor de edad');
    }
}

imprimirSiEsMayorDeEdad(hiram);