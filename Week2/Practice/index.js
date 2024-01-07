const express = require('express');
const port = 3000;
const app = express();

function con (req, res, next1)
{
    console.log("wohoo")
    next1();
}

let calculateSum = function(n)
{
    let ans = 0;
    for(let i=1;i<=n;i++)
    {
        ans += i;
    }
    return ans;
}

app.get('/', con, function(req, res) {
    const num = req.query.n;
    const ans = calculateSum(num);
    console.log("Corect")
    res.status(200).send(ans.toString());
});

app.get('/home', (req,res) => {
    res.send("HELLO");
})
app.post('/home', function(req, res) {
    try {
        const verify = req.headers["authorization"];
        if (verify === "123123") {
            res.send("You are a verified user");
        } else {
            res.status(403).json({ error: "Unauthorized - You are not allowed." });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Dummy Data 

// const express = require("express");
// const port = 3000;
// const users = [{
//     name : "Yash",
//     kidneys: [{
//         healthy: false
//     }]
// }]
// const app = express();
// app.use(express.json());

// app.get('/', function(req,res){
//     const yashKidneys = users[0].kidneys;
//     const numOfKidneys = yashKidneys.length;
//     let healthyKidneys = 0;
//     for(let i=0;i<numOfKidneys;i++)
//     {
//         if(yashKidneys[i].healthy)
//         {
//             healthyKidneys += 1;
//         }
//     }
//     let unhealthyKidneys = numOfKidneys - healthyKidneys;

//     res.send({
//         numOfKidneys,
//         healthyKidneys,
//         unhealthyKidneys
//     })
// })

// app.post('/', function(req,res){
//     let isHealthy = req.body.isHealthy;
//     users[0].kidneys.push({
//         healthy: isHealthy
//     })
//     res.json({
//         msg: "Done"
//     })
// })

// app.put('/', function(req,res){
//     let len = users[0].kidneys.length;
//     for(let i = 0;i<len;i++)
//     {
//         users[0].kidneys[i].healthy = true;
//     }
//     res.send("All cool")
// })

// app.delete('/', function(req,res){
//     const newKidneys = [];
//     let len = users[0].kidneys.length;
//     for(let i = 0;i<len;i++)
//     {
//         if(users[0].kidneys[i].healthy)
//         {
//             newKidneys.push({
//                 healthy: true
//             })
//         }
//     }
//     users[0].kidneys = newKidneys
//     res.json({
//         msg: "Deleted faulty Kidneys"
//     })
// })

// app.listen(port);