import React, { useDeferredValue } from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

// initializing uuid (id generator for todo tasks)
uuidv4();

//create your first component
const Home = () => {

	const [todoList, setTodoList] = useState([])
	const addTodo = todos => {
		setTodoList([...todoList, { id: uuidv4(), task: todos, completed: false, isEditing: false }]) // sets id for each task
		console.log(todos)
	}

	// keep all in the list that are different from current id
	const deleteTodo = id => {
		setTodoList(todoList.filter(todos => todos.id !== id))
	}

	// Delete all tasks at once
	const deleteAll = () => {
		setTodoList([]);
	}


	// Counter Tasks
	function todoCounter() {
		if (todoList.length === 0) return "No pending tasks. Add a new one!";
		else return "You have " + todoList.length + " pending tasks.";
	  }
	

	
	// API: USING FAKE TODO LIST API

	// Get API (fetch)

	const todoApi = "https://fake-todo-list-52f9a4ed80ce.herokuapp.com/todos/user/francinieguido"
	
	useEffect (() =>{
		fetch(todoApi).then(result => result.json())
		.then(data => {setTodoList(data)}).catch(err => err)
	}, []);
	

	//PUT API (add Todos to the list)
	
	
	let newTodoList = [
		{ label: "Answer email", done: true },
		{ label: "Take cat to the vet", done: true },
		{ label: "Go to yoga class", done: true },
		{ label: "Go grocery shopping", done: false},
		{ label: "Call friend", done: false},
	]
	let options = {
		method: "PUT",
		body: JSON.stringify(newTodoList),
		headers: {"Content-Type": "application/json"}
	}

	fetch(todoApi, options).then(response => response.json()).then(data => data).catch(err => err)

	

	return (
		<div className="todoWrapper container mt-5 ">
			<div className="row ">
				<div className="col">
					<h1 className="header">TO DO LIST</h1>
					<p className="text-center text-secondary">{todoCounter()}</p>
					<TodoForm addTodo={addTodo} />
					{todoList.map((todos, index) => (
						<Todo task={todos} key={index} deleteTodo={deleteTodo} />
					))}
					<div className="text-center">
					<button className="btn btn-danger" onClick={() =>{deleteAll();}} >Delete All</button>
					</div>
					
				</div>
				
			</div>
		</div>
	);
};

export default Home;
