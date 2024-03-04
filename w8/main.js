import { renderTbl } from "./render.js";
import { determineHouseholdPts, considerSizeOfYourHome } from "./cfp.js";

const FORM = document.getElementById("form");
const output = document.getElementById("output");
const cfpData = [];

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
  cfpData.push(newItem);
  return newItem;
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const householdMembers = parseInt(FORM.householdMembers.value);
  const houseSize = FORM.houseSize.value;
  start(householdMembers, houseSize, firstName, lastName);
  output.innerHTML = "";
  renderTbl(cfpData);
  FORM.reset();
});
