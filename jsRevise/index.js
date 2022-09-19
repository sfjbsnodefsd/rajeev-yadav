var result = 0;
var preText = '';
var output = document.getElementById("output");
var previous = document.getElementById("previous");
function incr(){
    result += 1;
    output.innerText = result;
}
function decr(){
    result -= 1;
    output.innerText = result;
}
function save(){
    preText = preText +","+result;
    previous.innerText = preText
}