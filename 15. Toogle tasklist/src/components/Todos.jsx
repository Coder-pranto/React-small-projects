import React from 'react'
import Todo from './todo'

function Todos({todos}) {
  return (
    <div>
      {
        todos.map((item)=> <Todo data={item}/>)
      }
      
    </div>
  )
}

export default Todos