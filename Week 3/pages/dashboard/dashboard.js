let hourHand = document.querySelector(".hour")
let minHand = document.querySelector(".minute")
let secHand = document.querySelector(".second")

let ticking = function()
{
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hourHand.textContent = hr;
    minHand.textContent = ": " + min;
    secHand.textContent = ": " + sec;

}

setInterval(ticking, 1000);
