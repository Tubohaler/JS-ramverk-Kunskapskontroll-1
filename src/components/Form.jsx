import React from 'react';
import '../components/css/form.module.css';

function Form() {
  return (
    <form>
      <div className="Form">
        <input type="text" className="todo-input"></input>
        <button>Add task</button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </form>
  )
}

export default Form