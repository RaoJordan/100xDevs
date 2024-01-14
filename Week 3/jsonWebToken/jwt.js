const jwt = require('jsonwebtoken');

const value = {
    name: "Yash Yadav",
    account: "12345678"
}

const jwtSecretPass = "987654"

const token = jwt.sign(value, jwtSecretPass);
console.log(token);