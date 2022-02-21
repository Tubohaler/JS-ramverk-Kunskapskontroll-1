import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import background from "./assets/background.jpeg";

function App() {
  const [activities, setActivities] = useState([]);

  return (
    <div className="App">
      <section>
        <img
          src={background}
          className="background-img"
          alt="background"
        ></img>
        <div className="color-overlay"></div>
      </section>

      <header>
        <h1 className="title">David's Todo-Shite!</h1>
      </header>

      <Form setActivities={setActivities} />
      <TodoList activities={activities} setActivities={setActivities} />
    </div>
  );
}

export default App;
