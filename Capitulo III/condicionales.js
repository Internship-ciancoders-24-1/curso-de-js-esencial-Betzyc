var betzy={
    nombre:'Betzy',
    apellido:'Castillo',
    edad:25,
    ingeniero: true, 
    cocinero: false,
    cantante: false,
    guitarrista: false,
    dj: false,  
    drone: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero){
        console.log('Ingeniero')
    }
    if(persona.cocinero){
        console.log('Cocinero')
    }
    if(persona.cantante){
        console.log('Cantante')
    }
    if(persona.guitarrista){
        console.log('Guitarrista')
    }
    if(persona.dj){
        console.log('DJ')
    }
    if(persona.drone){
        console.log('Piloto de drone')
    }
}

imprimirProfesiones(betzy)

//Reto de la clase 6

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

//Arrow function
const esMayorDeEdadArrow = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
} 


function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    } else {
        console.log('ACCESO PERMITIDO')
    }
}