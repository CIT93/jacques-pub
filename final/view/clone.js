import { FORM } from "../global/index.js";
import { nextBtnEvent, previousBtnEvent } from "../questions/index.js";
import { toggleQuestionVisibility } from "./index.js";

function createTemplateClone(templateId) {
  const template = document.getElementById(templateId);
  const clone = template.content.cloneNode(true);
  return clone;
}

export function cloneFieldset(question, id) {
  if (document.querySelector(`#${id}`)) {
    document.querySelector(`#${id}Field`).remove();
  }
  const upperId = id.slice(0, 1).toUpperCase() + `${id}`.slice(1);
  const clone = createTemplateClone(`template${upperId}`);
  const fieldset = clone.querySelector("fieldset");
  const wrappers = fieldset.querySelectorAll("div.form-wrapper");
  const legend = clone.querySelector("legend");
  const nextBtn = clone.querySelector("[data-next-button]");
  if (nextBtn.id === "lastNextBtn") {
    nextBtn.addEventListener("click", cloneSubmission);
  } else {
    nextBtn.addEventListener("click", nextBtnEvent);
  }
  const prevBtn = clone.querySelector("[data-previous-button]");
  prevBtn.addEventListener("click", previousBtnEvent);
  legend.textContent = question.question;
  wrappers.forEach((wrapper, inx) => {
    const label = wrapper.querySelector("label");
    const input = wrapper.querySelector("input");
    label.htmlFor = `choiceInput${inx}`;
    label.textContent = question.choices[inx].text;
    input.value = `choice${inx}`;
    input.id = `choiceInput${inx}`;
    input.name = `${id}`;
  });
  return fieldset;
}

export function cloneSubmission(e) {
  e.preventDefault();
  const clone = createTemplateClone("templateSubmission");
  const fieldset = clone.querySelector("fieldset");
  const currentEl = e.target;
  toggleQuestionVisibility(currentEl);
  toggleQuestionVisibility(fieldset, "");
  FORM.append(fieldset);
}

export const cloneMovieDetails = () => {
  const clone = createTemplateClone("templateMovieCard");
  const queryMovieData = (val) => clone.querySelector(`[data-movie=${val}]`);
  const cardHeaderEl = clone.querySelector(".card-header");
  const cardWrapperEl = clone.querySelector(".card-wrapper");
  const titleEl = queryMovieData("title");
  const genreEl = queryMovieData("genre");
  const yearReleasedEl = queryMovieData("yearReleased");
  const descriptionEl = queryMovieData("description");
  // Order is important when putting this together.
  const elements = [
    cardWrapperEl,
    cardHeaderEl,
    titleEl,
    genreEl,
    yearReleasedEl,
    descriptionEl,
  ];
  return elements;
};

export function cloneHistoryListItem() {
  const clone = createTemplateClone("templateHistoryItem")
  const li = clone.querySelector("li")
  return li;
}