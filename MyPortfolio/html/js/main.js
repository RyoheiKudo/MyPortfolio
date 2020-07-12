"use strict";
// クリックしたら、それ以外を非表示

{
  const googleCharts = document.getElementById("googleCharts");
  const googleChartsClick = document.getElementById("googleChartsClick");

  const balloon = document.getElementById("balloon");
  const balloonClick = document.getElementById("balloonClick");

  const othello = document.getElementById("othello");
  const othelloClick = document.getElementById("othelloClick");

  const omikuji = document.getElementById("omikuji");
  const omikujiClick = document.getElementById("omikujiClick");

  const random = document.getElementById("random");
  const randomClick = document.getElementById("randomClick");

  const rDecisionTree = document.getElementById("rDecisionTree");
  const rDecisionTreeClick = document.getElementById("rDecisionTreeClick");

  const rLargeNums = document.getElementById("rLargeNums");
  const rLargeNumsClick = document.getElementById("rLargeNumsClick");

  const rBinom = document.getElementById("rBinom");
  const rBinomClick = document.getElementById("rBinomClick");

  const rBasic = document.getElementById("rBasic");
  const rBasicClick = document.getElementById("rBasicClick");

  const pythonBasic = document.getElementById("pythonBasic");
  const pythonBasicClick = document.getElementById("pythonBasicClick");

  const rLLNandbinom = document.getElementById("rLLNandbinom");
  const rLLNandbinomClick = document.getElementById("rLLNandbinomClick");

  const nobelPeacePrize = document.getElementById("nobelPeacePrize");
  const nobelPeacePrizeClick = document.getElementById("nobelPeacePrizeClick");

  const practiceBJ = document.getElementById("practiceBJ");
  const practiceBJClick = document.getElementById("practiceBJClick");

  const googleMaps = document.getElementById("googleMaps");
  const googleMapsClick = document.getElementById("googleMapsClick");

  const allHidden = function () {
    googleChartsClick.classList.add("hidden_show");
    balloonClick.classList.add("hidden_show");
    othelloClick.classList.add("hidden_show");
    omikujiClick.classList.add("hidden_show");
    randomClick.classList.add("hidden_show");
    rDecisionTreeClick.classList.add("hidden_show");
    rLargeNumsClick.classList.add("hidden_show");
    rBinomClick.classList.add("hidden_show");
    rBasicClick.classList.add("hidden_show");
    pythonBasicClick.classList.add("hidden_show");
    rLLNandbinomClick.classList.add("hidden_show");
    nobelPeacePrizeClick.classList.add("hidden_show");
    practiceBJClick.classList.add("hidden_show");
    googleMapsClick.classList.add("hidden_show");
  };

  googleChartsClick.addEventListener("click", () => {
    allHidden();
    googleChartsClick.classList.remove("hidden_show");
    googleCharts.classList.remove("hidden_show");
  });

  balloonClick.addEventListener("click", () => {
    allHidden();
    balloonClick.classList.remove("hidden_show");
    balloon.classList.remove("hidden_show");
  });

  othelloClick.addEventListener("click", () => {
    allHidden();
    othelloClick.classList.remove("hidden_show");
    othello.classList.remove("hidden_show");
  });

  omikujiClick.addEventListener("click", () => {
    allHidden();
    omikujiClick.classList.remove("hidden_show");
    omikuji.classList.remove("hidden_show");
  });

  randomClick.addEventListener("click", () => {
    allHidden();
    randomClick.classList.remove("hidden_show");
    random.classList.remove("hidden_show");
  });

  rDecisionTreeClick.addEventListener("click", () => {
    allHidden();
    rDecisionTreeClick.classList.remove("hidden_show");
    rDecisionTree.classList.remove("hidden_show");
  });

  rLargeNumsClick.addEventListener("click", () => {
    allHidden();
    rLargeNumsClick.classList.remove("hidden_show");
    rLargeNums.classList.remove("hidden_show");
  });

  rBinomClick.addEventListener("click", () => {
    allHidden();
    rBinomClick.classList.remove("hidden_show");
    rBinom.classList.remove("hidden_show");
  });

  rBasicClick.addEventListener("click", () => {
    allHidden();
    rBasicClick.classList.remove("hidden_show");
    rBasic.classList.remove("hidden_show");
  });

  pythonBasicClick.addEventListener("click", () => {
    allHidden();
    pythonBasicClick.classList.remove("hidden_show");
    pythonBasic.classList.remove("hidden_show");
  });

  rLLNandbinomClick.addEventListener("click", () => {
    allHidden();
    rLLNandbinomClick.classList.remove("hidden_show");
    rLLNandbinom.classList.remove("hidden_show");
  });

  nobelPeacePrizeClick.addEventListener("click", () => {
    allHidden();
    nobelPeacePrizeClick.classList.remove("hidden_show");
    nobelPeacePrize.classList.remove("hidden_show");
  });

  practiceBJClick.addEventListener("click", () => {
    allHidden();
    practiceBJClick.classList.remove("hidden_show");
    practiceBJ.classList.remove("hidden_show");
  });

  googleMapsClick.addEventListener("click", () => {
    allHidden();
    googleMapsClick.classList.remove("hidden_show");
    googleMaps.classList.remove("hidden_show");
  });
}
