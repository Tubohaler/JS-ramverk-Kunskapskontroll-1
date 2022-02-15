import React, { useState } from "react";
import "./components/css/App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [activities, setActivities] = useState([
    {
      title: "Do it!",
    },
  ]);



  return (
    <div className="App">
      <header>
        <h1>David's Todo list</h1>
      </header>

      <Form
        activities={activities}
        setActivities={setActivities}
        inputText={inputText}
        setInputText={setInputText}
      />

      <Todolist />
    </div>
  );
}

export default App;
