let movies = []



movies.push(new Movie("The Lion King", "Animated", 1994))
movies.push(new Movie("Fight Club", "Psycological Drama", 1999))
movies.push(new Movie("Spirited Away", "Fantasy Adventure", 2002))


let mainDiv = document.getElementById("movies")

for (movie of movies){
    mainDiv.innerHTML += `<div><h2>Movie:${movie.title}</h>
    <h3>Genre:${movie.genre}</h3><h3>Released:${movie.yearReleased}</h3>`
}

function Movie(title, genre, year){
    this.title = title
    this.genre = genre
    this.yearReleased = year

}