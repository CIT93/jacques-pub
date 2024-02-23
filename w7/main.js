import { handleData } from "./carbonFootprint.js";
import { renderTbl } from "./renderTable.js";
const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");
FORM.addEventListener("submit", formSubmission);

function formSubmission(evt) {
  evt.preventDefault();
  const firstName = evt.target.firstname.value;
  const lastName = evt.target.lastname.value;
  const householdMembers = parseInt(evt.target.householdMembers.value);
  const houseSize = evt.target.houseSize.value;
  const res = {
    firstName,
    lastName,
    householdMembers,
    houseSize,
  };
  const [data, summary] = handleData(res);
  const table = renderTbl(Object.values(data).slice(0, 4), summary);
  TBL.appendChild(table);
  FORM.reset();
}
