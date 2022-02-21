import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import bakgrund from "./assets/bakgrund.jpeg";

function App() {
  const [activities, setActivities] = useState([]);

  return (
    <div className="App">
      <section>
        <img
          src={bakgrund}
          className="background-img"
          alt="bakgrundsbild"
        ></img>
        <div className="color-overlay"></div>
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
