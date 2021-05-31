import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {

	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			return;
		}

		props.onAddTodo(enteredText);
	}

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor='todotext'>Todo Text</label>
			<input type='text' id='todotext' ref={todoTextInputRef} />
			<button>Add Item</button>
		</form>
	);
}

export default NewTodo;