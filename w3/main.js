let carbonFootprintPoints = 0;
// const numberInHousehold = 9;

function determineHouseholdPts(numberInHousehold) {
  console.log("Inside the function.");
  // if (numberInHousehold === 1) {
  //   carbonFootprintPoints = carbonFootprintPoints + 14;
  // } else if (numberInHousehold === 2) {
  //   carbonFootprintPoints = carbonFootprintPoints + 12;
  // } else if (numberInHousehold === 3) {
  //   carbonFootprintPoints = carbonFootprintPoints + 10;
  // } else if (numberInHousehold === 4) {
  //   carbonFootprintPoints = carbonFootprintPoints + 8;
  // } else if (numberInHousehold === 5) {
  //   carbonFootprintPoints = carbonFootprintPoints + 6;
  // } else if (numberInHousehold === 6) {
  //   carbonFootprintPoints = carbonFootprintPoints + 4;
  // } else if (numberInHousehold > 6) {
  //   carbonFootprintPoints = carbonFootprintPoints + 2;
  // } else {
  //   console.log("no update to points");
  // }

  // console.log(`Based on the number of household members (${numberInHousehold}), the points would be ${carbonFootprintPoints}`);

  const check = numberInHousehold > 6 ? "more" : numberInHousehold;

  switch (check) {
    case 1:
      carbonFootprintPoints = carbonFootprintPoints + 14;
      break;
    case 2:
      carbonFootprintPoints = carbonFootprintPoints + 12;
      break;
    case 3:
      carbonFootprintPoints = carbonFootprintPoints + 10;
      break;
    case 4:
      carbonFootprintPoints = carbonFootprintPoints + 8;
      break;
    case 5:
      carbonFootprintPoints = carbonFootprintPoints + 6;
      break;
    case 6:
      carbonFootprintPoints = carbonFootprintPoints + 4;
      break;
    case "more":
      carbonFootprintPoints = carbonFootprintPoints + 2;
      break;
    default:
      console.log("No points provided.");
  }

  console.log(
    `Based on the number of household members (${numberInHousehold}), the points would be ${carbonFootprintPoints}`
  );
}

determineHouseholdPts(3);
determineHouseholdPts(4);

