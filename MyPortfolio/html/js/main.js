"use strict";

let app = new Vue({
  el: "#app",
  data: {
    apps: [
      {
        name: "othello",
        nameClick: "othelloClick",
        appName: "~オセロゲーム(未) .js~",
        lastUpdated: "",
        nameOpen: "othelloOpen",
        nameContent: "othelloContent",
        nameHtml: "html/othello.html",
      },
      {
        name: "practiceBJ",
        nameClick: "practiceBJClick",
        appName: "~ポーカーハンドの強さ(未) .js~",
        lastUpdated: "2020-07-14",
        nameOpen: "practiceBJOpen",
        nameContent: "practiceBJContent",
        nameHtml: "html/practiceBJ.html",
      },
      {
        name: "rDecisionTree",
        nameClick: "rDecisionTreeClick",
        appName: "~決定木分析(未) .r~",
        lastUpdated: "2020-06-25",
        nameOpen: "rDecisionTreeOpen",
        nameContent: "rDecisionTreeContent",
        nameHtml: "html/rDecisionTree.html",
      },
      {
        name: "pythonBasic",
        nameClick: "pythonBasicClick",
        appName: "~基礎(未) .py~",
        lastUpdated: "2020-06-25",
        nameOpen: "pythonBasicOpen",
        nameContent: "pythonBasicContent",
        nameHtml: "html/pythonBasic.html",
      },
      {
        name: "reactBasic",
        nameClick: "reactBasicClick",
        appName: "~React基礎(未) .js~",
        lastUpdated: "2020-07-17",
        nameOpen: "reactBasicOpen",
        nameContent: "reactBasicContent",
        nameHtml: "html/reactBasic.html",
      },
      {
        name: "vueBasic",
        nameClick: "vueBasicClick",
        appName: "~Vue基礎1 .js~",
        lastUpdated: "2020-07-20",
        nameOpen: "vueBasicOpen",
        nameContent: "vueBasicContent",
        nameHtml: "html/vueBasic.html",
      },
      {
        name: "jQueryBasic",
        nameClick: "jQueryBasicClick",
        appName: "~jQuery基礎 .js~",
        lastUpdated: "2020-07-17",
        nameOpen: "jQueryBasicOpen",
        nameContent: "jQueryBasicContent",
        nameHtml: "html/jQueryBasic.html",
      },
      {
        name: "phpBasic",
        nameClick: "phpBasicClick",
        appName: "~基礎(未) .php~",
        lastUpdated: "2020-07-17",
        nameOpen: "phpBasicOpen",
        nameContent: "phpBasicContent",
        nameHtml: "html/phpBasic.html",
      },
      {
        name: "googleMaps",
        nameClick: "googleMapsClick",
        appName: "~Google Maps API .js~",
        lastUpdated: "2020-07-10",
        nameOpen: "googleMapsOpen",
        nameContent: "googleMapsContent",
        nameHtml: "html/googleMaps.html",
      },
      {
        name: "googleCharts",
        nameClick: "googleChartsClick",
        appName: "~Google Charts .js~",
        lastUpdated: "2020-07-10",
        nameOpen: "googleChartsOpen",
        nameContent: "googleChartsContent",
        nameHtml: "html/googleCharts.html",
      },
      {
        name: "nobelPeacePrize",
        nameClick: "nobelPeacePrizeClick",
        appName: "~ノーベル平和賞日本人受賞者を覚えよう! .js~",
        lastUpdated: "2020-07-06",
        nameOpen: "nobelPeacePrizeOpen",
        nameContent: "nobelPeacePrizeContent",
        nameHtml: "html/nobelPeacePrize.html",
      },
      {
        name: "rLLNandbinom",
        nameClick: "rLLNandbinomClick",
        appName: "~大数の法則と中心極限定理 .r~",
        lastUpdated: "2020-07-05",
        nameOpen: "rLLNandbinomOpen",
        nameContent: "rLLNandbinomContent",
        nameHtml: "html/rLLNandbinom.html",
      },
      {
        name: "balloon",
        nameClick: "balloonClick",
        appName: "~東京サマーセッション LINE風 .js~",
        lastUpdated: "2020-07-04",
        nameOpen: "balloonOpen",
        nameContent: "balloonContent",
        nameHtml: "html/balloon.html",
      },
      {
        name: "rLargeNums",
        nameClick: "rLargeNumsClick",
        appName: "~大数の法則 .r~",
        lastUpdated: "2020-06-29",
        nameOpen: "rLargeNumsOpen",
        nameContent: "rLargeNumsContent",
        nameHtml: "html/rLargeNums.html",
      },
      {
        name: "rBinom",
        nameClick: "rBinomClick",
        appName: "~二項分布 .r~",
        lastUpdated: "2020-06-25",
        nameOpen: "rBinomOpen",
        nameContent: "rBinomContent",
        nameHtml: "html/rBinom.html",
      },
      {
        name: "rBasic",
        nameClick: "rBasicClick",
        appName: "~基礎 .r~",
        lastUpdated: "2020-06-25",
        nameOpen: "rBasicOpen",
        nameContent: "rBasicContent",
        nameHtml: "html/rBasic.html",
      },
      {
        name: "random",
        nameClick: "randomClick",
        appName: "~バイバインランダムボックス .js~",
        lastUpdated: "2020-06-21",
        nameOpen: "randomOpen",
        nameContent: "randomContent",
        nameHtml: "html/random.html",
      },
      {
        name: "omikuji",
        nameClick: "omikujiClick",
        appName: "~御神籤（大吉の確率2%!!!!）.js~",
        lastUpdated: "2020-06-18",
        nameOpen: "omikujiOpen",
        nameContent: "omikujiContent",
        nameHtml: "html/omikuji.html",
      },
    ],
  },
  mounted: function () {
    $(".hiddenShowContent").css("display", "none");

    const allHidden = function () {
      $("#googleCharts").css("display", "none");
      $("#balloon").css("display", "none");
      $("#othello").css("display", "none");
      $("#omikuji").css("display", "none");
      $("#random").css("display", "none");
      $("#rDecisionTree").css("display", "none");
      $("#rLargeNums").css("display", "none");
      $("#rBinom").css("display", "none");
      $("#rBasic").css("display", "none");
      $("#pythonBasic").css("display", "none");
      $("#rLLNandbinom").css("display", "none");
      $("#nobelPeacePrize").css("display", "none");
      $("#practiceBJ").css("display", "none");
      $("#googleMaps").css("display", "none");
      $("#phpBasic").css("display", "none");
      $("#jQueryBasic").css("display", "none");
      $("#vueBasic").css("display", "none");
      $("#reactBasic").css("display", "none");
    };
    $("#othello").click(function () {
      console.log("おはよう");
      allHidden();
      $("#othelloContent").css("display", "block");
      $("#othello").css("display", "block");
    });
    $("#googleCharts").click(function () {
      allHidden();
      $("#googleChartsContent").css("display", "block");
      $("#googleCharts").css("display", "block");
    });
    $("#balloon").click(function () {
      allHidden();
      $("#balloonContent").css("display", "block");
      $("#balloon").css("display", "block");
    });
    $("#othello").click(function () {
      allHidden();
      $("#othelloContent").css("display", "block");
      $("#othello").css("display", "block");
    });
    $("#omikuji").click(function () {
      allHidden();
      $("#omikujiContent").css("display", "block");
      $("#omikuji").css("display", "block");
    });
    $("#random").click(function () {
      allHidden();
      $("#randomContent").css("display", "block");
      $("#random").css("display", "block");
    });
    $("#rDecisionTree").click(function () {
      allHidden();
      $("#rDecisionTreeContent").css("display", "block");
      $("#rDecisionTree").css("display", "block");
    });
    $("#rLargeNums").click(function () {
      allHidden();
      $("#rLargeNumsContent").css("display", "block");
      $("#rLargeNums").css("display", "block");
    });
    $("#rBinom").click(function () {
      allHidden();
      $("#rBinomContent").css("display", "block");
      $("#rBinom").css("display", "block");
    });
    $("#rBasic").click(function () {
      allHidden();
      $("#rBasicContent").css("display", "block");
      $("#rBasic").css("display", "block");
    });
    $("#pythonBasic").click(function () {
      allHidden();
      $("#pythonBasicContent").css("display", "block");
      $("#pythonBasic").css("display", "block");
    });
    $("#rLLNandbinom").click(function () {
      allHidden();
      $("#rLLNandbinomContent").css("display", "block");
      $("#rLLNandbinom").css("display", "block");
    });
    $("#nobelPeacePrize").click(function () {
      allHidden();
      $("#nobelPeacePrizeContent").css("display", "block");
      $("#nobelPeacePrize").css("display", "block");
    });
    $("#practiceBJ").click(function () {
      allHidden();
      $("#practiceBJContent").css("display", "block");
      $("#practiceBJ").css("display", "block");
    });
    $("#googleMaps").click(function () {
      allHidden();
      $("#googleMapsContent").css("display", "block");
      $("#googleMaps").css("display", "block");
    });
    $("#phpBasic").click(function () {
      allHidden();
      $("#phpBasicContent").css("display", "block");
      $("#phpBasic").css("display", "block");
    });
    $("#jQueryBasic").click(function () {
      allHidden();
      $("#jQueryBasicContent").css("display", "block");
      $("#jQueryBasic").css("display", "block");
    });
    $("#vueBasic").click(function () {
      allHidden();
      $("#vueBasicContent").css("display", "block");
      $("#vueBasic").css("display", "block");
    });
    $("#reactBasic").click(function () {
      allHidden();
      $("#reactBasicContent").css("display", "block");
      $("#reactBasic").css("display", "block");
    });
  },
});

