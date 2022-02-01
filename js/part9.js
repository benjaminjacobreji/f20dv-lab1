function createBarChartFromCSV(file) {
    const data = [50, 400, 300, 900, 250, 1000]
    const width = 500;
    const barHeight = 20;
    const margin = 1;

    d3.csv(file, function (d) {
        data.push(d.values);
    }).then(function () {
        var scale = d3.scaleLinear()
            .domain([d3.min(data), d3.max(data)])
            .range([50, 500]);
        var svg = d3.select("#body1")
            .append("svg")
            .attr("width", width)
            .attr("height", barHeight * data.length);
        var g = svg.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function (d, i) {
                return "translate(0," + i * barHeight + ")";
            });
        g.append("rect")
            .attr("width", function (d) {
                return scale(d);
            })
            .attr('fill', function (d) {
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
            .attr("height", barHeight - margin)
        g.append("text")
            .attr("x", function (d) { return (scale(d)); })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .style('text-anchor', 'end')
            .style('fill', 'white')
            .text(function (d) { return d; });
    });
}

let counter = 0;

function buttonClick(){
    if (counter == 0) {
        createBarChartFromCSV('../csv/barchart.csv');
        counter++;
    }
    else if (counter == 1) {
        d3.select("#body1")
        .append("div")
        .attr("class", "container-fluid mt-3")
        createBarChartFromCSV('../csv/barchart2.csv');
        counter++;
    }
    else {

    }
}

window.addEventListener('load', function () {
    
})
