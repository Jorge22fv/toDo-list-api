import React, { useState, useEffect } from "react";
import { Todo } from "./todo.jsx";

const Home = () => {
	const [todos, setTodos] = useState([]);

	const [newTodo, setNewTodo] = useState();

	const handleClick = (newTodo) => {
		if (newTodo.label === "") return;
		setTodos([...todos, newTodo]);
		var requestOptions = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([...todos, newTodo]),
			redirect: "follow",
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/jorge22fv",
			requestOptions
		)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	};

	//const result = words.filter(word => word.length > 6);
	const eliminate = (index) => {
		const filteredTodos = todos.filter((newString, i) => i !== index);
		setTodos(filteredTodos);
	};

	useEffect(() => {
		var requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/jorge22fv",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setTodos(result);
			})
			.catch((error) => console.log("error", error));
	}, []);

	return (
		<div className="to-do text-center border border-danger">
			<div>
				<h1 id="title"> To-Do list</h1>

				<input
					className="rounded-start"
					placeholder="Add a new homework"
					onChange={(e) =>
						setNewTodo({ label: e.target.value, done: false })
					}
				/>

				<button
					className="rounded-end"
					onClick={() => handleClick(newTodo)}>
					<i className="fas fa-check"></i>
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
