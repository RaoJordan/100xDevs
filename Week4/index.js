let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');

let button = document.querySelector('#button');
let result = document.querySelector('#output');

let prin = document.querySelector('#prin');
let rate = document.querySelector('#rate');
let time = document.querySelector('#time');

let InterestButton = document.querySelector('#InterestButton');
let InterestResult = document.querySelector('#result');

let timeout;
const debouncedSum = () => {
    // If the user is typing continuosly, this function will be called multiple times in a very short period
    // of time and hence sum() wont't be called. clearTimeout will rest the time to 0. If the user takes a
    // break of one second only than sum() will be called and a request would be sent to the backend.
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        sum()
    }, 1000)
}

const sum = ()=>{
    let value1 = parseFloat(num1.value) || 0;
    let value2 = parseFloat(num2.value) || 0;

    fetch("http://localhost:5000/sum?a=" + value1 + "&b=" + value2)
        .then((res) =>{
            res.text()
                .then((ans) => {
                    result.innerHTML = `The sum is ${ans}`;
                })
        })

    
}

const calculateInterest = async () => {
    let p = parseFloat(prin.value);
    let r = parseFloat(rate.value);
    let t = parseFloat(time.value);

    const response = await fetch("http://localhost:5000/interest?p="+p+"&r="+r+"&t="+t);
    const ans = await response.text();
    InterestResult.innerHTML = ans
}
