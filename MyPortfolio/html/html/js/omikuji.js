'use strict';


{

  const btn = document.getElementById('btn');

  btn.addEventListener('click', function () {
    const results = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
    const n = Math.random()
    if (n < 0.02) {
      btn.textContent = results[1] //2%
    } else
      if (n < 0.22) {
        btn.textContent = results[2] //20%
      } else
        if (n < 0.72) {
          btn.textContent = results[3] //50%
        } else
          if (n < 0.92) {
            btn.textContent = results[4] //20%
          } else
            if (n < 0.97) {
              btn.textContent = results[5] //5%
            } else
              if (n < 0.99) {
                btn.textContent = results[6] //2%
              } else
                if (n < 1) {
                  btn.textContent = results[7] //1%
                };



    // const n = Math.floor(Math.random() * results.length); //0~4 Math.floorで少数点の切り捨て、Math.randomで0~1のランダムな数字
    // btn.textContent = results[n];
    // switch (n) {
    //   case 0 :
    //   btn.textContent = "大吉";
    //   break;
    //   case 1 :
    //   btn.textContent = "中吉";
    //   break;
    //   case 2 :
    //   btn.textContent = "凶";
    //   break;
    // };


  });
}
