import './App.css';
import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";
import { Stack, Container } from '@mui/material';
function App() {
	const [todos, setTodos] = useLocalStorage("todos", []);
	const [filter, setFilter] = useState("all");

	useEffect(() => {
		if (todos.length === 0) {
			fetch("https://dummyjson.com/todos").then((res) => res.json()).then((data) => {
				if (data.todos) {
					setTodos(data.todos.map(t => ({ id: t.id, task: t.todo, completed: t.completed })));
				}
			});
		} 
	}, []);

	const addTodo = (task) => {
		setTodos([...todos, { id: Date.now(), task, completed: false }]);
	};

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const filteredTodos = todos.filter((todo) => {
		if (filter === "completed") return todo.completed;
		if (filter === "pending") return !todo.completed;
		return true;
	});

	return (
		<div className="App">
			<h1>Todo List</h1>
			<Container maxWidth="ls">

				<Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4, mb: 4 }}>
					<Filter setFilter={setFilter} />
					<AddTodo addTodo={addTodo} />
				</Stack>

				<TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
			</Container>

		</div>
	);
}

export default App;
