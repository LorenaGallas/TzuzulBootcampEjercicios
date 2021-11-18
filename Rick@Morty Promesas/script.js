const personajesDiv = document.getElementById("personajes")
  
fetch("https://rickandmortyapi.com/api/character")
.then(function(resultado){
    return resultado.json() //.json()->Async
 })
.then(function(informacion){
    
    const personajes = informacion.results
    const filterPersonajes = personajes.filter((item, index) => index<18)
  
    filterPersonajes.forEach(personaje => {
        let divPersonaje = document.createElement("div")
        divPersonaje.classList.add("contenedor")
        let nombre = document.createElement("p")
        let imagen = document.createElement("img")
        imagen.classList.add("personaje")

        nombre.innerText = personaje.name
        imagen.src = personaje.image

        // contenedor.appendChild(nombre)
        // contenedor.appendChild(imagen)
        divPersonaje.appendChild(nombre)
        divPersonaje.appendChild(imagen)
        personajesDiv.appendChild(divPersonaje)
        // personajesDiv.appendChild(imagen)
    });
})

.catch((error)=>{
     console.log(error)
 })