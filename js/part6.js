
function createSquareSVGUsingLines(){
    //Create SVG element
    var svg = d3.select("#square")
        .append("svg")
        .attr("width", 400)
        .attr("height", 400)
        .style("border", '1px solid black');
    // create a square using lines inside the svg with each side in a different color
    svg.append("line")
        .attr("x1", 100)
        .attr("y1", 100)
        .attr("x2", 300)
        .attr("y2", 100)
        .style("stroke", "red");
    svg.append("line")
        .attr("x1", 300)
        .attr("y1", 100)
        .attr("x2", 300)
        .attr("y2", 300)
        .style("stroke", "blue");
    svg.append("line")
        .attr("x1", 300)
        .attr("y1", 300)
        .attr("x2", 100)
        .attr("y2", 300)
        .style("stroke", "green");
    svg.append("line")
        .attr("x1", 100)
        .attr("y1", 300)
        .attr("x2", 100)
        .attr("y2", 100)
        .style("stroke", "yellow");
}

function createSVGFromCSV(){

    var svg = d3.select("#car")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500)
        .style("border", '1px solid black');

    let rectangleShapes = []
    let circleShapes = []
    let ellipseShapes = []
    let lineShapes = []

    d3.csv("../csv/car.csv", function(data){
        if (data.shape === 'rect'){
            rectangleShapes.push(data);
        }
        if (data.shape === 'circle'){
            circleShapes.push(data);
        }
        if (data.shape === 'ellipse'){
            ellipseShapes.push(data);
        }
        if (data.shape === 'line'){
            lineShapes.push(data);
        }
        
    }).then(function(){

        svg.selectAll("rect")
        .data(rectangleShapes)
        .enter()
        .append("rect")
        .attr("x", function(d){
            return d.x;
        })
        .attr("y", function(d){
            return d.y;
        })
        .attr("width", function(d){
            return d.x1;
        })
        .attr("height", function(d){
            return d.y1;
        })
        .style("fill", function(d){
            return d.color;
        })
        .exit()
        .remove();

        svg.selectAll("circle")
        .data(circleShapes)
        .enter()
        .append("circle")
        .attr("cx", function(d){
            return d.x;
        })
        .attr("cy", function(d){
            return d.y;
        })
        .attr("r", function(d){
            return d.r;
        })
        .style("fill", function(d){
            return d.color;
        })
        .exit()
        .remove();

        svg.selectAll("ellipse")
        .data(ellipseShapes)
        .enter()
        .append("ellipse")
        .attr("cx", function(d){
            return d.x;
        })
        .attr("cy", function(d){
            return d.y;
        })
        .attr("rx", function(d){
            return d.x1;
        })
        .attr("ry", function(d){
            return d.y1;
        })
        .style("fill", function(d){
            return d.color;
        })
        .exit()
        .remove();

        svg.selectAll("line")
        .data(lineShapes)
        .enter()
        .append("line")
        .attr("x1", function(d){
            return d.x;
        })
        .attr("y1", function(d){
            return d.y;
        })
        .attr("x2", function(d){
            return d.x1;
        })
        .attr("y2", function(d){
            return d.y1;
        })
        .style("stroke", function(d){
            return d.color;
        })
        .exit()
        .remove();
    });
}

window.addEventListener('load', function () {
    
    createSquareSVGUsingLines();
    createSVGFromCSV();

})
