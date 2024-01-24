const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {

})

app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload)
    {
        res.status(411).json({
            msg : "You sent wrong inputs!"
        })
        return;
    }

    // Put it in mongoDB
})

app.put("/completed", (req, res) => {
    const updatePaylaod = req.body;
    const parsedUpdatePayload = updateTodo.safeParse(updatePaylaod);
    if(!parsedUpdatePayload)
    {
        res.status(411).json({
            msg : "You sent wrong id!"
        })
        return;
    }

    // Update the data in mongoDB
})

app.listen(3000);