import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
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
      <Todolist activities={activities} setActivities={setActivities} />
    </div>
  );
}

export default App;
