const formulario = document.getElementById("formulario")

const texto = document.getElementById("texto")
const email = document.getElementById("email")
const edad = document.getElementById("edad")
const color = document.getElementById("color")

const errores = document.getElementById("errores")

formulario.onsubmit = (evento)=>{
    evento.preventDefault() //Evita que el contenido sea enviado 
                            //para q lo podamos interceptar y hacer algo con
    console.log(evento)
    
    //pido los datos usando el name que puse en html
    const info = evento.target

    // imprimo en consola la informacion que necesito
    // console.log("colore: " + info.color.value)
    // console.log("edad: "+ info.edad.value)
    // console.log("nombre: " + info.texto.value)

    //guardo en una variable poder trabajar con la infor pedida
    let color = info.color.value
    let edad = info.edad.value
    let nombre = info.texto.value

    if(nombre===""){
        // creo un elemento de html donde mostrare un mensaje
        let mensaje = document.createElement("p")
        mensaje.innerText = "Nombre requerido"
        //agrega un elemento hijo a la etiqueta en la que estamos
        errores.appendChild(mensaje)
    }
    if(nombre) {
        let mensaje = document.createElement("p")
        mensaje.innerText = "tu nombre es "+ nombre
        errores.appendChild(mensaje)
    }  
    if(edad<"18"){
        let mensaje = document.createElement("p")
        mensaje.innerText = "eres menor de edad"
        errores.appendChild(mensaje)
    } 
    if(color===""){
        let mensaje = document.createElement("p")
        mensaje.innerText = "Elije un color"
        errores.appendChild(mensaje)
    } else{
        // si esta todo bien envio el form
        evento.target.submit() 
    }
}