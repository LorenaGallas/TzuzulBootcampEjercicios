const personajesDiv = document.getElementById("personajes")
  
fetch("https://rickandmortyapi.com/api/character")
.then(function(resultado){
    return resultado.json() //.json()->Async
 })
.then(function(informacion){
    
    const personajes = informacion.results
    personajes.forEach(personaje => {
        let div = document.createElement("div")
        let nombre = document.createElement("p")
        let imagen = document.createElement("img")

        nombre.innerText = personaje.name
        imagen.src = personaje.image

        div.appendChild(nombre)
        div.appendChild(imagen)
        personajesDiv.appendChild(div)
        // personajesDiv.appendChild(imagen)
    });
})

.catch((error)=>{
     console.log(error)
 })