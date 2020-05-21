var parameters = {
  target: "#myFunction",
  data: [
    {
      fn: "sin(x)",
      color: "red"
    },
    {
      fn: "cos(x)",
      color: "blue"
    }
  ],
  grid: true,
  yAxis: { domain: [-1, 1] },
  xAxis: { domain: [0, 2 * Math.PI] }
};

function plot() {
  var color1 = document.querySelector("#color1").value;
  var color2 = document.querySelector("#color2").value;
  var xMin = document.querySelector("#xMin").value;
  var xMax = document.querySelector("#xMax").value;
  var yMin = document.querySelector("#yMin").value;
  var yMax = document.querySelector("#yMax").value;
  var f1 = document.querySelector("#function1").value;
  var f2 = document.querySelector("#function2").value;
  
  parameters.data[0].fn = f1;
  parameters.xAxis.domain=[xMin, xMax];
  parameters.yAxis.domain=[yMin, yMax];
  parameters.data[0].color=color1;
  parameters.data[1].fn=f2;
  parameters.data[1].color=color2;

  functionPlot(parameters);
}
