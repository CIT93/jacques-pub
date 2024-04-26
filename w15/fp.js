import {
  determineHouseholdPts,
  considerSizeOfYourHome,
  determineFoodChoicePts,
} from "./cfp.js";

class FP {
  constructor(prop) {
    this.first = prop.first;
    this.last = prop.last;
    this.houseMembers = prop.houseMembers;
    this.houseSize = prop.houseSize;
    this.foodChoice = prop.foodChoice;
    this.foodChoiceTwo = prop.foodChoiceTwo;
    this.setHouseholdPts();
    this.sethouseSizePts();
    this.setFoodChoicePts();
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

  total() {
    this.total = this.houseSizePts + this.householdPts + this.foodChoicePts;
  }
}

export { FP };
