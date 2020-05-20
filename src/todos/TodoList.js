import React from 'react';
import TodoListItem from './TodoListItem.js';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm.js';
import { removeTodo, completeTodo } from './actions';

import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(completeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);