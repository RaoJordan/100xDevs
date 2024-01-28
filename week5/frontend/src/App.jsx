import React, { useState, useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);
  const func = async () => {
    try {
      const data = await fetch("http://localhost:3000/todos");
      const res = await data.json();
      setTodos(res.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  
  useEffect(() => {
    func(); // Call func when the component mounts
  }, []); 

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
