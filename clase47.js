var hiram = {
    nombre: 'Hiram',
    apellido: 'Montesillo',
    edad: 28
}
function esMayorDeEdad(persona){
    let mensaje;
    const MAYORIA_DE_EDAD = 18;
    if(persona.edad >= MAYORIA_DE_EDAD){
        mensaje = 'Es mayor de edad';
    }else{
        mensaje = 'Es menor de edad';
    }
    console.log(mensaje);
}

esMayorDeEdad(hiram);