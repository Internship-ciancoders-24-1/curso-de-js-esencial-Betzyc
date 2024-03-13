//Funciones ----------------------------------------------------------------------------------------------

var nombre = 'Betzy', edad = 25

function imprimirEdad(n, e){
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad('Vicky', 28)
imprimirEdad('Erick', 24)
imprimirEdad('Dario', 27)

//En este caso, la función imprimirEdad recibe dos parámetros, n y e, que son los que se le pasan al llamar la función.

//Alcance de las funciones-----------------------------------------------------------------------------------

nombre = 'Betzy' //Variable global

function imprimirNombreEnMayusculas(nombre){ //n es un parámetro de la función es variable local
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)

