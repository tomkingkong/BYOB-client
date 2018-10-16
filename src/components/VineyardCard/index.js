import React, { Component } from 'react';
import { string, number, func } from 'prop-types';

import { WinesContainer } from '../VineyardsContainer';
import './Vineyards.css';

export class VineyardCard extends Component {
  constructor() {
    super();
    this.state = {
      showWine: false
    }
  }

  toggleWines = () => {
    const { displayWines, id } = this.props;
    displayWines(id);
  }

  render() {
    const { name, date_established, location } = this.props;
    return (
      <article className="vineyard">
        <div className="details">
          <h2>{name}</h2>
          <p>{date_established}</p>
          <p>{location}</p>
          <button onClick={this.toggleWines}>Wine List</button>
        </div>
      </article>
    )
  }
}

VineyardCard.propTypes = {
  name: string,
  date_established: number,
  location: string,
  displayWines: func
}