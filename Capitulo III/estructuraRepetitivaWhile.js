var betzy={
    nombre:'Betzy',
    apellido:'Castillo',
    edad:25,
    peso: 50
}

console.log(`Al inicio del año ${betzy.nombre} pesa ${betzy.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const META = betzy.peso - 3
var dias

while(betzy.peso > META){
    if(comeMucho){
        aumentarDePeso(betzy)
    } else if(realizaDeporte){
        adelgazar(betzy)
    }
    dias++
 
}

console.log(`Pasaron ${dias} días hasta que ${betzy.nombre} adelgazó 3kg`)