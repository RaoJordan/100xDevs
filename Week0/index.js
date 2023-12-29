 
let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".minute");
let secHand = document.querySelector(".second");

let ticking = function (){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hourHand.textContent = hr;
    minHand.textContent = min;
    secHand.textContent = sec;
}

setInterval(ticking, 1000);

let Car = function(color , model)
{
    // properties = arguments 
    this.carColor = color;
    this.carModel = model
}

// Adding method using prototype 
Car.prototype.startMethod = function()
{
    console.log("This is a method to start the engine")
}

// Adding properties using prototype 
Car.prototype.company = "Honda"

let instanceOfCar = new Car("Black", 9090);
console.log(instanceOfCar);
instanceOfCar.startMethod();