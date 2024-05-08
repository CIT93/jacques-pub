export default class Movie {
  constructor(movie, length) {
    this.id = length + 1;
    this.title = movie.title;
    this.yearReleased = movie.yearReleased;
    this.description = movie.description;
    this.poster = `https://image.tmdb.org/t/p/original${movie.poster}`;
    this.backdropPoster = `https://image.tmdb.org/t/p/original${movie.backdropPoster}`;
    this.age = movie.age;
    this.points = movie.points;
    this.genre = movie.genre;
  }
}
