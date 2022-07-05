import React from "react";
import toast, {Toaster} from 'react-hot-toast';
import {v4 as uuid} from 'uuid';

const Form = ({setInputText, inputText, todos, setTodos, setStatus}) => {
    //Notification
    const notify = () => toast('Successfully added!', {duration:2000, icon:'😼'});

    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) =>{
        //The default behavior is to refresh and send an HTTP GET request
        // which is not what we want
        e.preventDefault(); 
        setTodos([
            ...todos, //Whatever is already in the list
            {text: inputText, completed: false, id: uuid(), invisible: false}
        ]);
        //Reset the input form to empty after submission
        setInputText("");
        notify();
    };

    const statusHandler = (e) =>{
        setStatus(e.target.value);
    }

    return(
        <form className="form-container">
            {/*value={inputText} allows input value to be updated real time whenever inputText changes*/}
            <input onChange={inputTextHandler} value={inputText} className="todo-input" type="text" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <Toaster />
            <span className="selector-flex">
                <div className="selector">
                    <select onChange={statusHandler} className="filter" name="todos">
                        <option value="all">All</option >
                        <option value="completed">Completed</option >
                        <option value="incomplete">Incomplete</option >
                    </select>
                </div>
            </span>
        </form>
    );
}

export default Form;