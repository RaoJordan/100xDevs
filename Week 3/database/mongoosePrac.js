const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://admin:AdZBW0xaEHXlevm0@cluster0.tgtf0zv.mongodb.net/');

const User = mongoose.model('Users', {
    name : String,
    email : String,
    password: String
});

app.post("/signup", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({email : email});
    if(existingUser)
    {
        return res.status(400).json({
            msg: "User already exists"
        });
    }

    const user = new User({
        name : 'Yash Yadav',
        email : "yashrocks@gamil.com",
        password : "qweqwrwqrqwe"
    });

    user.save();
    res.json({
        masg: "User created successfully"
    })
})




app.listen(3000);
