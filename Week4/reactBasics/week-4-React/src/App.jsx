import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{
    title : "Go to gym",
    description : "From 7-9pm",
    // completed : "true"
  }, {
    title : "Eat 2 Kg food",
    description : "Eat everything",
    // completed : "false"
  }]);

  function addTodo()
  {
    setTodos([...todos, {
      title : "New Todo",
      description : "New desc added"
    }])
  }

  return (
    <>
        <button onClick={addTodo}>Add Todo</button>
        <CustomButton count={count} setCount={setCount}></CustomButton>
        {JSON.stringify(todos)}
        {todos.map((todo) => {
          return <CustomTodo title={todo.title} description={todo.description}></CustomTodo>         
        })}
    </>
  )
}

// Component 
function CustomButton (props) 
{
  const clickHandler = () => {
    props.setCount(props.count + 1);
  }
  
  return (
    <>
      <button onClick = {clickHandler}>
        Count is {props.count}
      </button>
    </>
  )
}

function CustomTodo(props)
{
  return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
        </div> 
  )
}

export default App
