import React, { useEffect, useState } from 'react'

export const Search = ({onSearch}) => {

    const [searchText, setSearchText] = useState("");
    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
    onSearch(searchText);
    }, [searchText])
    
  return (
    <div>
      <div class="form-group">
        <input type="text" className=' w-50 p-2 form-control mx-auto' placeholder='Search country'value={searchText}
        onChange={handleChange} />
      </div>
    </div>
  )
}
