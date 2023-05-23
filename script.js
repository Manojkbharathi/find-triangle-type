"use strict";

const angleOneEl = document.getElementById("angle-one");
const angleTwoEl = document.getElementById("angle-two");
const angleThreeEl = document.getElementById("angle-three");
const btnSubmit = document.getElementById("btn-submit");
const typeEl = document.getElementById("triangle-type");
const errorMsg = document.getElementById("error-msg");

btnSubmit.addEventListener("click", () => {
  const angleOne = Number(angleOneEl.value);
  const angleTwo = Number(angleTwoEl.value);
  const angleThree = Number(angleThreeEl.value);
  typeEl.innerText = null;
  errorMsg.innerText = null;
  if (angleOne && angleTwo && angleThree) {
    if (angleOne && angleTwo && angleThree >= 1) {
      if (angleOne + angleTwo + angleThree === 180) {
        if (angleOne && angleTwo && angleThree === 60) {
          typeEl.innerText = `It is an equilateral triangle`;
        } else if (
          angleOne === angleTwo ||
          angleTwo === angleThree ||
          angleOne === angleThree
        ) {
          typeEl.innerText = `It is an  isolated triangles`;
        } else if (
          angleOne !== angleTwo ||
          angleTwo !== angleThree ||
          angleOne !== angleThree
        ) {
          typeEl.innerText = `It is a scalene triangle`;
        }
      } else {
        errorMsg.innerText = `enter a valid angle`;
      }
    } else {
      errorMsg.innerText = `enter a valid number`;
    }
  } else {
    errorMsg.innerText = `all fields are mandatory`;
  }
  angleOneEl.value = null;
  angleTwoEl.value = null;
  angleThreeEl.value = null;
});
