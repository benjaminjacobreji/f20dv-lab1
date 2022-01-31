var myData = ['a', 4, 1, 'b', 6, 2, 8, 9, 'z'];

function appendDataToDOM() {

    var p = d3.select("#body")
        .selectAll("span")
        .data(myData)
        .enter()
        .append('span')
        .text(function (d, i) {
            return d;
        })
        .style("color", function (d) {
            if (typeof d === 'number') {
                return "green";
            } else {
                return "blue";
            }
        })
        .style("font-size", "1.5em");

}

var myData2 = [3, 4];

function removeDataFromDOM() {

    var p = d3.select("#body2")
        .selectAll("p")
        .data(myData2)
        .text(function (d, i) {
            return d;
        })
        .exit()
        .remove();

}


window.addEventListener('load', function () {
    appendDataToDOM();
    removeDataFromDOM();
})
