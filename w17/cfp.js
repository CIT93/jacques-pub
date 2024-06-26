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

export const determineConsumptionPts = (choiceOne, choiceTwo) => {
  let consumptionPoints = 0;
  switch (choiceOne) {
    case "more":
      consumptionPoints += 3;
      break;
    case "four_nine":
      consumptionPoints += 2;
      break;
    case "one_three":
      consumptionPoints += 1;
      break;
    default:
      throw new Error(
        "An error occured. Could not determine consumption of water points."
      );
  }
  if (choiceTwo) {
    consumptionPoints = consumptionPoints * 2;
  }
  return consumptionPoints;
};
export const determineHouseholdPurchasesPts = (choice) => {
  let householdPurchasePts = 0;
  switch (choice) {
    case "more":
      householdPurchasePts += 10;
      break;
    case "five_seven":
      householdPurchasePts += 8;
      break;
    case "three_five":
      householdPurchasePts += 6;
      break;
    case "less":
      householdPurchasePts += 4;
      break;
    case "nothing_secondhand":
      householdPurchasePts += 2;
      break;
    default:
      throw new Error(
        "An error occured. Could not determine consumptopn of household purchases points."
      );
  }
  return householdPurchasePts;
};

export const determineWastePts = (choice) => {
  let points = 0;
  switch (choice) {
    case "4":
      points += 50;
      break;
    case "3":
      points += 40;
      break;
    case "2":
      points += 30;
      break;
    case "1":
      points += 20;
      break;
    case "half":
      points += 5;
      break;
    default:
      throw new Error(
        "An error occured. Unable to determine waste produce points."
      );
  }
  return points;
};

export const determineRecyclingPts = (choices) => {
  let points = 24;
  choices.forEach((choice) => {
    if (choice.checked && choice.value === "none") {
      return points;
    } else if (choice.checked) {
      points -= 4;
    }
  });
  return points;
};