const app = require('express')();

const ticketChecker = (req, res, next) => {
    const ticket = req.query.ticket;
    if(ticket === "free")
    {
        next();
    }
    else{
        res.status(403).send("ACCESS DENIED!")
    }
}
app.use(ticketChecker);

app.get("/ride1", (req, res) => {
    res.json({
        msg: "You are on ride 1"
    })
})

app.get("/ride2", (req, res) => {
    res.json({
        msg: "You are on ride 2"
    })
})

app.get("/ride3", (req, res) => {
    res.json({
        msg: "You are on ride 3"
    })
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});