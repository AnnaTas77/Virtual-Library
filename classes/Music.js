// import the Media class:
const Media = require('./Media.js')

// create your Music class:
class Music extends Media {
    static shortestAlbum(arr) {
        let minLength = 0;
        let shortestSongLength;
    
        for (let i = 0; i < arr.length; i++) {
            minLength = arr[i].length;
    
          if (minLength < arr[i].length) {
            minLength = arr[i].length;
          }
          if (Object.values(arr[i]).includes(minLength)) {
            shortestSongLength = arr[i];
          }
        }
        console.log(shortestSongLength);
        return shortestSongLength;
      }

    constructor(title, year, genre, artist, length){
        super(title, year, genre);
        this.artist = artist;
        this.length = length;

    }

    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length}`;

    }
}

const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 3949);
const music2 = new Music('Renaissance', 2022, 'R&B', 'Beyonce', 3734);
Media.totalMediaCount; 
music2.summary(); 
Music.shortestAlbum([music1, music2]);

// don't change below
module.exports = Music;
