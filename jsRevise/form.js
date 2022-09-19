function save(){
    var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var city = document.getElementById("city").value;
var state = document.getElementById("state").value;
var zip = document.getElementById("zip").value;
var comments = document.getElementById("comments").value;
var testDP = document.getElementById("testdp").value;
var gender = document.querySelector('input[name = gender]:checked').value;

console.log(fname,lname,city,state,zip,comments,gender,testDP);
}