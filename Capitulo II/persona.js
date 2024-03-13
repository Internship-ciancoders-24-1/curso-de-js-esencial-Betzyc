var betzy = {
    nombre: 'Betzy',
    apellido: 'García',
    edad: 25
}

var dario = {
    nombre: 'Dario',
    apellido: 'Gomez',
    edad: 27
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    edad: 25
}

function imprimirNombreEnMayusculas(persona){
    // var nombre = persona.nombre
    var {nombre} = persona //Es lo mismo que la línea anterior
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(betzy)
imprimirNombreEnMayusculas(dario)

//Retos de la clase 5

function imprimirNombreYEdad(persona){
    var {nombre} = persona
    var {edad} = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(betzy)


//Parametros como referencia o como valor

function cumpleanos(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}