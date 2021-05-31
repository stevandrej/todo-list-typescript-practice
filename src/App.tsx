import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import NewTodo from './components/NewTodo/NewTodo';
import Todo from './models/todo';

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todoText: string) => {
		const newTodo = new Todo(todoText);

		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo)
		});
	};

	const removeTodoHandler = (id: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter(todo => todo.id !== id);
		});
	};

	return (
		<div className="App">
			<NewTodo onAddTodo={addTodoHandler} />
			<TodoList items={todos} onRemoveTodo={removeTodoHandler}/>
		</div>
	);
}

export default App;
