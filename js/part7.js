function drawBarChart() {
    let heartfailurecsv = 'https://raw.githubusercontent.com/akmand/datasets/master/heart_failure.csv';
    var data = [];
    var scaleFactor = 10;
    var width = 100 * scaleFactor;
    var barHeight = 20;

    d3.csv(heartfailurecsv, function (d) {
        data.push(d);
    }).then(function () {
        var graph = d3.select("#barchart")
            .append("svg")
            .attr("width", width)
            .attr("height", barHeight * data.length);
        var bar = graph.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function (d, i) {
                return "translate(0," + i * barHeight + ")";
            });
        bar.append("rect")
            .attr("width", function (d) {
                return d.age * scaleFactor;
            })
            .attr("height", barHeight - 1)
            .style("fill", function (d) {
                if (d.age > 75) {
                    return "red";
                }
            });
        bar.append("text")
            .attr("x", function (d) { return (d.age * scaleFactor - 10); })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text(function (d) { return d.age; });
    });
}

window.addEventListener('load', function () {
    drawBarChart();
})
