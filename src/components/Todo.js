import React from "react";
import {Draggable} from 'react-beautiful-dnd';

const Todo = ({text, todo, todos, setTodos, index}) =>{
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
        console.log(todos);
    };

    return(
        <Draggable 
            draggableId={todo.id}
            index={index}
            key={todo.id}
        >
            {(provided) => (
                <div className="todo-container"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <li className={`todo-item ${todo.completed ? "completed":""}`}>{text}</li>
                    {/*fas stands for Font Awesome Solid, which is a part of the React Font Awesome package*/}
                    <button onClick={completeHandler} className="complete-btn">
                        <i className = "fas fa-check"></i>
                    </button>
                    <button onClick={deleteHandler} className="trash-btn">
                        <i className = "fas fa-trash"></i>
                    </button>
                </div>
            )}
        </Draggable>
    );
};

export default Todo;