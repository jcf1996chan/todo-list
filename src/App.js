import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [status, setStatus] = useState("all");

  //***Run whenever todos or status change
  useEffect(()=> {
    saveLocalTodos();
  },[todos]);

  useEffect(()=> {
    filterHandler();
  },[status])

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setTodos(todos.map(item => {
            if(item.completed !== true){
                return{
                    ...item, invisible: true
                };
            }
            return {...item, invisible: false};
        }))
        break;

      case 'incomplete':
        setTodos(todos.map(item => {
            if(item.completed !== false){
                return{
                    ...item, invisible: true
                };
            }
            return {...item, invisible: false};
        }))
        break;

      default:
        setTodos(todos.map(item => {
            return{
                ...item, invisible: false
            };
        }))
        break;
    }
  }

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
        />
      </body>
    </div>
  );
}

export default App;
