"use strict";

function set2fig(num) {
  // 桁数が1桁だったら先頭に0を加えて2桁に調整する
  let ret;
  if (num < 10) {
    ret = "0" + num;
  } else {
    ret = num;
  }
  return ret;
}
function showClock2() {
  const nowTime = new Date();
  const nowHour = set2fig(nowTime.getHours());
  const nowMin = set2fig(nowTime.getMinutes());
  const nowSec = set2fig(nowTime.getSeconds());
  const msg =
    "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
  document.getElementById("timeClock").innerHTML = msg;

  const timeComments = document.getElementById("timeComments");

  let clockComments;

  if (nowHour < 4) {
    clockComments = "夜更かしですか？お仕事ですか？ご自愛ください";
  } else if (nowHour < 8) {
    clockComments = "おはようございます！今日も1日頑張りましょう！";
  } else if (nowHour < 17) {
    clockComments = "何してる？ぼくはいま学校、、、なのかな？";
  } else {
    clockComments = "今日も1日お疲れ様でした！ビール飲んで寝よ！";
  }

  timeComments.innerHTML = clockComments;
}
setInterval("showClock2()", 1000);
