// Set Dimensions
const xSize = 600; 
const ySize = 600;
const margin = 40;
const xMax = xSize - margin * 2;
const yMax = ySize - margin * 2;

function plotLineChart(file, color) {

    let data = [];

    d3.csv(file, function (d) {
        data.push({ x: d.x, y: parseFloat(d.y) });
    }).then(function () {

        // Get the 'limits' of the data - the full extent (mins and max)
        // so the plotted data fits perfectly 
        const xExtent = d3.extent(data, d => { return d.x });
        const yExtent = d3.extent(data, d => { return d.y });
        // Append SVG Object to the Page
        const svg = d3.select("#body1")
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
        // Y Axis scaling
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
            .attr("stroke", color)
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x(function (d) { return x(d.x) })
                .y(function (d) { return y(d.y) })
            );
    });
    
}

window.addEventListener('load', function () {

    plotLineChart('../csv/sine.csv', 'blue');
    plotLineChart('../csv/cosine.csv', 'green');

});