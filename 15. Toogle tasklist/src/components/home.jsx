import React from 'react'
import data from './data'
import Todos from './Todos';
import { useState } from 'react';


export default function Home() {

const [todos, setTodos] = useState(data);


  return (
  <div>
    <h1 className='text-capitalize text-center p-3 text-primary'>Your Tasklist</h1>
      <Todos todos = {todos}/>
  </div>
  )
}
