import { FORM, historyListEl, updateMovieList } from "../global/index.js";
import { cssClassEdit, createElement, getData } from "../global/index.js";
import { cloneHistoryListItem, cloneMovieDetails } from "./clone.js";

const removeClonedElements = () => {
  FORM.querySelector("fieldset#questionTwoField").remove();
  FORM.querySelector("fieldset#questionThreeField").remove();
  FORM.querySelector("fieldset#prefersNewReleasesField").remove();
  FORM.classList.remove("page-wrapper");
};

const deleteItem = (e) => {
  const target = e.target.closest("li");
  const listId = `${target.id}`.replace("listId", "");
  const movieDetailsWrapper = document.querySelector(
    "[data-wrapper='movieDetails']"
  );
  if (movieDetailsWrapper) {
    movieDetailsWrapper.remove();
  }
  const currentList = getData("historyList");
  const updatedMovies = currentList.filter(
    (item) => item.id !== parseInt(listId)
  );
  updateMovieList(updatedMovies);
  const li = e.target.closest("li");
  li.remove();
  alert("Item removed.");
};

export const toggleQuestionVisibility = (questionElement, mode = "current") => {
  if (mode === "current") {
    cssClassEdit(questionElement, "remove", "visible", "z-index-50");
    cssClassEdit(questionElement, "add", "hidden", "z-index-neg-1");
  } else {
    cssClassEdit(questionElement, "remove", "hidden", "z-index-neg-1");
    cssClassEdit(questionElement, "add", "visible", "z-index-50");
  }
};

export const createResultsContent = (movie, appendToEl) => {
  appendToEl.innerHTML = "";
  const heading = createElement("h2", "Movie Suggestion");
  const section = createElement("section", null, [
    "page-wrapper",
    "flex",
    "flex-column",
  ]);
  const paragraphs = ["p", "p", "p", "p"].map((el) => {
    const p = document.createElement(el);
    p.style.paddingInline = "1.5rem";
    p.style.fontSize = "1.4rem";
    p.style.fontFamily = "'Georgia', serif";
    return p;
  });
  paragraphs[0].textContent = movie.title;
  paragraphs[0].classList.add("heading-font");
  paragraphs[0].style.fontSize = "2.2rem";
  paragraphs[0].style.marginTop = "2rem";
  paragraphs[1].textContent = `Age: ${movie.age}`;
  paragraphs[2].textContent = `Genre: ${movie.genre}`;
  paragraphs[3].textContent = `Points: ${movie.points}`;
  const getAnotherMovieBtn = createElement(
    "button",
    "Get Another Recommendation",
    ["link"]
  );
  getAnotherMovieBtn.addEventListener("click", () =>
    document.location.reload()
  );
  const goToDashBoardLink = createElement("a", "Go to Dashboard", ["link"]);
  goToDashBoardLink.href = "dashboard.html";
  section.append(getAnotherMovieBtn, goToDashBoardLink);
  appendToEl.append(heading, ...paragraphs, section);
  removeClonedElements();
};
export const createMovieCardView = (movie) => {
  const wrapperEl = document.querySelector("[data-wrapper='movieDetails']");
  wrapperEl.innerHTML = "";
  const cardElements = cloneMovieDetails();
  cardElements[0].id = `movieId${movie.id}`;
  cardElements[1].style.background = `url(${movie.backdropPoster})`;
  cardElements[1].style.backgroundSize = "cover";
  cardElements[2].textContent += movie.title;
  cardElements[3].textContent +=
    `${movie.genre}`.slice(0, 1).toUpperCase() + `${movie.genre}`.slice(1);
  cardElements[4].textContent +=
    movie.yearReleased !== "Unavailable"
      ? `${new Date(movie.yearReleased).getMonth()}/${new Date(
          movie.yearReleased
        ).getDay()}/${new Date(movie.yearReleased).getYear()}`
      : movie.yearReleased;
  const br = createElement("br");
  cardElements[5].textContent += movie.description;
  const h1 = createElement("h2", "Details");
  wrapperEl.appendChild(h1);
  wrapperEl.appendChild(cardElements[0]);
};
export const createDashboardView = () => {
  const moviesInHistoryList = getData("historyList");
  if (!moviesInHistoryList || moviesInHistoryList.length < 1) {
    const wrapper = document.querySelector("[data-wrapper='history']");
    const p = createElement("p", "Your history list is empty.");
    wrapper.insertBefore(p, historyListEl);
  } else {
    moviesInHistoryList.forEach((movie) => {
      const li = cloneHistoryListItem();
      li.id = `listId${movie.id}`;
      const cardHeader = li.querySelector("[data-movie='poster']");
      cardHeader.src = movie.poster;
      cardHeader.alt = movie.title;
      const titleEl = li.querySelector("[data-movie='title']");
      titleEl.textContent = movie.title;
      titleEl.id = movie.id;
      const genreEl = li.querySelector("[data-movie='genre']");
      genreEl.textContent = movie.genre;
      genreEl.id = movie.id;
      genreEl.style.alignSelf = "flex-start";
      const viewDetailsEl = li.querySelector("[data-action='details']");
      viewDetailsEl.addEventListener("click", () => {
        createMovieCardView(movie);
      });
      viewDetailsEl.style.alignSelf = "flex-start";
      const deleteBtn = li.querySelector("[data-action='delete']");
      deleteBtn.addEventListener("click", deleteItem);
      historyListEl.appendChild(li);
    });
  }
};
