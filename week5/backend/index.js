const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
    const todos = await todo.find();
    res.json({
        todos
    })
})

app.post("/todo", async (req, res) => {
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
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created!"    
    })
})

app.put("/completed", async (req, res) => {
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
    await todo.updateOne({
        _id : req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as done"
    })
})

app.listen(3000 , () => {console.log("Listening on Port 3000")});