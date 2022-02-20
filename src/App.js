import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const [activities, setActivities] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>David's Todo list</h1>
      </header>

      <Form
        activities={activities}
        setActivities={setActivities}
      />

      <Todolist activities={activities} setActivities={setActivities} />
    </div>
  );
}

export default App;
