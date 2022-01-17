function logD3Version(){
    console.log('d3.version: ' + d3.version);
    document.getElementById('version').innerHTML = d3.version;
};

window.addEventListener('load', function() {
    logD3Version();
})