import React, { useState, useContext } from 'react';
import UserContext from "./userContext";

const Tour = ({id, image, info, price, name}) => {
const [readmore, setReadmore] = useState(false);
const { removeTour } = useContext(UserContext);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <span>{readmore? info : `${info.substring(0,200)}...`}</span>
        <button onClick={()=> setReadmore(!readmore)}>
          {readmore? 'show less': 'read more'}
        </button>
        <button className='delete-btn'onClick={()=> removeTour(id)}>not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
