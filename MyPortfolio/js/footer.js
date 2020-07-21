"use strict";
//TimeLIne
$("#timeLine").click(function () {
  $("#main-frame-content").html(
    "<iframe src= 'html/index.html' frameborder=' 0 ' width=' 100% ' height=' 1700px ' id=' mainFrame '></iframe>"
  );
});

//Comments
$(function () {
  $("#comments").click(function () {
    //mainを変更
    $("#main-frame-content").html(
      "<h1>↓コメント↓</h1><iframe src= 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT0L2imop8sonyIKPO_Zh-D3y-tstusmUQ9cDx01HKJrEZurimGps_9ETCXozieIACNZ0mOtc9z32Ti/pubhtml?gid=431576877&single=true' scrolling='no 'frameborder = '0' width = '100%' height = '1650px'id = 'comments-frame-content'></iframe>"
    );
    //コメント送信
    $("#login-modal").fadeIn();
  });

  $("#login-hidden").click(function () {
    $("#login-modal").fadeOut();
  });

  $("#login-form-selection1").click(function () {
    $("#submit-frame").fadeIn().css("display", "inline-block");
  });
});
