import React from 'react'
import { NewTodo } from './newTodo'
import Todos from './Todos';
import { useState } from 'react';


export default function Home() {

  const dummyTodos = ["task 1", "task 2", "task 3"];
  const [todos, setTodos] = useState(dummyTodos);
 

   const handleNewTodo = (newTodos) => {
    setTodos([...todos,newTodos]);
    }

  return (
  <div>
      <NewTodo  onTodo = {handleNewTodo}/>
      <Todos todos = {todos} />
  </div>
  )
}
