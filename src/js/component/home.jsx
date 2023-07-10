import React, { useDeferredValue } from "react";
import { useState } from "react";
import {v4 as uuidv4} from  "uuid";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

// initializing uuid (id generator for todo tasks)
uuidv4();

//create your first component
const Home = () => {

	const [todoList, setTodoList] = useState([])
	const addTodo = todos =>{
		setTodoList([...todoList, {id:uuidv4(), task: todos, completed:false, isEditing: false}])
		console.log(todos)
	}
	return (
		<div className="todoWrapper container mt-5 ">
			<div className="row ">
				<div className="col">
					<TodoForm addTodo={addTodo}/>
					{todoList.map((todos, index) => (
						<Todo task={todos} key ={index}/>
					))}
				</div>
			
			</div>
			
			
		</div>
	);
};

export default Home;
