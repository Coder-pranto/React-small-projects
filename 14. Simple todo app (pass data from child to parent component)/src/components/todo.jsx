import React from 'react'

export default function Todo(props) {
const item = props.data
  return (
    <div>
       <div className="card">
        <div className="card-body">
          <h4 className="card-title">{item}</h4>
          <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, fugiat!</p>
        </div>
       </div>

    </div>
  )
}
