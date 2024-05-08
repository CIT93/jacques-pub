import { MOVIES } from "./index.js";
import {
  fetchAPIData,
  getData,
  getRandomNumber,
  handleError,
} from "../global/index.js";
import Movie from "./Movie.js";

const getMoviesByGenre = (genre) =>
  MOVIES.filter((movie) => movie.category === genre);

const getRemainingMoviesByRelease = (movies, age) =>
  movies.filter((movie) => movie.age === age);

const getMoviesByPoints = (movies, points) =>
  movies[0].list.filter((movie) => movie.points === points);

const determinePoints = (score) => {
  let points;
  if (score === 80 || score === 50) {
    points = 40;
  } else if (score === 40 || score === 70) {
    points = 20;
  } else {
    points = 30;
  }
  if (!points) {
    points = 0;
    throw new Error("An error occured");
  }
  return points;
};

export const getMovie = async (totalScore, age, genre) => {
  let movie;
  const historyList = getData("historyList");
  const points = determinePoints(totalScore);
  const moviesByGenre = getMoviesByGenre(genre);
  const moviesByPoints = getMoviesByPoints(moviesByGenre, points);
  const moviesByAge = getRemainingMoviesByRelease(moviesByPoints, age);
  const length = moviesByAge.length;
  const index = getRandomNumber(length);
  let selectedMovie = moviesByAge[index];
  if (!selectedMovie) {
    handleError(
      "There was an issue requesting a movie... Please try again later."
    );
    return;
  }
  const len = historyList && historyList.length > 0 ? historyList.length : 0;
  const apiData = await fetchAPIData(selectedMovie.title);
  if (!apiData || apiData === "exceededLimit") {
    const m = {
      title: selectedMovie.title,
      yearReleased: "Unavailable",
      description: "Unavailable",
      poster: "./img/no-poster.svg",
      backdropPoster: "./img/no-poster.svg",
      age: selectedMovie.age,
      points: selectedMovie.points,
      genre,
    };
    movie = new Movie(m, len);
    if (apiData === "exceededLimit") {
      alert(
        "Sorry, you've requested too many times today. You will still receive movie info, but it will be limited. We apologize for the inconvenience."
      );
    }
  } else {
    const data = {
      title: selectedMovie.title,
      yearReleased: apiData.yearReleased,
      description: apiData.description,
      poster: apiData.poster,
      backdropPoster: apiData.backdropPoster,
      age,
      points: selectedMovie.points,
      genre,
    };
    movie = new Movie(data, len);
  }
  return movie;
};

export const getPoints = (choiceTwo, choiceThree) => {
  let userPoints = 0;
  if (choiceTwo === 0) {
    userPoints += 20;
  } else if (choiceTwo === 1) {
    userPoints += 30;
  } else {
    userPoints += 40;
  }
  if (choiceThree === 0) {
    userPoints += 20;
  } else if (choiceThree === 1) {
    userPoints += 30;
  } else {
    userPoints += 40;
  }

  return userPoints;
};
