var hiram = {
    nombre: 'Hiram',
    apellid: 'Montesillo',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${hiram.nombre} pesa ${hiram.peso}kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANIO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = hiram.peso - 3;
var dias = 0;

while(hiram.peso > META){
    if(comeMucho()){
        aumentarDePeso(hiram)
    }
    if(realizaDeporte()){
        adelgazar(hiram)
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${hiram.nombre} adelgazo`);