import React from "react";
import './css/todo.module.css';

const Todo = ( {activities, setActivities, todo, text, id} ) => {

    const deleteHandler = (text) => {
        const newActivities = [...activities].filter(
            (activities) => activities.id !== id);
            setActivities(newActivities);
            console.log(newActivities);
    }

    const completeHandler({activities})
      const currentActivity = activities.find((activities) => {
          return activities.id === activities.id;
      })

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
