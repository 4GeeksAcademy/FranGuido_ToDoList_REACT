import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, deleteTodo}) =>{
    return(
        <div className="toDo">
            <p>{task.task}</p>
            <div>
            <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    )

}

export default Todo;