import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const [activities, setActivities] = useState([]);

  return (
    <div className="App">
      <section>
        <div className="overlay"></div>
        <img className="background-img" alt=""></img>
      </section>

      <header>
        <h1 className="title">David's Todo-Shite!</h1>
      </header>

      <Form activities={activities} setActivities={setActivities} />
      <Todolist activities={activities} setActivities={setActivities} />
    </div>
  );
}

export default App;
