"use strict";
{

  const submit = document.getElementById("randomboxbtm");

  submit.addEventListener("click", () => {

    const arr = [];
    const randomnumber = document.getElementsByName("randomnumber");

    for (let i = 0; i < randomnumber.length; i++) {

      if (randomnumber[i].checked) {  //(color2[i].checked === true)と同じ
        arr.push(randomnumber[i].value);
      }

    }

    const num = arr;

    // Math.floorで少数点をなくす、0 =< Math.random() =< 1 より、0 =< Math.random() * num =< 5、
    // よってwinnerのとりうる値は1,2,3,4,5
    const winner = Math.floor(Math.random() * num);

    // for (let i = 0; i < num; i++) iが0からnumになるまで++足し続ける(0が一番目)
    for (let i = 0; i < num; i++) {

      // ("要素")を作成することをdivとする
      const randombox = document.getElementById("randombox");

      const div = document.createElement("div");

      randombox.appendChild(div);

      // 要素divを作成して、クラスにBoxを追加
      div.classList.add("box");

      // 要素divを作成して、イベントを作成
      div.addEventListener('click', () => {

        if (i === winner) {
          div.textContent = "Win!";
          div.classList.add('win');
          alert("あなたの勝利です！！!");
        } else {
          div.textContent = "Lose!";
          div.classList.add('lose');
        }

      })

    }
  })
}