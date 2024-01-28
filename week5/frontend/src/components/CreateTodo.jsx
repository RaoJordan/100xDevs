import { useState } from "react"

export function CreateTodo()
{
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    async function SubmitButton(){
        const request = await fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: desc
            }),
            headers: {
                "Content-type" : "application/json"
            }
        });
        const data = await request.json();
        alert("TODO Added!!");
    }
    return <>
    <input style={{padding: "10px", margin: "10px"}} type="text" placeholder="title" onChange={function(e){
        const value = e.target.value;
        console.log(value);
        setTitle(value);
    }}></input>
    <input style={{padding: "10px", margin: "10px"}} type="text" placeholder="description" onChange={function(e){
        const value = e.target.value;
        console.log(value);
        setDesc(value);
    }}></input>

    <button style={{padding: "10px", margin: "10px"}} onClick={SubmitButton} >Add a todo</button>
    </>
}