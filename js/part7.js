function drawBarChart() {
    let heartfailurecsv = 'https://raw.githubusercontent.com/akmand/datasets/master/heart_failure.csv';
    var data = [];
    var scaleFactor = 3;
    var width = 400 * scaleFactor;
    var barHeight = 20;

    let heartfailuresperagerange = [
        {
            ageRange: '1-30',
            count: 0
        },
        {
            ageRange: '31-40',
            count: 0
        },
        {
            ageRange: '41-60',
            count: 0
        },
        {
            ageRange: '61-100',
            count: 0
        }
    ]

    d3.csv(heartfailurecsv, function (d) {
        if (d.age > 1 && d.age <= 30) {
            heartfailuresperagerange[0].count++;
        }
        if (d.age > 31 && d.age <= 40) {
            heartfailuresperagerange[1].count++;
        }
        if (d.age > 41 && d.age <= 60) {
            heartfailuresperagerange[2].count++;
        }
        if (d.age > 61 && d.age <= 100) {
            heartfailuresperagerange[3].count++;
        }
        data.push(d);
    }).then(function () {
        var graph = d3.select("#barchart")
            .append("svg")
            .attr("width", width)
            .attr("height", barHeight * heartfailuresperagerange.length);
            
        var bar = graph.selectAll("g")
            .data(heartfailuresperagerange)
            .enter()
            .append("g")
            .attr("transform", function (d, i) {
                return "translate(0," + i * barHeight + ")";
            });
        bar.append("rect")
            .attr("width", function (d) {
                console.log(d.count);
                return d.count * scaleFactor;
            })
            .attr("height", barHeight - 1)
            .style("fill", function (d) {
                if (d.count > 75) {
                    return "red";
                }
            });
        bar.append("text")
            .attr("x", function (d) { return (d.count * scaleFactor + 75); })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .attr("stroke", "black")
            .text(function (d) { return d.ageRange + ' years'; });

        var graph = d3.select("#barchart2")
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
