import { renderTbl } from "./render.js";
import { determineHouseholdPts, considerSizeOfYourHome } from "./cfp.js";
import { FORM, inputs } from "./global.js";
import { saveSS, getSS } from "./storage.js";

window.onload = renderTbl(getSS());

const start = function (houseHoldMembers, houseSize, firstname, lastname) {
  const householdPTS = determineHouseholdPts(houseHoldMembers);
  const homesizePTS = considerSizeOfYourHome(houseSize);
  const total = homesizePTS + householdPTS;
  const newItem = {
    firstName: firstname,
    lastName: lastname,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: householdPTS,
    houseSPTS: homesizePTS,
    cfpTotal: total,
  };
  const cfpData = getSS();
  const newArr = [...cfpData, newItem];
  saveSS(newArr);
};

inputs.forEach((input) => input.addEventListener("blur", validation));
FORM.addEventListener("submit", async function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const householdMembers = parseInt(FORM.householdMembers.value);
  const houseSize = FORM.houseSize.value;
  start(householdMembers, houseSize, firstName, lastName);
  const data = await getSS();
  renderTbl(data);
  FORM.reset();
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
