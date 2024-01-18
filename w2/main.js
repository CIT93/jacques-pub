const householdPoints = 8;
const sizeOfHomePoints = 10;
const foodChoicesPoints = 6;
const waterConsumptionPoints = 1;
const householdPurchasesPoints = 6;
const wasteProducePoints = 20;
const wasteAmountPoints = 12;
const annualTransportationPoints = 12;

const total =
  householdPoints +
  sizeOfHomePoints +
  foodChoicesPoints +
  waterConsumptionPoints +
  householdPurchasesPoints +
  wasteProducePoints +
  wasteAmountPoints +
  annualTransportationPoints;
console.log("Total: ", total);

const totalPointsText = document.querySelector("span#points");
totalPointsText.textContent = total;

// Alternate solution
/*let totalAlt = householdPoints;
totalAlt += sizeOfHomePoints;
totalAlt += foodChoicesPoints;
totalAlt += waterConsumptionPoints;
totalAlt += householdPurchasesPoints;
totalAlt += wasteProducePoints;
totalAlt += wasteAmountPoints;
totalAlt += annualTransportationPoints;
console.log("Alt Total: ", totalAlt);
*/

// Intermediate solution
/*
const points = [
  householdPoints,
  sizeOfHomePoints,
  foodChoicesPoints,
  waterConsumptionPoints,
  householdPurchasesPoints,
  wasteProducePoints,
  wasteAmountPoints,
  annualTransportationPoints,
];
const totalPoints = points.reduce(
  (previousPoint, currentPoint) => previousPoint + currentPoint,
  0
);
console.log("(Intermediate) Total Points: ", totalPoints);
*/
