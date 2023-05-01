import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Country } from './Country';

export const Countries = ({ countries, onRemove }) => {

  return (
 <>
     <section className='row'>
     {countries.map((country) =>{
      const countreyNew = {country, id: uuidv4()};
      return <Country {...countreyNew} key = {countreyNew.id} onRemove= {onRemove}/>
     })}
    
    </section>
 </>
  );

  };