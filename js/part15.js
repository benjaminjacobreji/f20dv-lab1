function pieChart() {
    var data = [3, 4, 8, 12, 8, 19, 12, 7, 17, 4, 2, 10];
    const xSize = 400; const ySize = 400;
    const margin = 40;
    const xMax = xSize - margin * 2;
    const yMax = ySize - margin * 2;
    // Append SVG Object to the Page
    const svg = d3.select("#body1")
        .append("svg")
        .attr('width', xSize)
        .attr('height', ySize)
        .append("g")
        .attr("transform", "translate(" + xSize / 2 + "," + ySize / 2 + ")");
    const radius = Math.min(xSize, ySize) / 2;
    var color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);
    // Generate the pie
    var pie = d3.pie();
    // Generate the arcs
    var arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);
    //Generate groups
    var arcs = svg.selectAll("arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc")
    //Draw arc paths
    arcs.append("path")
        .attr("fill", function (d, i) {
            return color(i);
        })
        .attr('stroke', 'black')
        .attr("d", arc);

    // Draw the labels, twowards the edges of the arcs
    arcs.append("text")
        .attr("transform", function (d) {
            x = arc.centroid(d)[0];
            y = arc.centroid(d)[1];
            x =x * 1.5;
            y = y * 1.5;
            return "translate(" + x + "," + y + ")";
        })
        .attr("text-anchor", "middle")
        .text(function (d) {
            return d.data;
        });
}

window.addEventListener('load', function () {
    pieChart();
});