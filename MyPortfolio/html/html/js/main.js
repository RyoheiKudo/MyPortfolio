"use strict";
{
  const icon = document.getElementById("icon");
  icon.addEventListener("click", () => {
    alert("拡大しちゃだめ！！");
  });
}
{
  const hiddenShow1 = document.getElementById("hiddenShow1");

  const hiddenShow2 = document.getElementById("hiddenShow2");

  const hiddenShow3 = document.getElementById("hiddenShow3");

  //1が作品
  const hidden_show1 = document.getElementById("hidden_show1_1");
  //2が統計
  const hidden_show2 = document.getElementById("hidden_show2_1");
  //3がPython
  const hidden_show3 = document.getElementById("hidden_show3_1");

  hiddenShow1.addEventListener("click", () => {
    hidden_show1.classList.remove("hidden_show");
    hidden_show2.classList.remove("visible_show");
    hidden_show3.classList.remove("visible_show");
    hidden_show1.classList.add("visible_show");
    hidden_show2.classList.add("hidden_show");
    hidden_show3.classList.add("hidden_show");
  });

  hiddenShow2.addEventListener("click", () => {
    hidden_show1.classList.remove("visible_show");
    hidden_show2.classList.remove("hidden_show");
    hidden_show3.classList.remove("visible_show");
    hidden_show1.classList.add("hidden_show");
    hidden_show2.classList.add("visible_show");
    hidden_show3.classList.add("hidden_show");
  });

  hiddenShow3.addEventListener("click", () => {
    hidden_show1.classList.remove("visible_show");
    hidden_show2.classList.remove("visible_show");
    hidden_show3.classList.remove("hidden_show");
    hidden_show1.classList.add("hidden_show");
    hidden_show2.classList.add("hidden_show");
    hidden_show3.classList.add("visible_show");
  });
}
{
  const hiddenShow0_1 = document.getElementById("hiddenShow0_1");
  const hiddenShow0_2 = document.getElementById("hiddenShow0_2");
  const hiddenShow0_3 = document.getElementById("hiddenShow0_3");

  const hidden_show0_1_1 = document.getElementById("hidden_show0_1_1");
  const hidden_show0_2_1 = document.getElementById("hidden_show0_2_1");
  const hidden_show0_3_1 = document.getElementById("hidden_show0_3_1");

  hiddenShow0_1.addEventListener("click", () => {
    hidden_show0_1_1.classList.remove("hidden_show");
    hidden_show0_2_1.classList.remove("visible_show");
    hidden_show0_3_1.classList.remove("visible_show");
    hidden_show0_1_1.classList.add("visible_show");
    hidden_show0_2_1.classList.add("hidden_show");
    hidden_show0_3_1.classList.add("hidden_show");
  });

  hiddenShow0_2.addEventListener("click", () => {
    hidden_show0_1_1.classList.remove("visible_show");
    hidden_show0_2_1.classList.remove("hidden_show");
    hidden_show0_3_1.classList.remove("visible_show");
    hidden_show0_1_1.classList.add("hidden_show");
    hidden_show0_2_1.classList.add("visible_show");
    hidden_show0_3_1.classList.add("hidden_show");
  });

  hiddenShow0_3.addEventListener("click", () => {
    hidden_show0_1_1.classList.remove("visible_show");
    hidden_show0_2_1.classList.remove("visible_show");
    hidden_show0_3_1.classList.remove("hidden_show");
    hidden_show0_1_1.classList.add("hidden_show");
    hidden_show0_2_1.classList.add("hidden_show");
    hidden_show0_3_1.classList.add("visible_show");
  });
}
