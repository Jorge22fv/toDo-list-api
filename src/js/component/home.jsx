import React, { useState } from "react";
import { Todo } from "./todo.jsx";

const Home = () => {
	const [todos, setTodos] = useState([]);

	const [newTodo, setNewTodo] = useState("");

	const handleClick = (newTodo) => {
		if (newTodo === "") return;
		setTodos([...todos, newTodo]);
	};

	//const result = words.filter(word => word.length > 6);
	const eliminate = (index) => {
		const filteredTodos = todos.filter((newString, i) => i !== index);
		setTodos(filteredTodos);
	};

	return (
		<div className="to-do text-center border border-danger">
			<div>
				<h1 id="title"> To-Do list</h1>

				<input
					className="rounded-start"
					placeholder="Add a new homework"
					onChange={(e) => setNewTodo(e.target.value)}
				/>

				<button
					className="rounded-end"
					onClick={() => handleClick(newTodo)}>
					<i class="fas fa-check"></i>
				</button>

				{todos.map((todo, index) => {
					return (
						<Todo
							key={index}
							todo={todo}
							eliminate={eliminate}
							index={index}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
