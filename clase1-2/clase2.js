let botonContar = document.getElementById("contar")
let botonAlerta = document.getElementById("alerta")
let botonCambiarColor = document.getElementById("cambiar--color")
let botonMostrarDetalle = document.getElementById("mostrar--detalle")

let numero = document.getElementById("numero")

let contenido = document.getElementById("contenido")

let detalle = document.getElementById("detalles")

//Eventos
let contador = 0
botonContar.onclick = ()=>{
    if(contador<10){
        contador++    
        // numero.innerText = "conteo: " + contador  //el texto que estara en "numero"
        //template string
        numero.innerText = `conteo: ${contador}
                esto es un mensaje 
                con salto de linea`
    }else{
        numero.innerText = "llegaste al tope"
    }

    //agregar contenido de html desde el dom
    contenido.innerHTML = `<p>Agregando html desde JavaScript 
                            con innerHTML</p> 
                            <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            </ul>`
    contenido.classList = ("contenido")
    console.log(contador) //imprime en consola
}

//-----------------------------------------------------------------------------------------

botonAlerta.onclick = ()=>{
    alert("se ha presionado el boton de alerta")
}

//--------------------------------------------------------------------------------------------

let encendido = false
botonCambiarColor.onclick = ()=>{
    encendido=!encendido
    if(encendido){
    contenido.style.backgroundColor = "red"
    }else{
        contenido.style.backgroundColor = "transparent"
    }
}

//otra Forma de hacerlo
// botonCambiarColor.onclick = ()=>{
//     if(encendido){
//         encendido=false
//     contenido.style.backgroundColor = "red"
//     }else{
//         encendido=true
//         contenido.style.backgroundColor = "transparent"
//     }
// }

//con forma de hacerlo con una funcion ternearia
//contenido.style.backgroundColor = encendido?"transparent":"red" 
//encendido=!encendido
//------------------------------------------------------------------------------------------

let ver = true
botonMostrarDetalle.onclick = ()=>{    
    if(ver){
        ver = false
        detalle.hidden = true
    }else{
        ver = true
        detalle.hidden = false
    }   
}

//-----------------------------------------------------------    
