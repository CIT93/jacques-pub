// Beginner Solution
function considerSizeOfYourHome(homeSize) {
  let impactPoints = 0;
  switch (homeSize) {
    case "large":
      impactPoints += 10;
      break;
    case "medium":
      impactPoints += 7;
      break;
    case "small":
      impactPoints += 4;
      break;
    case "apartment":
      impactPoints += 2;
      break;
    default:
      console.log("Could not determine home size provided.");
      return;
  }

  console.log(
    `Because the size of your home is ${homeSize}, your impact points are ${impactPoints}`
  );
}
considerSizeOfYourHome("large");
considerSizeOfYourHome("small");
considerSizeOfYourHome("blah");
// END OF BEGINNER SOLUTION

// Intermediate
window.onload = () => {
  // Uncomment getHomeSize to trigger this solution (make sure to comment above first!)
  // getHomeSize();
};
const getImpactPoints = (homeSize, points) =>
  console.log(
    `Because the size of your home is ${homeSize}, your impact points are ${points}.`
  );

function setImpactPoints(sizeOfHome) {
  let impactPoints = 0;
  switch (sizeOfHome) {
    case "large":
      impactPoints += 10;
      break;
    case "medium":
      impactPoints += 7;
      break;
    case "small":
      impactPoints += 4;
      break;
    case "apartment":
      impactPoints += 2;
      break;
    default:
      throw new Error("An error occured. Please refresh page.");
  }
  getImpactPoints(sizeOfHome, impactPoints);
}

function getHomeSize() {
  let homeSizeChoices = ["large", "medium", "small", "apartment"];
  let homeSize = prompt(
    "What is your home size? Please ONLY choose ONE of the following: large, medium, small, apartment"
  );
  if (!homeSize) {
    handlePromptError(getHomeSize, "none");
  } else if (!homeSizeChoices.includes(homeSize)) {
    handlePromptError(getHomeSize);
  } else {
    setImpactPoints(homeSize);
  }
}

function handlePromptError(call, promptTypeError = null) {
  if (promptTypeError === "none") {
    alert("Did you forget something? Please try again.");
    call();
  } else {
    alert(
      "Hey! Very funny. Please, ONLY choose ONE of the following: large, medium, small, apartment"
    );
    call();
  }
}
// END OF INTERMEDIATE SOLUTION
