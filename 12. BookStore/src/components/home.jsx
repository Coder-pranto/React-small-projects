import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const bookData = [
  {
    id: uuidv4(),
    name: "Srikanta"
  },
  {
    id: uuidv4(),
    name: "Pak Sar Jamin Sad Bad"
  },
  {
    id: uuidv4(),
    name: "Pather Panchali"
  },
  {
    id: uuidv4(),
    name: "Professor Shonku"
  },

 ]

export default function Home() {

  const [books, setBooks] = useState(bookData);
  const [bookname, setBookname] = useState("");
  const [modaltext, setModaltext] = useState("");
  const [isModal, setIsModal] = useState(false);

 const handleSubmit = (e) => {
  e.preventDefault();

  const newbook = {id : uuidv4(), name: bookname}
  setBooks((prevState)=> [...prevState,newbook]);
  setIsModal(true);
  setModaltext("Book is added");
 }

  return (
    <div className="container mt-3 border border-warning p-3">
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"> Book Name</label>
          <input
            type="text"
            value={bookname}
            id="name"
            className="form-control "
            onChange={(e) => setBookname(e.target.value)}
          />
          <button className="btn btn-sm btn-primary mt-1">Submit</button>
        </div>
      </form>
      <div className="modaltext">
        {
          isModal && <p>{modaltext}</p>
        }
   
      </div>

      <div className="list"> <h5 className='text-success mb-2'>Book List: </h5>
        <ul className="list-group list-group-flush">
          {
            books.map((data)=>  <li className="list-group-item">{data.name}</li>)
          }
        </ul>
      </div>
    </div>
  );
}



/* he spread operator ... is used in the code [...prevState,newbook] to create a new array with all the elements of the previous state array prevState and add the new book object newbook at the end of it.

In React, state updates should be immutable, which means that you should not modify the state directly. Instead, you should create a new object or array that represents the updated state, and then update the state with this new object or array.

In this case, the spread operator is used to create a new array with the previous books in the state and add the new book object to the end of it. This creates a new array without modifying the previous state, allowing React to detect the change and re-render the component with the updated state. */