import React,{useState} from 'react';
import './style.scss'

const TodoList = (props) => {
    const {todo,handleDelTodoList} = props
    const {title} = todo

    return (
        <li>
            <p onClick={()=>handleDelTodoList(todo)}> {title}</p>
        </li>
    )
}

export default TodoList