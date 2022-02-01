function drawAxisAllSides() {
    const width = 400;
    const height = 300;
    var data = [10, 15, 20, 25, 30];

    var svg = d3.select("#body1")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    var xscale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, width - 100]);
    var yscale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([height / 2, 0]);

    var x_axis = d3.axisBottom()
        .scale(xscale);
    var y_axis = d3.axisLeft()
        .scale(yscale);
    var x_axis_top = d3.axisTop()
        .scale(xscale);
    var y_axis_right = d3.axisRight()
        .scale(yscale);

    svg.append("g")
        .attr("transform", "translate(50, 50)")
        .call(y_axis)

    svg.append("g")
        .attr("transform", "translate(350, 50)")
        .attr("color", 'blue')
        .call(y_axis_right);

    var xAxisTranslate = height / 2 + 50;

    svg.append("g")
        .attr("transform", "translate(50, " + xAxisTranslate + ")")
        .call(x_axis)

    svg.append("g")
        .attr("transform", "translate(50, " + 50 + ")")
        .attr('color', 'blue')
        .call(x_axis_top);
}

function addAxisToBarCharChart() {
    let data = [50, 400, 600, 900, 250];
    let width = 400;
    const margin = 1
    

    var svg = d3.select("#body2")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);

    var yscale = d3.scaleLinear()
        .domain([d3.max(data), 0])
        .range([0, width]);

    var xscale = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([0, width]);

    var y_axis = d3.axisLeft()
        .scale(yscale);
    var x_axis = d3.axisBottom()
        .scale(xscale);

    svg.append("g")
        .attr("transform", 'translate(50, 10)')
        .call(y_axis);

    var xAxisTranslate = width + 10

    svg.append("g")
        .attr("transform", "translate(50, " + xAxisTranslate + ")")
        .call(x_axis);

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr('x', function (d, i){
            return xscale(i);
        })
        .attr('y', function (d){
            return xAxisTranslate - d / 2;
        })
        .attr('width', width / data.length - margin)
        .attr('height', function (d){
            return d / 2;
        })
        .attr('fill', function(d){
            if (d > 500) {
                return 'red';
            }
            else if (d < 100) {
                return 'green';
            }
            else {
                return 'blue';
            }
        })
        .attr('transform', 'translate(50,0)');


}

window.addEventListener('load', function () {
    drawAxisAllSides();
    addAxisToBarCharChart();
})