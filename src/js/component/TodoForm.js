import React from "react";
import { useState } from "react";


    const TodoForm = ({addTodo}) => {
        
    const [userValue, setUserValue] = useState("")

    // e is an event passed to the function to handle info submitted by user
    const handleSubmit = (e) =>{
        // function below prevents reloading when submitting
        e.preventDefault();

        addTodo(userValue)

        // clear input space after submit
        setUserValue("")
    }
    return(
        <form className="todoForm text-center" onSubmit={handleSubmit}>
        <input className="todoInput" type="text" value={userValue} placeholder="Add a new task" onChange={(e) => setUserValue(e.target.value)}></input>
        <button className="todoButton" type="submit"> Add task </button>
    </form>
    )
    
}

export default TodoForm;


