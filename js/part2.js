function logD3Version(){
    console.log('d3.version: ' + d3.version);
    document.getElementById('version').innerHTML = d3.version;
};

function modifyParagraph(){
    d3.select('p').style('font-size', '20px')
        .style('line-height', '1.5em')
        .style('color', '#FF0000')
        .style('font-family', 'Arial');
        // .text('This is a modified paragraph');
}

function addDivs(){
    for (let i = 0; i < 10; i++) {
        d3.select('body').append('div')
            .attr('class', 'containers m-3')
            .style('color', i < 5 ? 'red' : 'green')
            .text(i + 1)
            .attr('id', i < 1 ? 'first' : 'rest');
    }
}

function changeTextToFirstDiv(){
    d3.select('#first').text('start')
        .style('color', 'purple');
}

function demoD3Chaining(){
    d3.select('body')
        .append('p')
        .text('Hello world')
        .style('color', 'green');
}

window.addEventListener('load', function() {
    logD3Version();
    modifyParagraph();
    addDivs();
    changeTextToFirstDiv();
    demoD3Chaining();
})