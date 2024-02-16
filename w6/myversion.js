const FORM = document.getElementById("form");
const output = document.getElementById("output");
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
  handleData(res);
  FORM.reset();
}
function handleData(res) {
  const { firstName, lastName, householdMembers: householdM, houseSize } = res;
  const points = calculatePoints(householdM, houseSize);
  const fullName = `${firstName} ${lastName}`;
  const data = {
    fullName,
    householdM,
    houseSize,
    points,
  };
  const li = displayContent(data);
  output.appendChild(li);
}
function calculatePoints(houseHoldMembers, houseSize) {
  const householdPTS = determineHouseholdPts(houseHoldMembers);
  const homesizePTS = considerSizeOfYourHome(houseSize);
  const total = homesizePTS + householdPTS;
  const points = {
    householdPTS,
    homesizePTS,
    total,
  };
  return points;
}

function displayContent(data) {
  const template = document.querySelector("#cfpTemplate");
  const clone = template.content.cloneNode(true);
  const nameEl = clone.querySelector("h3");
  nameEl.style.textTransform = "capitalize";
  nameEl.textContent = data.fullName;
  const [householdDetails, houseSizeDetails, totalDetails] =
    clone.querySelectorAll("p");
  householdDetails.textContent = `\u00A0\u00A0Since your total number of household members is ${data.householdM}, you score ${data.points.householdPTS} points.`;
  houseSizeDetails.textContent = `\u00A0\u00A0Because your home size is ${data.houseSize}, you score ${data.points.homesizePTS} points.`;
  totalDetails.textContent = `\u00A0\u00A0Carbon Footprint total is ${data.points.total}`;
  return clone;
}

function determineHouseholdPts(numberInHousehold) {
  let houseHoldPts = 0;
  const check =
    numberInHousehold < 1
      ? "less"
      : numberInHousehold > 5
      ? "more"
      : numberInHousehold;

  switch (check) {
    case "less":
      houseHoldPts = 14;
      break;
    case 1:
      houseHoldPts = 12;
      break;
    case 2:
      houseHoldPts = 10;
      break;
    case 3:
      houseHoldPts = 8;
      break;
    case 4:
      houseHoldPts = 6;
      break;
    case 5:
      houseHoldPts = 4;
      break;
    case "more":
      houseHoldPts = 2;
      break;
    default:
      console.log("No points provided.");
      return;
  }
  return houseHoldPts;
}

function considerSizeOfYourHome(homeSize) {
  let impactPoints = 0;
  switch (homeSize) {
    case "large":
      impactPoints = 10;
      break;
    case "medium":
      impactPoints = 7;
      break;
    case "small":
      impactPoints = 4;
      break;
    case "apartment":
      impactPoints = 2;
      break;
    default:
      console.log("Could not determine home size provided.");
      return;
  }
  return impactPoints;
}

function createElement(elementType, elementText = null) {
  const newElement = document.createElement(elementType);
  if (!elementText) {
    return newElement;
  } else {
    const newText = document.createTextNode(elementText);
    newElement.appendChild(newText);
  }
  return newElement;
}
