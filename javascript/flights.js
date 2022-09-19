function Flights(){
    this.airLineName = this.airLineName;
    throw new console.error("Can not create construtor of Abstract Class");
}
Flights.prototype.display = function(){
    return "airline is " + this.airLineName;
}

function Airline(airLineName){
    this.airLineName = airLineName;
}
Airline.prototype = Object.create(Flights.prototype)
var airline = new Airline("AirIndia")
document.writeln(airline.display())
// var flight = new Flights();