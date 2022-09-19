document.write("Hello");
var outerName = "Outer name";
function checks(){
    var name = "InnerName"
    document.write(name)
}
var b = 10

console.log(b);
var b = 20;
console.log("var " + b);

// can reassined
let a = 9;
a= 19
console.log("let "+a);

const c = 123;
// c = 23;

console.log("const "+ c);

let priceA = 10;
let priceB = 20;
let totalPrice = priceA + priceB;
console.log("totalPrice "+ totalPrice);

//definite loop
// initialise, condition, statement, increment

for(let index = 1; index <= 10 ; index++){
    // console.log(index);
}
function Cricketer (name1){
    this.name1 = name1;
    this.age = 20;
    this.height = 190;
 }
 var Virat = Cricketer("Kohli");
 console.log(Virat);
 for(var props in Virat){
    console.log(props + " : "+ Virat[props])
 }

var t = 2;
while(t < 10){
    console.log(t);
    t++;
}

var test = 6;
var tot ;
do {
    tot = test--;
}while( test == 1)
console.log(tot);

function addNum(a,b){
    let total = a + b;
    console.log(total);
}
addNum(2,3);

function defaulParam(num1, num2=2){
    let mul = num1 * num2;
    console.log("multiple "+ mul);
}
defaulParam(7)

const mulBy10 = function one(){
    console.log("hi");
}
mulBy10();
const mulBy5 = (num1, num2 = 5) => {
    console.log("Arrow " + num1*num2);
}
mulBy5(9);

var eId = [34,45,56,77];
console.log(eId[0])
console.log(eId[1])

for(let i = 0 ; i < eId.length; i ++){
    console.log("Array index "+ i + " val "+eId[i]);
}

const marray = [[1,2,3,4],[5,6,7,8]]
console.log(marray[1][2])

const a1 = ["a","b","c"];
const b1 = [...a1,"x","y","z"]
console.log(b1);

const eTrainer = {
    ename : "rajeev",
    eage : 18
}
if(eTrainer.ename == "rajeev"){
    console.log("Trainer is here")
}else{
    console.log("not a trainer")
}
if(eTrainer.eage > 18){
    console.log("eligible")
}else if (eTrainer.eage == 18) {
    console.log("just eligible")
} else {
    console.log("Not eligible")
}
var n = 5;
var s = "";
for(let i = 1 ; i <= n ; i++){
    for(var j = 0; j < n-i; j++){
        s  = s+" ";
    }
    for(var k = 0; k < i; k++){
        s  = s+"*";
    }
    s = s + "\n";
}
console.log(s)