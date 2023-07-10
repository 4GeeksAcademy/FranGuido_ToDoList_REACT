import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task}) =>{
    return(
        <div className="toDo">
            <p>{task.task}</p>
            <div>
            <FontAwesomeIcon icon={faTrashCan} />
            </div>
        </div>
    )

}

export default Todo;