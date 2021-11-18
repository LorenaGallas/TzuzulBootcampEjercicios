// APIS:
// Dom -> Manipular el dom
// Canvas-> Realizar graficos
// Audio y video-> resproducior audio y video
// Notificaciones
// Storage-> Informacion 
// XHR->XHLHTTPREQUEST->fetch
// Microfono y camara

//buscar un elemento por id
document.getElementById("prueba")
//buscar elemento por la clase
document.getElementsByClassName("grid")
//buscar elemento por etiqueta
document.getElementsByTagName("button")
//buscar elemento por sintaxis de css
document.querySelector("#contar") //retorna un elemento
document.querySelectorAll(".grid") //retorna un array de elementos

//--------------------------------------------------------------------
//para poder usar los datos que traemos,
//declaramos variables
let prueba = document.getElementById("prueba")
let grid = document.getElementsByClassName("grid")
let tagname = document.getElementsByTagName("button")

//declaramos constantes
const contar = document.querySelector("#contar")
const parrafos = document.querySelectorAll(".grid") 
//---------------------------------------------------------------

//acciones a realizar con los elementos obtenidos
prueba.className = "fondo--morado" //le cambia la clase alelemento

prueba.classList.add("fondo--morado") //no sustituye sino que agrega una clase

prueba.style.fontSize ="50px" //agrega estilo directamente desde el dom
                                    