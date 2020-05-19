import React from 'react';
import './TodoListItem.css';


const TodoListItem = ({ todo }) => (
    <div className="todo-item-container">
        <span>{todo.text}</span>
        <div className="buttons-container">
            <button className="completed-button">Mark As Completed</button>
            <button className="remove-button">Remove</button>
        </div>
    </div>
)

export default TodoListItem;