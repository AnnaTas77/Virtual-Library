// import the Media class:
const Media = require ("./Media");

// create your Book class:
class Book extends Media {
    static highestRating (arr){
        let maxRating = 0;
        let maxRatedBook;

        for(let i = 0; i < arr.length; i++){
        if(maxRating < arr[i].rating){
          maxRating = arr[i].rating;
        }
        if(Object.values(arr[i]).includes(maxRating)){
            maxRatedBook = arr[i];
        }
     }  
       
        
        return maxRatedBook;
    }


 constructor(title, year, genre, author, numPages,rating){
    super(title, year, genre)
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
 }

 summary(){
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
 }
}

const book1 = new Book('To Kill a Mockingbird', 1960, 'Fiction', 'Harper Lee', 281, 4.4);
Media.totalMediaCount; // 1
const book2 = new Book('The Bluest Eye', 1970, 'Fiction', 'Toni Morrison', 206, 4.6);
Media.totalMediaCount; // 2
book1.summary(); // "Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960, Page Count: 281, Genre: Fiction, Rating: 4.4"
Book.highestRating([book1, book2]); // Returns book2

// don't change below
module.exports = Book;
