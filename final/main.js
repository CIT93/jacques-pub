import { getMovie, getPoints } from "./movies/index.js";
import {
  createDashboardView,
  createResultsContent,
  toggleQuestionVisibility,
} from "./view/index.js";
import { nextBtnEvent } from "./questions/index.js";
import {
  FORM,
  createElement,
  cssClassEdit,
  store,
  loadGoogleFonts,
} from "./global/index.js";

const init = () => {
  loadGoogleFonts();
  if (document.title === "PickAPlot | Movie Suggestion Form") {
    FORM.addEventListener("change", validation);
    FORM.addEventListener("submit", submission);
    const nextBtn = document.querySelector("[data-next-button]");
    nextBtn.addEventListener("click", nextBtnEvent);
    onbeforeunload = () => {
      sessionStorage.removeItem("questions");
      FORM.reset();
    };
  } else if (document.title === "PickAPlot | Dashboard") {
    // Dashboard...
    const editButton = document.querySelector(
      "button[data-action-button='edit']"
    );
    editButton.addEventListener("click", editList);
    createDashboardView();
  }
};

window.onload = () => init();

async function submission(e) {
  e.preventDefault();
  let movie;
  let isLoading = true;
  const button = e.target.querySelector("button[type='submit']");
  button.disabled = true;
  FORM.remove();
  const loadingScreen = document.getElementById("loading");
  cssClassEdit(loadingScreen, "remove", "hidden", "z-index-neg-1");
  cssClassEdit(loadingScreen, "add", "visible", "z-index-50");
  cssClassEdit(loadingScreen.querySelector("i"), "add", "loading-icon");
  setTimeout(async () => {
    while (isLoading) {
      const questionTwoChoice = parseInt(
        `${e.target.questionTwo.value}`.replace("choice", "")
      );
      const questionThreeChoice = parseInt(
        `${e.target.questionThree.value}`.replace("choice", "")
      );

      const points = getPoints(questionTwoChoice, questionThreeChoice);
      const prefersNewReleases = e.target.prefersNewReleases.value;
      const genre = e.target.questionOne.value;
      movie = await getMovie(points, prefersNewReleases, genre);
      if (movie) {
        isLoading = false;
        cssClassEdit(loadingScreen, "remove", "visible", "z-index-50");
        cssClassEdit(loadingScreen, "add", "hidden", "z-index-neg-1");
        cssClassEdit(
          loadingScreen.querySelector("i"),
          "remove",
          "loading-icon"
        );
        store(movie, "historyList");
      }
    }
    const resultsSection = document.getElementById("results");
    createResultsContent(movie, resultsSection);
  }, 2000);
}

function validation(e) {
  const fieldset = e.target.closest("fieldset");
  const submitBtn = fieldset.querySelector("button[type='submit']");
  const nextBtn = fieldset.querySelector("[data-next-button]");
  if (e.target.value === "") {
    nextBtn.disabled = true;
    const validationElement = document.getElementById("validationMessage");
    validationElement.textContent = `${e.target.name} is required. Please make a selection.`;
  } else {
    nextBtn ? (nextBtn.disabled = false) : null;
    submitBtn ? (submitBtn.disabled = false) : null;
  }
}

function editList(e) {
  e.preventDefault();
  const editBtn = e.target;
  editBtn.disabled = true;
  const list = editBtn.nextElementSibling;
  const listItems = list.querySelectorAll("li");
  const toggleHiddenClass = (item, action) => {
    const btn = item.querySelector("button[data-action='delete']");
    cssClassEdit(btn, action, "hidden");
  };
  const button = createElement("button", "Finish Editing");
  const parent = editBtn.closest("section");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    listItems.forEach((item) => toggleHiddenClass(item, "add"));
    editBtn.disabled = false;
    removeEventListener("click", e.target);
    e.target.remove();
    window.location.reload();
  });
  parent.insertBefore(button, list);
  listItems.forEach((item) => toggleHiddenClass(item, "remove"));
}
