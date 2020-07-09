(function () {
  "use strict";

  // パッケージのロード
  google.charts.load("current", { packages: ["corechart"] });
  // コールバックの登録
  google.charts.setOnLoadCallback(drawChart);

  // コールバック関数の実装
  function drawChart() {
    // データの準備
    var data = new google.visualization.arrayToDataTable([
      ["Language", "Votes"],
      ["HTMl", 38.7],
      ["JavaScript", 38.7],
      ["CSS", 13.5],
      ["R", 6.3],
      ["Python", 2.8],
    ]);

    // オプションの準備
    var options = {
      title: "My Chart",
      width: 500,
      height: 300,
      backgroundColor: "#f8f8f8",
      // colors: ["#aaa", "#bbb", "#ccc"],
      slices: [1, { offset: 0.2 }],
      is3D: true,
      // animation: {
      //   startup: true,
      //   duration: 800,
      //   easing: "inAndOut",
      // },
    };

    // 描画用インスタンスの生成および描画メソッドの呼び出し
    var target1 = document.getElementById("target1");
    var chart = new google.visualization.PieChart(target1);
    chart.draw(data, options);
  }
})();

// スプレッドシートからのデータを取得
(function () {
  "use strict";

  // パッケージのロード
  google.charts.load("current", { packages: ["corechart"] });
  // コールバックの登録
  google.charts.setOnLoadCallback(drawChart);

  //コールバック関数
  function drawChart() {
    // スプレッドシートへの問合わせ
    var query = new google.visualization.Query(
      "https://docs.google.com/spreadsheets/d/1C0NrRQ1fVwu44eWHBPOdM2rBLNs6fROZumrxSLiZzZ0/edit?usp=sharing"
    );
    // sendメソッドを呼び出し、引数に関数を指定する
    // ここではhandleQueryResponseが処理を担う
    query.send(handleQueryResponse);
  }

  //処理すべき内容
  //responseに問合わせたデータ内容が格納されている
  function handleQueryResponse(response) {
    //データの準備
    var data = response.getDataTable();

    // オプションの準備
    var options = {
      title: "My Chart",
      width: 500,
      height: 300,
      backgroundColor: "#f8f8f8",
    };

    //描画用インスタンスの生成および描画メソッドの呼び出し
    var chart = new google.visualization.PieChart(
      document.getElementById("target2")
    );
    chart.draw(data, options);
  }
})();
