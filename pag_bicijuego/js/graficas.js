  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);



  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['1', '2'],
      ['Si', 40],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ]);

    var options = {
      title: ''
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }
