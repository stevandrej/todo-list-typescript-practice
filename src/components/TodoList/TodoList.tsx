import React from 'react';
import Todo from '../../models/todo';
import TodoItem from '../TodoItem/TodoItem';
import classes from './TodoList.module.css';


const TodoList: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {

	return <ul className={classes.todos}>
		{props.items.map(el =>
			<TodoItem
				key={el.id}
				item={el}
				onRemoveTodo={props.onRemoveTodo.bind(null, el.id)}
			/>
		)}
	</ul>
}

export default TodoList;