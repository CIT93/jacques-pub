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

function start(houseHoldMembers, houseSize) {
  const householdPTS = determineHouseholdPts(houseHoldMembers);
  const homesizePTS = considerSizeOfYourHome(houseSize);
  const total = homesizePTS + householdPTS;
  cfpData.push([houseHoldMembers, houseSize, householdPTS, homesizePTS, total]);
}

// Follow Along Version
// function displayOutput() {
//   for (arr of cfpData) {
//     console.log(arr);
//     const output = document.getElementById("output");
//     const newP = document.createElement("p");
//     newP.textContent = `Carbon Footprint total is ${arr[4]}`;
//     const houseSizeDetails = document.createElement("p");
//     houseSizeDetails.textContent = `Because your home size is ${arr[1]}, you score ${arr[3]} points.`;
//     const householdDetails = document.createElement("p");
//     householdDetails.textContent = `Since your total number of household members is ${arr[0]}, you score ${arr[2]} points.`;
//     const hr = document.createElement("hr");
//     const h2 = document.createElement("h2");
//     h2.textContent = "Entry";
//     output.appendChild(h2);
//     output.appendChild(houseSizeDetails);
//     output.appendChild(householdDetails);
//     output.appendChild(newP);
//     output.appendChild(hr);
//   }
// }

start(5, "apartment");
start(4, "large");
start(3, "medium");

// displayOutput();

// My version
window.onload = () => init();

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
  for (set of cfpData) {
    const [numOfHHM, houseSize, numHHPoints, numHSPoints, total] = set;
    const householdDetails = createElement(
      "p",
      `Since your total number of household members is ${numOfHHM}, you score ${numHHPoints} points.`
    );
    const houseSizeDetails = createElement(
      "p",
      `Because your home size is ${houseSize}, you score ${numHSPoints} points.`
    );
    const totalDetails = createElement(
      "p",
      `Carbon Footprint total is ${total}`
    );
    const hr = createElement("hr");
    elements.push(householdDetails, houseSizeDetails, totalDetails, hr);
  }
  displayContent(elements);
}