
let otherdata = [
    { name: 'test', val: 1, color: 'red' },
    { name: 'other', val: 2, color: 'blue' },
    { name: 'b', val: 3, color: 'green' },
];

function displayOtherData() {
    let paragraph = d3.select("#ex6")
        .selectAll("div")
        .data(otherdata)
        .text(function (d, i) {
            console.log("d.name: " + d.name);
            console.log("d.val: " + d.val);
            console.log("d.color: " + d.color);
            console.log("i: " + i);
            console.log("this: " + this);
            return 'cont: ' + d.name + ", colour: " + d.color; // return value is used to set the 'text'
        });
}

let num = [10, 50, 100, 200];

function changeColorBasedOnBounds() {
    let paragraph = d3.select("#ex7")
        .selectAll("div")
        .data(num)
        .text(function (d, i) {
            return 'cont:' + d; // return value is used to set the 'text'
        })
        .style("color", function (d, i) {
            if (d >= 50 && d <= 100) {
                return "red";
            } else {
                return "blue";
            }
        });

}

window.addEventListener('load', function () {
    displayOtherData();
    changeColorBasedOnBounds();
})
