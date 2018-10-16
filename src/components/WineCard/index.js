import React from 'react';
import { string, number } from 'prop-types';

import './Wines.css';

export const WineCard = ({ 
  name, 
  production_year, 
  color, 
  grape_type, 
  score,
  id, 
  deleteWine }) => {
  return (
    <article className="wine">
      <svg className="wine-svg" viewBox="0 0 333 400" version="1.1" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px">
        <path d="M192.2,260.2c0,0-0.3-72.7-1.4-86.1c-1-13.4-18.2-30.9-19.2-34c-1-3.1-3.4-47.7-2.1-48c1.4-0.3,1.4-2.4,1.4-5.1&#10;&#9;c0-2.7-1.7-4.1-1.7-4.1l-0.1-9.9l-12.9,0l0,0l-10.6,0v10.3c0,0-1.7,1.4-1.7,4.1c0,2.7,0,4.8,1.4,5.1c1.4,0.3-1,45-2.1,48&#10;&#9;c-1,3.1-18.2,20.6-19.2,34c-1,13.4-1.4,86.1-1.4,86.1l2.4,81.3c0,0-2.7,9.3-1.7,13.7c1,4.5,4.5,6.9,7.2,7.2&#10;&#9;c2.7,0.3,26.8-0.3,26.8-0.3l0,0c0,0,24.4,0.3,27.1,0c2.7-0.3,6.2-2.7,7.2-7.2c1-4.5-1.7-13.7-1.7-13.7L192.2,260.2z" />
      </svg>
      <h1 className="score">{score}</h1>
      <div className="details">
        <button className="favorite" />
        <h4>{name}</h4><p>{production_year}</p>
        <p>{grape_type}</p>
        <p>{color}</p>
      </div>
      <button className="delete" onClick={() => deleteWine(id)} />
    </article>
  )
}

WineCard.propTypes = {
  name: string,
  production_year: number,
  color: string,
  grape_type: string,
  score: number,
  vineyard: string
}