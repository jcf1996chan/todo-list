import React from "react";

const Todo = ({text, todo, todos, setTodos}) =>{
    //Events
    const deleteHandler = () =>{
        //Set the todo list as all todo items except for
        //for the todo item that is clicked on (todo.id)
        setTodos(todos.filter((el) => el.id !== todo.id))
    };

    const completeHandler = () =>{
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                };
            };
            return item;
        }))
    };

    return(
        <div className="todo-container">
            <li className={`todo-item ${todo.completed ? "completed":""}`}>{text}</li>
            {/*fas stands for Font Awesome Solid, which is a part of the React Font Awesome package*/}
            <button onClick={completeHandler} className="complete-btn">
                <i className = "fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className = "fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;