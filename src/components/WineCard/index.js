import React from 'react';
import { string, number } from 'prop-types';

import './Wines.css';

export const WineCard = ({name, production_year, color, grape_type, vineyard, score}) => {
  return (
    <article className="wine">
      <p>placeholder img</p>
      <div className="details">
        <h1>{score}</h1>
        <h4>{name}</h4>
        <p>{production_year}</p>
        <p>{color}</p>
        <p>{grape_type}</p>
        <a href="http://google.com">{vineyard}</a>
      </div>
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