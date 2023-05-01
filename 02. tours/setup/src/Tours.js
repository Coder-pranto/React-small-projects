import React from 'react';
import Tour from './Tour';
const Tours = ({tours}) => {

  return (
    <section>
      <div className="title">
        <h2>Ours Tours</h2>
        <div className='underline'></div>
      </div>
      <div className="#">
        {tours.map((tour)=> <Tour key={tour.id} {...tour}/>)}
      </div>
    </section>
  )
};

export default Tours;


/**

<Tour id={tour.id} name={tour.name} image={tour.image} info={tour.info} price={tour.price} />
instead of above code we can use this code below:
<Tour key={tour.id} {...tour}/>

*/