import React from 'react';
import './TodoListItem.css';


const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <div className="todo-item-container">
        <span>{todo.text}</span>
        <div className="buttons-container">
            {todo.isCompleted ?
                null :
                < button
                    className="completed-button"
                    onClick={() => onCompletedPressed(todo.text)}>
                    Mark As Completed
                </button>
            }

            <button
                className="remove-button"
                onClick={() => onRemovePressed(todo.text)}>
                Remove
            </button>
        </div>
    </div >
)

export default TodoListItem;