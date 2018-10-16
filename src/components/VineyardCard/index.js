import React, { Component } from 'react';
import { string, number, func } from 'prop-types';

import { getVineyardWines } from '../../utils/apiCalls';
import { WinesContainer } from '../WinesContainer';
import './Vineyards.css';

export class VineyardCard extends Component {
  constructor() {
    super();
    this.state = {
      showWine: false,
      wines: []
    }
  }

  toggleWines = async () => {
    const { id } = this.props;
    if (!this.state.wines.length) {
      let wines = await getVineyardWines(id);
      this.setState({ wines: wines.data });
    }
    this.setState({ showWine: !this.state.showWine });
  }

  render() {
    const { name, date_established, location } = this.props;
    const { showWine, wines } = this.state;
    return (
      <React.Fragment>
        <article className="vineyard">
          <div className="details">
            <h2>{name}</h2>
            <p>{date_established}</p>
            <p>{location}</p>
            <button 
              className="view-wines" 
              onClick={this.toggleWines}>
              View Wine List
            </button>
          </div>
        </article>
        { showWine && <WinesContainer wines={wines} /> }
      </React.Fragment>
    )
  }
}

VineyardCard.propTypes = {
  name: string,
  date_established: number,
  location: string,
  displayWines: func
}