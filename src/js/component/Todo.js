import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { icon } from "@fortawesome/fontawesome-svg-core";

const Todo = ({task, deleteTodo}) =>{

    

    return(
        <div className="toDo">
            <p>{task.task}</p>
            <div>
            <FontAwesomeIcon className="icon" icon={faTrashCan} onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    )

}

export default Todo;