//CAPITULO II: Variables-----------------------------------------------------------------------------------
//Clase 2 Strings------------------------------------------------------------------------------------------

var nombre = 'Betzy', apellido ='Castillo'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length   //length es una propiedad

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` //Interpolación de texto

var str = nombre.substr(1, 2) //substr es un método y se le pasa dos parámetros, el primero es la posición inicial y el segundo es la cantidad de letras que se quiere extraer

var ultimaLetraDelNombre = nombre.charAt(nombre.length - 1) //Se le resta 1 porque el índice de un string empieza en 0



//Clase 3 Números------------------------------------------------------------------------------------------

var edad = 25

edad += 1 //edad = edad + 1

var peso = 75

peso -= 2 //peso = peso - 2

var sandwich = 1

peso = peso + sandwich
peso += sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

var total = precioDeVino * 3 //600.9000000000001
total = precioDeVino * 100 * 3 / 100 //600.9

var total = Math.round(precioDeVino * 100 * 3) / 100 //600.9

var totalStr = total.toFixed(2) //600.90 //toFixed es un método que redondea el número a la cantidad de decimales que se le pase como parámetro

var total2 = parseFloat(totalStr) //600.9 //parseFloat es un método que convierte un string a un número decimal

var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas
