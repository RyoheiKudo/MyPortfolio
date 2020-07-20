"use strict";
//htmlを読み込んでからjQueryの操作を行うように処理
//$(document).ready(function(){jQueryの内容}) もしくは $(function(){jQueryの内容})
//jQuery基礎
function jQuerySubmit() {
  const check = document.getElementById("input").checked;
  if (check != true) {
    // 以下で、hideメソッドを用いて<h1>要素を隠してください
    $("#h1_1").hide();
    //↓1500ミリ秒（1.5s）
    $("#h1_2").fadeOut(1500);
    $("#h1_3").slideUp(1500);
    $(".h1_1").slideUp(1500);
    $("#h1_4").fadeIn();
    $("#h1_5").fadeIn("slow");
    $("#h1_6").slideDown();
    $("#h1_7").slideDown("slow");
    $("#h1_8").click(function () {
      $("#h1_9").hide();
    });
    $("#h1_10").css("color", "red");
    //("display", "nonw") → .css("display", "block") で表示とか
    $("#h1_11").text("テキスト");
    $("#h1_12").text(
      "一部 <span style= color:red > テキスト </span>を赤色で表示されます。"
    );
    $("#h1_13").html(
      "一部 <span style= color:red > テキスト </span>を赤色で表示されます。"
    );
    $(".h1_3").click(function () {
      $(this).css("color", "red");
      // $(this).css("color", "black");
    });
    //変数を使用する
    //. でメソッドチェーン
    const h1_14 = $("#h1_14");
    h1_14.css("color", "blue").text("メソッドチェーン");
    $("#h1_15").find("h1").css("color", "red");
    $("#h1_16").hover(
      function () {
        $("#h1_17").text("hover時に出力").css("display", "block");
      },
      function () {
        $("#h1_17").css("display", "none");
      }
    );
  } else {
    alert("これ以上変化ない。。。");
  }
}
//モーダルの勉強
$(function () {
  $("#login-show").click(function () {
    $("#login-modal").fadeIn();
  });
  $("#login-hidden").click(function () {
    $("#login-modal").fadeOut();
  });
});
//スライドの勉強
$(function () {
  $(".index-btn").click(function () {
    $(".active").removeClass("active");

    // 変数clickedIndexを定義し、クリックしたボタンのインデックス番号を代入してください
    var clickedIndex = $(".index-btn").index($(this));

    // eqの引数をclickedIndexに書き換えてください
    $(".slide").eq(clickedIndex).addClass("active");
  });
});
