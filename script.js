const buttonA = document.querySelector(".btn-show-A");
const containerA = document.querySelector(".image-container-A");

const buttonB = document.querySelector(".btn-show-B");
const containerB = document.querySelector(".image-container-B");

const buttonC = document.querySelector(".btn-show-C");
const containerC = document.querySelector(".image-container-C");

let visibilityA = false;
let visibilityB = false;
let visibilityC = false;

buttonA.addEventListener("click", showEventA);
buttonB.addEventListener("click", showEventB);
buttonC.addEventListener("click", showEventC);

function showEventA () {
    if (visibilityA) {
      containerA.style.visibility = "hidden";
      visibilityA = false;
    } else {
      containerA.style.visibility = "visible";
      visibilityA = true;
    }
}

function showEventB() {
  if (visibilityB) {
    containerB.style.visibility = "hidden";
    visibilityB = false;
  } else {
    containerB.style.visibility = "visible";
    visibilityB = true;
  }
}

function showEventC() {
  if (visibilityC) {
    containerC.style.visibility = "hidden";
    visibilityC = false;
  } else {
    containerC.style.visibility = "visible";
    visibilityC = true;
  }
}

const buttonHideA = document.querySelector(".hide-A");
const buttonHideB = document.querySelector(".hide-B");
const buttonHideC = document.querySelector(".hide-C");

buttonHideA.addEventListener("click", hideA);
buttonHideB.addEventListener("click", hideB);
buttonHideC.addEventListener("click", hideC);

function hideA() {
  if (visibilityA) {
    containerA.style.visibility = "hidden";
    visibilityA = false;
  } 
}

function hideB() {
  if (visibilityB) {
    containerB.style.visibility = "hidden";
    visibilityB = false;
  }
}

function hideC() {
  if (visibilityC) {
    containerC.style.visibility = "hidden";
    visibilityC = false;
  }
}
