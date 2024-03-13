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

for(var i=1; i<=DIAS_DEL_ANO; i++){
    var random = Math.random()
    if(random < 0.25){
        aumentarDePeso(betzy)
    } else if(random < 0.5){
        adelgazar(betzy)
    }
}

console.log(`Al final del año ${betzy.nombre} pesa ${betzy.peso.toFixed(1)}kg`) //toFixed es un método que redondea el número a la cantidad de decimales que se le pase como parámetro