import React, { useState } from 'react'

export default function Todo({data}) {
  const [toggle, setToggle] = useState(false);

const handleToggle= () => {
  setToggle(!toggle);
}

  return (
    <div className='container mb-1'>
       <div className="card">
        <div className="card-body border border-warning">
          <span><h4 className="card-title">Task no : {data.id}</h4></span> 
          <button className='btn btn-warning btn-sm' onClick={handleToggle}>{toggle ?  '-': '+' } </button>
          {
            toggle && <p className="card-text text-justify p-2 mt-2">{data.desc}</p>
          }
          
        </div>
       </div>

    </div>
  )
}
