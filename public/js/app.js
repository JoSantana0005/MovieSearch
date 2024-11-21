let pagina = 1
const right_arrow = document.getElementById("Right--Arrow");
const left_arrow = document.getElementById("Left--Arrow");
const Ventana = document.getElementById("Ventana--info");
right_arrow.addEventListener("click",()=>{
    try{
        pagina++
        obtener_peliculas();
    }catch(error){
        console.log(error)
    }
})
left_arrow.addEventListener("click",()=>{
    try{
        if(pagina > 1){
            pagina--
            obtener_peliculas();
        }
    }catch(error){
        console.log(error)
    }
})


const obtener_peliculas = async() =>{
    try{
        const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a123512ad7d1eb8f1ff144501c87ec1a&language=es-ES&page=&page="+pagina)
        console.log(respuesta)
        let peliculas = ''
        if (respuesta.status == 200){
            const datos = await respuesta.json()
            console.log(datos)
            console.log(datos.title)
            datos.results.forEach(pelicula => {
                peliculas += `<div class="Movie">
                <img src="https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}" alt="Pelicula" id="Imagen--pelicula">
                <h3 id="Title--pelicula">${pelicula.title}</h3>
            </div>`
            });
            document.getElementById("Movie--Container").innerHTML = peliculas
            const Movie = document.querySelectorAll(".Movie")
            Movie.forEach((element,index) =>{
                element.addEventListener("click",()=>{
                    console.log(datos.results[index]);
                    Ventana.showModal();
                })
            })

        }else if(respuesta.status == 404){
            console.log("No se encontraron resultados")
        }
    }catch(error){
        console.log(error)
    }
}
obtener_peliculas();