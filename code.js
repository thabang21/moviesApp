import { movieDetails } from "./movieDetails.js";
import { movies } from "./movies.js";


let moviesData = []



movieDetails.map((movieDetail)=>{
  
    movies.map((movie) =>{
        
        if(movieDetail.title === movie.title) {
            moviesData.push({...movieDetail, ...movie})
        }
    })
})


let search =document.getElementById("search")
search.addEventListener("click",searchMovie)




function searchMovie(e){
    e.preventDefault()

    let searchInput= document.getElementById("movie-search").value.toLowerCase()

    let filteredMovies = moviesData.filter(movie=>{
        if(movie.title.toLowerCase().includes(searchInput)){
            return true
        }else if(movie.cast.join(" ").toLowerCase().includes(searchInput)) {
            return true;
        }
    
    })

    renderMovies(filteredMovies)
    
    document.getElementById("movie-search").value = "";

}


function renderMovies(moviesData){
    document.getElementById("movies_render").innerHTML=""

    moviesData.map(movie=>{
        let {imageUrl, title, cast, year} = movie
        let element= document.createElement("div")
        element.setAttribute("class", "card")


        element.innerHTML=`
            
        <img src= ${imageUrl}>
        <h2>${title}</h2>
        <p>${cast.join(" ")}</p>
        <p>${year}</p>

        `

        let deleteButton =document.createElement("button")
        deleteButton.innerText="DELETE"

        element.append(deleteButton)
        


        let movies_render =document.getElementById("movies_render")
        movies_render.append(element)


    })
    


}

renderMovies(moviesData)