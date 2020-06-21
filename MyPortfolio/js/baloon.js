"use srict";

const baloon = document.getElementById("baloon")
const baloon1 = document.getElementById("baloon1-1")
const baloon2 = document.getElementById("baloon1-2")
const baloon3 = document.getElementById("baloon1-3")
const baloon4 = document.getElementById("baloon1-4")

baloon.addEventListener("click", function () {

  baloon1.innerHTML = "今は昔、";

  var count = 0;
  var countup = function () {
    console.log(count++);
    var id = setTimeout(countup, 1000);

    if (count === 3) {
      baloon2.innerHTML = "竹取の翁というものありけり、";

    } else
      if (count === 6) {
        baloon3.innerHTML = "野山にまじりて竹を取りつつ、";
      } else
        if (count === 9) {
          baloon4.innerHTML = "よろづのことに使ひけり。";
        } else
          if (count > 9) {
            clearTimeout(id); //idをclearTimeoutで指定している
          }

  }

  countup();

})