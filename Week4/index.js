let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');

let button = document.querySelector('#button');
let result = document.querySelector('#output');

let prin = document.querySelector('#prin');
let rate = document.querySelector('#rate');
let time = document.querySelector('#time');

let InterestButton = document.querySelector('#InterestButton');
let InterestResult = document.querySelector('#result');



button.onclick = ()=>{
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
