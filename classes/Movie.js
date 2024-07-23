// import the Media class:
const Media = require("./Media");

// create your Movie class:
class Movie extends Media {
  static longestMovie(arr) {
    let maxDuration = 0;
    let longestMovieObject;

    for (let i = 0; i < arr.length; i++) {
      if (maxDuration < arr[i].duration) {
        maxDuration = arr[i].duration;
      }
      if (Object.values(arr[i]).includes(maxDuration)) {
        longestMovieObject = arr[i];
      }
    }

    return longestMovieObject;
  }

  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${this.rating}`;
  }
}

const movie1 = new Movie(
  "Inception",
  2010,
  "Sci-Fi",
  "Christopher Nolan",
  148,
  4.5
);
const movie2 = new Movie(
  "The Godfather",
  1972,
  "Crime",
  "Francis Ford Coppola",
  175,
  4.7
);
Media.totalMediaCount; // 2
movie1.summary(); // "Title: Inception, Director: Christopher Nolan, Year: 2010, Genre: Sci-Fi, Rating: 4.5"
console.log(Movie.longestMovie([movie1, movie2])); // Returns movie2

// don't change below
module.exports = Movie;
