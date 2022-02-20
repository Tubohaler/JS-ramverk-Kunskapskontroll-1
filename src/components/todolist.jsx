import React from 'react';
import './css/todolist.module.css';
import Todo from './Todo';

const Todolist = ( {activities, setActivities}) => {

    return (
    <div className="todo-container">
        <ul className="todo-list">
            {activities.map(todo => (
                <Todo key={todo} text={todo} activities={activities} setActivities={setActivities} id={todo} />
            ))}
        </ul>
    </div>
  )
}

export default Todolist;
