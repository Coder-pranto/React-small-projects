import React, { useState, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const bookData = [
  {
    id: uuidv4(),
    name: 'Srikanta',
  },
  {
    id: uuidv4(),
    name: 'Pak Sar Jamin Sad Bad',
  },
  {
    id: uuidv4(),
    name: 'Pather Panchali',
  },
  {
    id: uuidv4(),
    name: 'Professor Shonku',
  },
];

export default function Home() {

  const [bookname, setBookname] = useState('');

  const reducer = (state, action) => {
    //action.type, action.payload
    if (action.type === 'Add') {
       const allBooks = [...state.books, action.payload ]
       return{
        ...state,
        books: allBooks,
        isModal: true,
        modaltext: 'New Book is added'

       }
    }
    if (action.type === 'Remove') {
      const filterBooks = state.books.filter((book) => book.id !== action.payload )
      return {
        books: filterBooks,
        isModal: true,
        modaltext: 'Book is removed'
      }

    }
  };

  const initialState = {
    books: bookData,
    isModal: false,
    modaltext: '',
  };

  const [bookState, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newbook = { id: uuidv4(), name: bookname };
    dispatch({ type: 'Add', payload: newbook });
  };

  const removeBook = (book_id) => { 
    dispatch({ type: 'Remove', payload: book_id});
   }

  return (
    <div className="container mt-3 border border-warning p-3">
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"> Book Name 2</label>
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
        {bookState.isModal && <p>{bookState.modaltext}</p>}
      </div>

      <div className="list">
        <h5 className="text-success mb-2">Book List: </h5>
        <ul className="list-group list-group-flush">
          {bookState.books.map((data, idx) => (
            <li key={idx} className="list-group-item">
              {data.name} <button className='btn btn-sm btn-danger' onClick={()=> removeBook(data.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}




/* If you don't use ...state in the return statement, the updated state will only contain the properties that you explicitly specify in the return statement. This means that any other properties that were present in the original state but not updated in the return statement will be lost.

In the case of your code, ...state is used in the return statement to include all the properties of the initial state object that are not updated by the reducer function. This is important because the state object contains multiple properties including books, isModal, and modaltext.

By using ...state in the return statement, you ensure that all other properties of the state object are preserved even if they are not explicitly updated by the reducer function. This is because the ...state syntax creates a new object that includes all the properties of the original state object.
 */