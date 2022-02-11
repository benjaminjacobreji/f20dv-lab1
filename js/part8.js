function createCircleGraph() {
    const width = 500;
    const height = 500;
    const data = [10, 15, 20, 25, 30];
    // Note different valid ways of specifying color
    const colors = ['#ffffcc', 'red', 'rgb(0,255,0)', '#31a354', '#006837'];
    const svg = d3.select("#body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    const g = svg.selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("transform", function (d, i) {
            return "translate(0,0)";
        })
    g.append("circle")
        .attr("cx", function (d, i) {
            return i * 100 + 50;
        })
        .attr("cy", function (d, i) {
            return 100;
        })
        .attr("r", function (d) {
            return d * 1.5;
        })
        .attr("fill", function (d, i) {
            return colors[i];
        })
    g.append("text")
        .attr("x", function (d, i) {
            return i * 100 + 40;
        })
        .attr("y", 105)
        .attr("stroke", "teal")
        .attr("font-size", "12px")
        .attr("font-family", "sans-serif")
        .text(function (d) {
            return d;
        });


    const svg2 = d3.select("#body2")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    const g2 = svg2.selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("transform", function (d, i) {
            return "translate(0,0)";
        })
    g2.append("rect")
        .attr("x", function (d, i) {
            return i * 100 + 50;
        })
        .attr("y", function (d, i) {
            return 100;
        })
        .attr("width", function (d) {
            return d * 2;
        })
        .attr("height", function (d) {
            return d * 2;
        })
        .attr("fill", function (d, i) {
            return colors[i];
        })
    g2.append("text")
        .attr("x", function (d, i) {
            return i * 100 + 50 + (d / 2);
        })
        .attr("y", function (d, i) {
            return 100 + (d / 1);
        })
        .attr("stroke", "teal")
        .attr("font-size", "12px")
        .attr("font-family", "sans-serif")
        .text(function (d) {
            return d;
        });

    


}

window.addEventListener('load', function () {
    createCircleGraph();
})
