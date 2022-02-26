import React from 'react';



export default function TodoItem(props){
    const{ todo, removeToDo} = props
    return(
        <div className="todo-row">
         {props.todo.text}
         <div clssName="iconsContainer">
        
         
        </div>
        </div>
    )
}