import React from 'react';
import './css/todolist.module.css';
import Todo from './Todo';

const Todolist = ({activities}) => {

    return (
    <div className="todo-container">
        <ul className="todo-list">
            {activities.map(todo => (
                <Todo text={todo.text} />
            ))}
        </ul>
    </div>
  )
}

export default Todolist;
