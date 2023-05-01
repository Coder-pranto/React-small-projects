import React from 'react';
import { useState } from 'react';

export const NewTodo = (props) => {
  const [newTodo, setTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTodo(newTodo);
    setTodo('');
  };

  return (
    <div className="w-25">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Todo"> New Todo : </label>
          <input
            type="text"
            name="Todo"
            id="Todo"
            value={newTodo}
            className="form-control mb-3"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn btn-primary form-control">Add Todo</button>
        </div>
      </form>
    </div>
  );
};
