import { determineHouseholdPts, considerSizeOfYourHome } from "./cfp.js";

class FP {
  constructor(first, last, houseMembers, houseSize) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.setHouseholdPts();
    this.sethouseSizePts();
    this.total();
  }

  setHouseholdPts() {
    const householdPoints = determineHouseholdPts(this.houseMembers);
    if(!householdPoints) {
        throw new Error('Could not determine house member points.')
    } else {
        this.householdPts = householdPoints;
    }
  }
  sethouseSizePts() {
    const houseSizePoints = considerSizeOfYourHome(this.houseSize);
    if(!houseSizePoints) {
        throw new Error('Could not determine home size points.')
    } else {
        this.houseSizePts = houseSizePoints;
    }
  }

  total() {
    this.total = this.houseSizePts + this.householdPts;
  }
}

export { FP };
