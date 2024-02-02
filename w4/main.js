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
  console.log(householdPTS);
  const homesizePTS = considerSizeOfYourHome(houseSize);
  console.log(homesizePTS);
  const total = homesizePTS + householdPTS;
  cfpData.push(houseHoldMembers, houseSize, householdPTS, homesizePTS, total);

  console.log(
    !isNaN(total)
      ? `Total Carbon Footprint score so far is ${total}`
      : "Sorry, an error occured."
  );
}

function displayOutput() {}

start(5, "apartment");
start(4, "large");
start(3, "medium");

displayOutput();