// {
//   vueBasicClick.addEventListener("click", () => {
//     allHidden();
//     vueBasicClick.classList.remove("hidden_show");
//     vueBasic.classList.remove("hidden_show");
//   });

//   reactBasicClick.addEventListener("click", () => {
//     allHidden();
//     reactBasicClick.classList.remove("hidden_show");
//     reactBasic.classList.remove("hidden_show");
//   });

//   googleChartsClick.addEventListener("click", () => {
//     allHidden();
//     googleChartsClick.classList.remove("hidden_show");
//     googleCharts.classList.remove("hidden_show");
//   });

//   balloonClick.addEventListener("click", () => {
//     allHidden();
//     balloonClick.classList.remove("hidden_show");
//     balloon.classList.remove("hidden_show");
//   });

//   othelloClick.addEventListener("click", () => {
//     allHidden();
//     othelloClick.classList.remove("hidden_show");
//     othello.classList.remove("hidden_show");
//   });

//   omikujiClick.addEventListener("click", () => {
//     allHidden();
//     omikujiClick.classList.remove("hidden_show");
//     omikuji.classList.remove("hidden_show");
//   });

//   randomClick.addEventListener("click", () => {
//     allHidden();
//     randomClick.classList.remove("hidden_show");
//     random.classList.remove("hidden_show");
//   });

//   rDecisionTreeClick.addEventListener("click", () => {
//     allHidden();
//     rDecisionTreeClick.classList.remove("hidden_show");
//     rDecisionTree.classList.remove("hidden_show");
//   });

//   rLargeNumsClick.addEventListener("click", () => {
//     allHidden();
//     rLargeNumsClick.classList.remove("hidden_show");
//     rLargeNums.classList.remove("hidden_show");
//   });

//   rBinomClick.addEventListener("click", () => {
//     allHidden();
//     rBinomClick.classList.remove("hidden_show");
//     rBinom.classList.remove("hidden_show");
//   });

//   rBasicClick.addEventListener("click", () => {
//     allHidden();
//     rBasicClick.classList.remove("hidden_show");
//     rBasic.classList.remove("hidden_show");
//   });

//   pythonBasicClick.addEventListener("click", () => {
//     allHidden();
//     pythonBasicClick.classList.remove("hidden_show");
//     pythonBasic.classList.remove("hidden_show");
//   });

//   rLLNandbinomClick.addEventListener("click", () => {
//     allHidden();
//     rLLNandbinomClick.classList.remove("hidden_show");
//     rLLNandbinom.classList.remove("hidden_show");
//   });

//   nobelPeacePrizeClick.addEventListener("click", () => {
//     allHidden();
//     nobelPeacePrizeClick.classList.remove("hidden_show");
//     nobelPeacePrize.classList.remove("hidden_show");
//   });

//   practiceBJClick.addEventListener("click", () => {
//     allHidden();
//     practiceBJClick.classList.remove("hidden_show");
//     practiceBJ.classList.remove("hidden_show");
//   });

//   googleMapsClick.addEventListener("click", () => {
//     allHidden();
//     googleMapsClick.classList.remove("hidden_show");
//     googleMaps.classList.remove("hidden_show");
//   });

//   phpBasicClick.addEventListener("click", () => {
//     allHidden();
//     phpBasicClick.classList.remove("hidden_show");
//     phpBasic.classList.remove("hidden_show");
//   });

//   jQueryBasicClick.addEventListener("click", () => {
//     allHidden();
//     jQueryBasicClick.classList.remove("hidden_show");
//     jQueryBasic.classList.remove("hidden_show");
//   });
// }
