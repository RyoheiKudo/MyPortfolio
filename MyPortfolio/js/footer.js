"use strict";
//TimeLIne
document.getElementById("resetAll").addEventListener("click", () => {
  location.reload();
});

//Comments
$(function () {
  $("#comments").click(function () {
    $("#login-modal").fadeIn();
  });
  $("#login-hidden").click(function () {
    $("#login-modal").fadeOut();
  });
});
