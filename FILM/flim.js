class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(arr) {
    let pgArray = arr.filter((Movie) => Movie.rating == "PG");
    return pgArray;
  }
}
let a = new Movie("SeetaRmam", "Annapurana");
let b = new Movie("bujjigadu", "Annapurana");
let c = new Movie("darlig", "Annapurana", "PG1");
let d = new Movie("mirchi", "Annapurana", "PG3");
let e = new Movie("rebal", "Annapurana");
console.log(Movie.getPG([a, b, c, d, e]));
