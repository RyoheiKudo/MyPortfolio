"use strict";

const hiddenFunc = function () {
  $("#dotinstall").css("display", "none");
  $("#references").css("display", "none");
  $("#progate").css("display", "none");
};

let app1 = new Vue({
  el: "#progate",
  data: {
    progateLessons: [
      "HTML & CSS",
      "JavaScript", //checked
      "jQuery", //checked
      "Ruby",
      "Ruby on Rails5",
      "PHP", //checked
      "Python",
      "Command Line",
      "Git",
      "React",
      "Node.js",
    ],
  },
});

$(function () {
  $("#progate").css("display", "none");
  $("#titleProgate").click(function () {
    hiddenFunc();
    $("#progate").fadeIn(1500);
  });
});

let app2 = new Vue({
  el: "#dotinstall",
  data: {
    dotinstallLessons: [
      { name: "R言語入門" }, //checked
      { name: "HTML/CSSの学習環境を整えよう" }, //checked
      { name: "Visual Studio Code入門" }, //checked
      { name: "はじめてのHTML" }, //checked
      { name: "はじめてのCSS" }, //checked
      { name: "CSSで吹き出しを作ろう" }, //checked
      { name: "Font Awesome 5入門" },
      { name: "はじめてのJavaScript" }, //checked
      { name: "Chrome Developer Tools入門" },
      { name: "JavaScriptでおみくじを作ろう" }, //checked
      { name: "Google Charts入門" }, //checked
      { name: "Google Maps API入門" }, //checked
      { name: "UNIXコマンド入門 [一般ユーザー編]" },
      { name: "ローカル開発環境の構築 [macOS編]" },
      { name: "PostgreSQL入門" },
      { name: "Dockerを導入しよう" },
      { name: "Docker入門" }, //checked
      { name: "はじめてのPHP" }, //checked
      { name: "WordPress入門" },
      { name: "Ruby入門" },
    ],
  },
});

$(function () {
  $("#dotinstall").css("display", "none");
  $("#titleDotinstall").click(function () {
    hiddenFunc();
    $("#dotinstall").fadeIn(1500);
  });
});

let app3 = new Vue({
  el: "#references",
  data: {
    referencesLessons: [
      {
        name: "高等学校情報科「情報Ⅱ」教員研修用教材(本編)",
        url:
          "https://www.mext.go.jp/a_menu/shotou/zyouhou/detail/mext_00742.html",
      },
      {
        name: "数理・データサイエンス教育強化拠点コンソーシアム",
        url: "http://www.mi.u-tokyo.ac.jp/6university_consortium.html",
      },
      {
        name: "プログラミング演習 Python 2019",
        url:
          "https://repository.kulib.kyoto-u.ac.jp/dspace/bitstream/2433/245698/1/Version2020_02_13_01.pdf",
      },
      {
        name: "AWSによるクラウド入門",
        url: "https://tomomano.gitlab.io/intro-aws/",
      },
    ],
  },
});
$(function () {
  $("#references").css("display", "none");
  $("#titleReferences").click(function () {
    hiddenFunc();
    $("#references").fadeIn(1500);
  });
});
