import React from 'react'
import Todo from './todo'

function Todos(props) {
  return (
    <div>
      {
        props.todos.map((item)=> <Todo data={item}/>)
      }
      
    </div>
  )
}

export default Todos