const express = require('express');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const jwtPass = "12345"

const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    },
    {
      username: "yash@gmail.com",
      password: "123sdfs21",
      name: "Raman singh",
    },
    {
      username: "priya@gmail.com",
      password: "123321",
      name: "Priya kumari",
    },
  ];

function userExists(username, password) {
    let userExist = false;

    ALL_USERS.find((user) => {
        if (user.username === username && user.password === password) {
            userExist = true;
        }
    })

    return userExist;
}

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password))
    {
        return res.status(403).json({
            msg : "User doesn't exists"
        })
    }

    var token = jwt.sign({username : username}, jwtPass);
    return res.json({
        token
    });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPass);
        const username = decoded.username;
        const otherUsers = ALL_USERS.filter((user) => user.username !== username)
        return res.json({
            otherUsers
        });

    } catch (error) {
        return res.status(403).json({
            msg : "Invalid token"
        })
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 300");
});