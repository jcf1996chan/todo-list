import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //***Run whenever todos or status change
  useEffect(()=> {
    //If we are only using filterHandler() in one context we can just put this in useEffect()
    filterHandler();
    saveLocalTodos();
  },[todos,status]);

  //Functions used in useEffect
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="App">
      <header>
        <h1>🌸🌮✨ TODO LIST ✨🥪🌺</h1>
      </header>
      <body>
        <Form 
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos}  
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList 
          todos={todos} 
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </body>
    </div>
  );
}

export default App;
