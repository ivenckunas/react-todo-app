import React from 'react'
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

function TodoItem({ todo, removeTodo, completeTodo }) {
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
      <p>{todo.text}  </p>
      <div className='icons-container'>
        <FaRegTimesCircle className='icon' onClick={() => removeTodo(todo.id)} />
        <FaRegCheckCircle onClick={() => completeTodo(todo.id)} />
      </div>

    </div>
  )
}

export default TodoItem