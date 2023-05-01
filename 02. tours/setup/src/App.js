import React, { useState, useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours'
import UserContext from "./userContext";
const url = 'https://course-api.com/react-tours-project'

function App() {
const [loading, setLoading] = useState(true);
const [tours, setTours] = useState([]);

const removeTour = (id)=>{
  const newTours = tours.filter(tour => tour.id !== id)
  setTours(newTours);
}

const fetchTours = async()=>{
  setLoading(true);//for double check
  try {
    const tours = await (await fetch(url)).json();
    setLoading(false);
    setTours(tours);
    console.log(tours);
  } catch (error) {
    setLoading(false)
    console.log(error);
  }
}

useEffect(() => {
  fetchTours();
}, [])


return (
  <UserContext.Provider value={{ removeTour }}>
  {loading && <main><Loading/></main>}

  {(tours.length === 0 && loading === false) && <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn' onClick={fetchTours}>
          refresh
        </button>
      </div>
    </main>}

     {tours.length > 0 && <main>
      <Tours tours = {tours}/>
    </main>}

  </UserContext.Provider>
)

}

export default App
