import {
  determineHouseholdPts,
  considerSizeOfYourHome,
  determineFoodChoicePts,
  determineConsumptionPts,
} from "./cfp.js";

class FP {
  constructor(prop) {
    this.first = prop.first;
    this.last = prop.last;
    this.houseMembers = prop.houseMembers;
    this.houseSize = prop.houseSize;
    this.foodChoice = prop.foodChoice;
    this.foodChoiceTwo = prop.foodChoiceTwo;
    this.waterConsumption = prop.waterConsumption;
    this.waterConsumptionTwo = prop.waterConsumptionTwo;
    this.setHouseholdPts();
    this.sethouseSizePts();
    this.setFoodChoicePts();
    this.setConsumptionPts();
    this.total();
  }

  setHouseholdPts() {
    const householdPoints = determineHouseholdPts(this.houseMembers);
    if (!householdPoints) {
      throw new Error("Could not determine house member points.");
    } else {
      this.householdPts = householdPoints;
    }
  }
  sethouseSizePts() {
    const houseSizePoints = considerSizeOfYourHome(this.houseSize);
    if (!houseSizePoints) {
      throw new Error("Could not determine home size points.");
    } else {
      this.houseSizePts = houseSizePoints;
    }
  }

  setFoodChoicePts() {
    const foodChoicePoints = determineFoodChoicePts(
      this.foodChoice,
      this.foodChoiceTwo
    );
    if (!foodChoicePoints) {
      throw new Error("Could not determine food choice points.");
    } else {
      this.foodChoicePts = foodChoicePoints;
    }
  }

  setConsumptionPts() {
    const points = determineConsumptionPts(
      this.waterConsumption,
      this.waterConsumptionTwo
    );
    if (!points) {
      throw new Error("Could not determine water consumption points.");
    } else {
      this.waterConsumptionPts = points;
    }
  }
  total() {
    this.total =
      this.houseSizePts +
      this.householdPts +
      this.foodChoicePts +
      this.waterConsumptionPts;
  }
}

export { FP };
