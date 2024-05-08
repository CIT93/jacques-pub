import { FANTASY, THRILLER, ANIMATION, COMEDY, DRAMA, ACTION } from "./data.js";
import { MOVIES } from "../movies/index.js";
import { getRandomNumber, FORM, handleError } from "../global/index.js";
import { toggleQuestionVisibility, cloneFieldset } from "../view/index.js";

const createQuestions = (data) => {
  const length = data.sets.length;
  const set = data.sets[getRandomNumber(length)];
  const emotionalExperience = {
    choices: set.emotionalExperience.choices,
    question: set.emotionalExperience.question,
  };
  const specificPreference = {
    choices: set.specificPreference.choices.map((choice) =>
      Object.assign({}, { text: choice.text, points: choice.points })
    ),
    question: set.specificPreference.question,
  };
  const movies = MOVIES.filter((movie) => movie.category === data.name).map(
    (movie) => movie.list
  );

  const questionSet = Object.assign(
    {},
    {
      movies,
      specificPreference,
      emotionalExperience,
    }
  );
  return questionSet;
};

export const getQuestionsByGenre = (genre) => {
  let questionSet;
  switch (genre) {
    case "fantasy":
      questionSet = createQuestions(FANTASY);
      break;
    case "thriller":
      questionSet = createQuestions(THRILLER);
      break;
    case "comedy":
      questionSet = createQuestions(COMEDY);
      break;
    case "drama":
      questionSet = createQuestions(DRAMA);
      break;
    case "action":
      questionSet = createQuestions(ACTION);
      break;
    case "animation":
      questionSet = createQuestions(ANIMATION);
      break;
    default:
      handleError("Something went wrong...");
      console.error("Something went wrong...");
  }
  return questionSet;
};

export function nextBtnEvent(event) {
  event.preventDefault();
  nextQuestion(event)
    .then(handleUIVisibility)
    .then(setQuestions)
    .then((el) => FORM.append(el))
    .catch(handleError);
}
export function previousBtnEvent(event) {
  event.preventDefault();
  previousQuestion(event);
}
function nextQuestion(e) {
  const fieldset = e.target.closest("fieldset");
  let questionFieldId;
  if (fieldset.id === "questionOneField") {
    const selectedGenre = FORM["questionOne"].value;
    const {
      emotionalExperience: questionTwo,
      specificPreference: questionThree,
    } = getQuestionsByGenre(selectedGenre);
    sessionStorage.setItem(
      "questions",
      JSON.stringify([questionTwo, questionThree])
    );
    questionFieldId = "questionTwo";
  } else {
    questionFieldId = "questionThree";
  }
  return new Promise((res, rej) => {
    try {
      res([fieldset, questionFieldId]);
    } catch (error) { }
  });
}

function previousQuestion(e) {
  const fieldset = e.target.closest("fieldset");
  if (fieldset.id === "questionTwoField") {
    // document.body.style.background = "linear-gradient(#F5750A, #0A8AF5)"
    const questionOne = document.querySelector("#questionOneField");
    toggleQuestionVisibility(questionOne, "");
  } else {
    // document.body.style.background = "linear-gradient(#cff1a6, ##C9A6F1)"
    const questionTwo = document.querySelector("#questionTwoField");
    toggleQuestionVisibility(questionTwo, "");
  }
  toggleQuestionVisibility(fieldset);
}

function handleUIVisibility([target, questionId]) {
  const currentFieldset = target;
  toggleQuestionVisibility(currentFieldset);
  return new Promise((res, rej) => {
    try {
      res(questionId);
    } catch (error) {
      rej(error);
    }
  });
}

function setQuestions(id) {
  return new Promise(async (res, rej) => {
    try {
      const getData = JSON.parse(sessionStorage.getItem("questions"));
      const question = id === "questionTwo" ? getData[0] : getData[1];
      const fieldsetEl = await cloneFieldset(question, id);
      toggleQuestionVisibility(fieldsetEl, "");
      res(fieldsetEl);
    } catch (error) {
      handleError(error);
    }
  });
}
