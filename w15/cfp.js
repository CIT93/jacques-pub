export const determineHouseholdPts = (numberInHousehold) => {
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
      return null;
  }
  return houseHoldPts;
};

export const considerSizeOfYourHome = (homeSize) => {
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
      return null;
  }
  return impactPoints;
};

export const determineFoodChoicePts = (choiceOne, choiceTwo) => {
  let foodPoints = 0;
  switch (choiceOne) {
    case "meat_daily":
      foodPoints += 10;
      break;
    case "meat_few":
      foodPoints += 8;
      break;
    case "vegetarian":
      foodPoints += 4;
      break;
    case "vegan":
      foodPoints += 2;
      break;
    default:
      throw new Error("An occured. Could not determine food choice points.");
  }
  if (choiceTwo === "prepackaged_convenience") {
    foodPoints += 12;
  } else if (choiceTwo === "fresh_convenience") {
    foodPoints += 6;
  } else {
    foodPoints += 2;
  }
  return foodPoints;
};

