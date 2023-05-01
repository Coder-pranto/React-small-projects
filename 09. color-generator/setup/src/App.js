import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const defaultColor = new Values('#F2C101').all(8);

  const [color, setColor] = useState('');
  const [error, setError] = useState(false)
  const [list, setList] = useState(defaultColor);


  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      let colors = new Values(color).all(8);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }


  return (
    <>
    <section className='container'>
    <h3>color generator</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" value ={color} onChange={(e)=> setColor(e.target.value)} className={`${error?'errorBorder': null}`} placeholder="#f15088"/>
      <button className='btn' type='submit'>Submit</button>
    </form>
    </section>
    <section className='colors'>
      {list.map((color, index)=>{
        return (
          <SingleColor key={index} {...color} index={index}  hexColor={color.hex}/>
        )
      })}
  
    </section>
    </>
  )
}

export default App

