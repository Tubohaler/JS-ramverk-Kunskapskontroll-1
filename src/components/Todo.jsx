import React, { useState } from 'react';
import './css/todo.module.css';

const Todo = ({ activities, setActivities, text, id }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const deleteHandler = () => {
    const newActivities = [...activities].filter((activity) => activity !== id);
    console.log(newActivities, activities);
    setActivities(newActivities);
    console.log(newActivities);
  };

  const completeHandler = () => {
    setIsCompleted(!isCompleted);
    console.log(isCompleted);
  };

  return (
    <div className="todo">
      <li className="todo-item">
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
        <span
          className={text}
          style={
            isCompleted
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {text}
        </span>
      </li>
    </div>
  );
};

export default Todo;
