import './components/css/App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App">
      <header>
        <h1>David's Todo list</h1>
      </header>

      <Form />

      <Todolist />

    </div>
  );
}

export default App;
