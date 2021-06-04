//global varialbe for my movies
let movies = []



//add a couple of movies to the array
movies.push(new Movie("The Lion King", "Animated", 1994))
movies.push(new Movie("Fight Club", "Psycological Drama", 1999))
movies.push(new Movie("Spirited Away", "Fantasy Adventure", 2002))


//get the element that will hold my movies
let mainDiv = document.getElementById("movies")

//for each movie in my array
for (movie of movies){
    //print out the title, genre, and year
    mainDiv.innerHTML += `<div><h2>Movie:${movie.title}</h>
    <h3>Genre:${movie.genre}</h3><h3>Released:${movie.yearReleased}</h3>`
}

//object for movie
function Movie(title, genre, year){
    //properties title, genre, yearReleased
    this.title = title
    this.genre = genre
    this.yearReleased = year

}