
/* ################ Slider ############# */

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

var slide = document.getElementById("ourRange");
var outpu = document.getElementById("dem");
outpu.innerHTML = slide.value;

slide.oninput = function () {
  outpu.innerHTML = this.value;
};

/*  ############## Pie Chrat ################# */ 

$(function() {
            $('.chart').easyPieChart({
                //your options goes here
            });
        });

        /* ############# BAR Chart ############## */

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    axisX: {
      interval: 5,
      intervalType: "number",
    },
    axisY: {
      // interval:100,
      valueFormatString: "$#0",
      gridColor: "#555",
      tickColor: "#555",
    },
    toolTip: {
      shared: false,
      content: toolTipContent,
    },
    data: [
      {
        type: "stackedColumn",
        // showInLegend: true,
        color: "#2216a1",
        name: "Q1",
        width: 2,
        dataPoints: [
          { y: 15, x: new Number(20, 0) },
          { y: 20, x: new Number(22.5, 0) },
          { y: 25, x: new Number(25, 0) },
          { y: 30, x: new Number(27.5, 0) },
          { y: 35, x: new Number(30, 0) },
          { y: 40, x: new Number(32.5, 0) },
          { y: 45, x: new Number(35, 0) },
          { y: 50, x: new Number(37.5, 0) },
          { y: 55, x: new Number(40, 0) },
          { y: 60, x: new Number(42.5, 0) },
          { y: 65, x: new Number(45, 0) },
          { y: 70, x: new Number(47.5, 0) },
          { y: 75, x: new Number(50, 0) },
        ],
      },
      {
        type: "stackedColumn",
        // showInLegend: true,
        name: "Q2",
        color: "#6051f0",
        width: 2,

        dataPoints: [
          { y: 25, x: new Number(20, 0) },
          { y: 30, x: new Number(22.5, 0) },
          { y: 35, x: new Number(25, 0) },
          { y: 40, x: new Number(27.5, 0) },
          { y: 45, x: new Number(30, 0) },
          { y: 50, x: new Number(32.5, 0) },
          { y: 55, x: new Number(35, 0) },
          { y: 60, x: new Number(37.5, 0) },
          { y: 65, x: new Number(40, 0) },
          { y: 70, x: new Number(42.5, 0) },
          { y: 75, x: new Number(45, 0) },
          { y: 85, x: new Number(47.5, 0) },
          { y: 95, x: new Number(50, 0) },
        ],
      },
      {
        type: "stackedColumn",
        // showInLegend: true,
        name: "Q3",
        color: "#84AEFE",
        width: 2,

        dataPoints: [
          { y: 20, x: new Number(20, 0) },
          { y: 30, x: new Number(22.5, 0) },
          { y: 40, x: new Number(25, 0) },
          { y: 50, x: new Number(27.5, 0) },
          { y: 60, x: new Number(30, 0) },
          { y: 70, x: new Number(32.5, 0) },
          { y: 80, x: new Number(35, 0) },
          { y: 90, x: new Number(37.5, 0) },
          { y: 100, x: new Number(40, 0) },
          { y: 110, x: new Number(42.5, 0) },
          { y: 120, x: new Number(45, 0) },
          { y: 130, x: new Number(47.5, 0) },
          { y: 140, x: new Number(50, 0) },
        ],
      },
    ],
  });
  chart.render();

  function toolTipContent(e) {
    
  }
};
