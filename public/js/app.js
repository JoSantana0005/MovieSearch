
const obtener_peliculas = async() =>{
    try{
        const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a123512ad7d1eb8f1ff144501c87ec1a")
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
        }else if(respuesta.status == 404){
            console.log("No se encontraron resultados")
        }
    }catch(error){
        console.log(error)
    }
}
obtener_peliculas();