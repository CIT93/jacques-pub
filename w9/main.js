import { renderTbl } from "./render.js";
import { determineHouseholdPts, considerSizeOfYourHome } from "./cfp.js";
import { FORM } from "./global.js";
import { saveSS, getSS } from "./storage.js";
// I forgot to do the first step of the challenge
window.onload = renderTbl(getSS());

function start(houseHoldMembers, houseSize, firstname, lastname) {
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
}
const inputs = FORM.querySelectorAll("input");
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

  if (evt.target.value === "") {
    btn.disabled = true;
    errorMsg =
      evt.target.id === "firstnameInput"
        ? errMessage(evt.target.id)
        : errMessage(evt.target.id);
  } else {
    btn.disabled = false;
    errMessage(evt.target.id, true);
  }
}

function errMessage(id, pass = false) {
  const errFirstNameEl = document.getElementById("firstnameErr");
  const errLastNameEl = document.getElementById("lastnameErr");

  if (id === "firstnameInput") {
    errFirstNameEl.textContent = !pass ? "First name is required." : "";
    errFirstNameEl.style.color = "red";
  } else {
    errLastNameEl.textContent = !pass ? "Last name is required." : "";
    errLastNameEl.style.color = "red";
  }
}
