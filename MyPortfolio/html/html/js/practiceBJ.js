"use strict";
const card1Num = document.getElementById("card1Num");
const card2Num = document.getElementById("card2Num");
const card3Num = document.getElementById("card3Num");
const card4Num = document.getElementById("card4Num");
const card5Num = document.getElementById("card5Num");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");

const displayNum = function () {
  let valueNum1 = card1Num.value;
  let valueNum2 = card2Num.value;
  let valueNum3 = card3Num.value;
  let valueNum4 = card4Num.value;
  let valueNum5 = card5Num.value;

  //とり得る値を決めたい
  if (
    1 <= valueNum1 <= 13 &&
    1 <= valueNum2 <= 13 &&
    1 <= valueNum3 <= 13 &&
    1 <= valueNum4 <= 13 &&
    1 <= valueNum5 <= 13
  ) {
    card1.innerHTML = valueNum1;
    card2.innerHTML = valueNum2;
    card3.innerHTML = valueNum3;
    card4.innerHTML = valueNum4;
    card5.innerHTML = valueNum5;
  } else {
    card1.innerHTML = "overNumber";
  }
};

function handAnalysis() {
  displayNum();
}
