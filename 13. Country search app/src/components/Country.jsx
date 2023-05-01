import React from 'react';

export const Country = ({ country, onRemove}) => {
  const { name, flags, capital, population, area } = country;

  const handleRemoveCountry = (name) => {
    onRemove(name);
  };
  return (
    <article className="w-50 mx-auto col-4 card-deck">
      <div className="card text-center mb-2 bg-secondary ">
        <img className="card-img-top" src={flags.png} alt={name.common} />

        <div className="card-body">
          <h3 className="card-title">Name: {name.common}</h3>
          <h4>Official Name: {name.official}</h4>
          <div className="card-text">
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area:{area}</h3>
            <button
              type="button"
              className="btn btn-danger btn-lg btn-block mt-5"
              onClick={() => handleRemoveCountry(name.common)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
