import { renderTbl } from "./renderTable.js";
const cfpData = [];

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

function displaySummary(data, points) {
  const template = document.querySelector("#cfpTemplate");
  const clone = template.content.cloneNode(true);
  const [householdDetails, houseSizeDetails, totalDetails] =
    clone.querySelectorAll("p");
  householdDetails.textContent = `\u00A0\u00A0Since your total number of household members is ${data.householdM}, you score ${points.householdPTS} points.`;
  houseSizeDetails.textContent = `\u00A0\u00A0Because your home size is ${data.houseSize}, you score ${points.homesizePTS} points.`;
  totalDetails.textContent = `\u00A0\u00A0Carbon Footprint total is ${points.total}`;
  return clone;
}

function handleData(res) {
  const { firstName, lastName, householdMembers: householdM, houseSize } = res;
  const points = calculatePoints(householdM, houseSize);
  const fullName = `${firstName} ${lastName}`;
  const items = {
    fullName,
    householdM,
    houseSize,
  };
  const summary = displaySummary(items, points);
  const data = Object.assign(items, {
    total: points.total,
  });
  return [data, summary];
}

export { handleData };
