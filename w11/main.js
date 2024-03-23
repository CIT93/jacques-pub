import { renderTbl } from "./render.js";
import { FORM, inputs } from "./global.js";
import { saveSS, getSS } from "./storage.js";
import { FP } from "./fp.js";

window.onload = renderTbl(getSS());

inputs.forEach((input) => input.addEventListener("blur", validation));

FORM.querySelector("#foodInput").addEventListener("change", (e) =>
  disabledView(e.target)
);
FORM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const householdMembers = parseInt(FORM.householdMembers.value);
  const houseSize = FORM.houseSize.value;
  const foodChoice = FORM.foodChoice.value;
  const foodChoiceTwo = FORM.foodChoiceTwo.value;
  const values = {
    first: firstName,
    last: lastName,
    houseMembers: householdMembers,
    houseSize,
    foodChoice,
    foodChoiceTwo,
  };
  const fpObj = new FP(values);
  const cfpData = getSS();
  saveSS([...cfpData, fpObj]);
  renderTbl();
  FORM.reset();
  disabledView(FORM.querySelector("#foodInput"));
});

function validation(evt) {
  const btn = FORM.querySelector("button");
  const parent = evt.target.closest("div");
  const otherInput =
    evt.target.id === "firstnameInput"
      ? parent.nextElementSibling.querySelector("input")
      : parent.previousElementSibling.querySelector("input");
  if (evt.target.value !== "" && otherInput.value !== "") {
    btn.disabled = false;
    errMessage(
      evt.target.id === "firstnameInput" ? "firstname" : "lastname",
      true
    );
    errMessage(
      otherInput.id === "firstnameInput" ? "firstname" : "lastname",
      true
    );
  } else {
    btn.disabled = true;
    evt.target.id === "firstnameInput" && evt.target.value === ""
      ? errMessage("firstname")
      : errMessage("lastname");
  }
}

function errMessage(id, pass = false) {
  const errEl = document.getElementById(`${id}Err`);
  errEl.textContent = !pass
    ? `${id === "firstname" ? "First" : "Last"} name is required`
    : "";
  errEl.style.color = "red";
}

function disabledView(el) {
  const parent = el.closest("div");
  const sibling = parent.nextElementSibling;
  const input = sibling.querySelector("select");
  const label = sibling.querySelector("label");
  if (el.value === "") {
    input.disabled = true;
    label.classList.add("disabled");
  } else {
    input.disabled = false;
    label.classList.remove("disabled");
  }
}