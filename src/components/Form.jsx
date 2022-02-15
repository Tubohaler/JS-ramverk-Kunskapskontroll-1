import React from "react";
import "../components/css/form.module.css";

function Form({ inputText, setInputText, activities, setActivites, }) {
  const inputTextHandler = (e) => {
  const value = e.target.value;

    console.log(value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setActivites([
      ...activities,
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
  }

  return (
    <form>
      <input onClick={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>

      <div className="todo-container">
        <ul className="todo-list"></ul>
      </div>
    </form>
  );
}

export default Form;
