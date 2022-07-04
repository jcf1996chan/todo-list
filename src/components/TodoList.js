import React from "react";
import Todo from "./Todo";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';


const TodoList = ({todos, setTodos, filteredTodos}) =>{
    const handleOnDragEnd = (result) =>{
        if(!result.destination) return;
    
        const items = Array.from(todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setTodos(items);
    }

    return(
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="todo">
                {(provided) => (
                    <div className="todo-container"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <ul className="todo-list">
                            {filteredTodos.map((todo,index) => (
                                <Todo 
                                    text={todo.text} 
                                    todo={todo} 
                                    todos={todos} 
                                    setTodos={setTodos}
                                    index={index}
                                />
                            ))}
                            {provided.placeholder}
                        </ul>
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TodoList;