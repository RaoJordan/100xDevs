const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:AdZBW0xaEHXlevm0@cluster0.tgtf0zv.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = { todo };