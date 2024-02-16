const FORM = document.getElementById("form");
const output = document.getElementById("output");
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
  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: householdPTS,
    houseSPTS: homesizePTS,
    cfpTotal: total,
  });
}

function displayOutput() {
  for (obj of cfpData) {
    const newP = document.createElement("p");
    newP.textContent = `Carbon Footprint total is ${obj.cfpTotal}`;
    const houseSizeDetails = document.createElement("p");
    houseSizeDetails.textContent = `Because your home size is ${obj.houseS}, you score ${obj.houseSPTS} points.`;
    const householdDetails = document.createElement("p");
    householdDetails.textContent = `Since your total number of household members is ${obj.houseM}, you score ${obj.houseMPTS} points.`;
    const hr = document.createElement("hr");
    const h2 = document.createElement("h2");
    h2.textContent = "Entry";
    output.appendChild(h2);
    output.appendChild(houseSizeDetails);
    output.appendChild(householdDetails);
    output.appendChild(newP);
    output.appendChild(hr);
  }
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const householdMembers = parseInt(FORM.householdMembers.value);
  const houseSize = FORM.houseSize.value;
  start(householdMembers, houseSize);
  output.innerHTML = "";
  displayOutput();
  FORM.reset();
});
