"use strict";
{
  const icon = document.getElementById("icon");
  icon.addEventListener("click", () => {
    alert("拡大しちゃだめ！！");
  });
}
//ロード
$(function () {
  $("#main-frame-content").html(
    "<iframe src= 'html/index.html' frameborder=' 0 ' width=' 100% ' height=' 1700px ' id=' mainFrame '></iframe>"
  );
});
