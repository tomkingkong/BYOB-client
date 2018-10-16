import React from 'react';
import { string, number, bool } from 'prop-types';

import './Vineyards.css';

export const VineyardCard = ({name, date_established, location, harvest}) => {
  return (
    <article className="vineyard">
      <div className="details">
        <h2>{name}</h2>
        <p>{date_established}</p>
        <p>{location}</p>
        <p>{harvest}</p>
        <a href="http://google.com">Wine List</a>
      </div>
    </article>
  )
}

VineyardCard.propTypes = {
  name: string,
  date_established: number,
  location: string,
  harvest: bool
}