import React, { useState } from "react";
import { Todo } from "./todo.jsx";

const Home = () => {
	const [todos, setTodos] = useState([
		"Finish this code",
		"Walk the dog",
		"Do exercises",
	]);

	const [newTodo, setNewTodo] = useState("");

	const handleClick = (newTodo) => {
		if (newTodo === "") return;
		setTodos([...todos, newTodo]);
	};

	const eliminate = () => {};

	return (
		<div className="bg-secondary bg-opacity-25 text-center">
			<h1>To-Do list</h1>

			<input
				className="rounded"
				placeholder="Add a new homework"
				onChange={(e) => setNewTodo(e.target.value)}
			/>

			<button className="rounded" onClick={() => handleClick(newTodo)}>
				Add to the list
			</button>

			{todos.map((todo, index) => {
				return <Todo key={index} todo={todo} />;
			})}
		</div>
	);
};

export default Home;
