"use srict";

const balloon = document.getElementById("balloon")
const balloon1 = document.getElementById("balloon1-1")
const balloon2 = document.getElementById("balloon1-2")
const balloon3 = document.getElementById("balloon1-3")
const balloon4 = document.getElementById("balloon1-4")

balloon.addEventListener("click", function () {

  balloon1.innerHTML = "今は昔、";

  time();

  function time() {

    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    document.getElementById("time0").innerHTML = hour + ":" + minutes;

  };

  var count = 0;
  var countup = function () {

    console.log(count++);

    var id = setTimeout(countup, 1000);

    if (count === 3) {

      balloon2.innerHTML = "竹取の翁というものありけり、";
      document.getElementById("alreadyRead1").innerHTML = "既読"
      time();

      function time() {

        var now = new Date();
        var hour = now.getHours();
        var minutes = now.getMinutes();
        document.getElementById("time1").innerHTML = hour + ":" + minutes;

      };

    }
    else
      if (count === 6) {

        balloon3.innerHTML = "野山にまじりて竹を取りつつ、";
        time();

        function time() {

          var now = new Date();
          var hour = now.getHours();
          var minutes = now.getMinutes();
          document.getElementById("time2").innerHTML = hour + ":" + minutes;

        };

      } else
        if (count === 9) {

          balloon4.innerHTML = "よろづのことに使ひけり。";
          document.getElementById("alreadyRead3").innerHTML = "既読"
          time();

          function time() {

            var now = new Date();
            var hour = now.getHours();
            var minutes = now.getMinutes();
            document.getElementById("time3").innerHTML = hour + ":" + minutes;

          };

        } else
          if (count > 9) {

            clearTimeout(id); //idをclearTimeoutで指定している

          }

  };

  countup();

})