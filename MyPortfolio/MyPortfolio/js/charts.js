(
  function () {

    "use strict";

    function drawChart() {

      var target = document.getElementById("charts")
      var data;
      var options = {

        title: 'My Chart',
        width: 500,
        height: 300

      };

      var chart = new google.visualization.PieChart(target);

      data = new google.visualization.DataTable();

      data.addColumn('string', 'Language');
      data.addColumn('number', 'Votes');
      data.addRow(['PHP', 30]);
      data.addRow(['Ruby', 20]);
      data.addRowm(['Python', 30]);

      chart.draw(data, options);


    };

    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
  }
)