// My version
const cfpData = [];
window.onload = () => init();

function start(houseHoldMembers, houseSize) {
  const householdPTS = determineHouseholdPts(houseHoldMembers);
  const homesizePTS = considerSizeOfYourHome(houseSize);
  const total = homesizePTS + householdPTS;
  const newData = {
    houseHoldMembers,
    houseSize,
    householdPTS,
    homesizePTS,
    total,
  };
  cfpData.push(newData);
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

function displayContent(elements) {
  const wrapper = document.getElementById("output");
  wrapper.append(...elements);
}

function init() {
  let elements = [];
  cfpData.length > 0 &&
    cfpData.map((data) => {
      const householdDetails = createElement(
        "p",
        `Since your total number of household members is ${data.houseHoldMembers}, you score ${data.householdPTS} points.`
      );
      const houseSizeDetails = createElement(
        "p",
        `Because your home size is ${data.houseSize}, you score ${data.homesizePTS} points.`
      );
      const totalDetails = createElement(
        "p",
        `Carbon Footprint total is ${data.total}`
      );
      const hr = createElement("hr");
      elements.push(householdDetails, houseSizeDetails, totalDetails, hr);
    });
  displayContent(elements);
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

start(5, "apartment");
start(4, "large");
start(3, "medium");
