import React, { useEffect, useState } from 'react';
import { Countries } from './Countries';
import { Search } from './Search';

export default function Home() {
  const url = 'https://restcountries.com/v3.1/all';
  const [data, setData] = useState([]);
  const [filterdata, setFilterdata] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error('fetching is not successful');
        }
        const data = await response.json();
        setData(data);
        setFilterdata(data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  const loadingMessage = <p>Todo is loading...</p>;
  const errorMessage = <p>{error}</p>;

  const handleRemove = (name) => {
    const fillter = data.filter((x) => x.name.common !== name);
    setFilterdata(fillter);
  };

  const handleSearch = (txt) => {
    let value = txt.toLowerCase();
    const newCountries = data.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });

    setFilterdata(newCountries);
  };

  return (
    <>
      <h1 className="text-capitalize text-center p-3 text-primary">
        Country App
      </h1>

      <Search onSearch={handleSearch} />
      <span className="text-danger">{error && errorMessage}</span>
      <span className="text-primary">{isLoading && loadingMessage}</span>
      {filterdata && (
        <Countries countries={filterdata} onRemove={handleRemove} />
      )}
    </>
  );
}
