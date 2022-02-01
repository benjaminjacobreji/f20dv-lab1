function drawBarChart() {
    let heartfailurecsv = 'https://raw.githubusercontent.com/akmand/datasets/master/heart_failure.csv';
    var data = [];
    var scaleFactor = 10;
    var width = 100 * scaleFactor;
    var barHeight = 20;

    d3.csv(heartfailurecsv, function (d) {
        data.push(d.age);
    }).then(function () {

        var barcolours = d3.scaleLinear()
            .domain([d3.min(data), d3.max(data)])
            .range(['lightyellow', 'orange']);

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
                return d * scaleFactor;
            })
            .attr("height", barHeight - 1)
            .style("fill", function (d) {
                return barcolours(d);
            });

        bar.append("text")
            .attr("x", function (d) { return (d * scaleFactor - 25); })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text(function (d) { return d; });
    });
}

function drawLineChart(file, color, shape) {
    // Set Dimensions
    const xSize = 600; const ySize = 600;
    const margin = 40;
    const xMax = xSize - margin * 2;
    const yMax = ySize - margin * 2;
    let data = [];
    let dataY = [];

    d3.csv(file, function (d) {
        data.push({ x: d.x, y: parseFloat(d.y) });
        dataY.push(parseFloat(d.y));
    }).then(function () {

        var linecolours = d3.scaleLinear()
            .domain([d3.min(dataY), d3.max(dataY)])
            .range(['lightyellow', color]);

        // Get the 'limits' of the data - the full extent (mins and max)
        // so the plotted data fits perfectly 
        const xExtent = d3.extent(data, d => { return d.x });
        const yExtent = d3.extent(data, d => { return d.y });
        // Append SVG Object to the Page
        const svg = d3.select("#linechart")
            .selectAll("svg")
            .attr('width', xSize)
            .attr('height', ySize)
            .append("g")
            .attr("transform", "translate(" + margin + "," + margin + ")");
        // X Axis
        const x = d3.scaleLinear()
            .domain([xExtent[0], xExtent[1]])
            .range([0, xMax]);
        // bottom
        svg.append("g")
            .attr("transform", "translate(0," + yMax + ")")
            .call(d3.axisBottom(x))
            .attr('color', 'green'); // make bottom axis green
        // top
        svg.append("g")
            .call(d3.axisTop(x));
        // Y Axis
        const y = d3.scaleLinear()
            .domain([yExtent[0], yExtent[1]])
            .range([yMax, 0]);
        // left y axis
        svg.append("g")
            .call(d3.axisLeft(y));
        // right y axis
        svg.append("g")
            .attr("transform", `translate(${yMax},0)`)
            .call(d3.axisRight(y));
        // Add the line
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", function (d) {
                return linecolours(d.y);
            })
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x(function (d) { return x(d.x) })
                .y(function (d) { return y(d.y) })
            );
        // shapes
        if (shape === 'circle') {
            svg.selectAll("dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", function (d) { return x(d.x) })
                .attr("cy", function (d) { return y(d.y) })
                .attr("r", 5)
                .style("fill", function (d) {
                    return linecolours(d.y);
                });
        }
        if (shape === 'triangle') {
            svg.selectAll("dot")
                .data(data)
                .enter()
                .append("path")
                .attr("d", d3.symbol().type(d3.symbolTriangle).size(100))
                .style("fill", function (d) {
                    return linecolours(d.y);
                })
                .attr("transform", function (d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });
        }
        // add the data points
        svg.selectAll("points")
            .data(data)
            .enter()
            .append("text")
            .attr("x", function (d) { return x(d.x) - 30 })
            .attr("y", function (d) { return y(d.y) })
            .style("fill", color)
            .text(function (d, i) {
                if (i % 10 == 0) {
                    return i;
                }
                return '';
            });

    });
}

window.addEventListener('load', function () {
    drawBarChart();
    drawLineChart('../csv/sine.csv', 'blue', 'circle');
    drawLineChart('../csv/cosine.csv', 'green', 'triangle');
})
