import React, { useState } from 'react';
import './css/form.module.css';

function Form({ activities, setActivities }) {
  const [inputText, setInputText] = useState("");
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setActivities((prev) => {
      return [...prev, inputText];
    });
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="form-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="todo-container">
        <ul className="todo-list"></ul>
      </div>
    </form>
  );
}

export default Form;
