import React, { Component } from 'react';
import { string, number, func } from 'prop-types';

import { getVineyardWines, deleteWine } from '../../utils/apiCalls';
import { WinesContainer } from '../WinesContainer';
import './Vineyards.css';

export class VineyardCard extends Component {
  constructor() {
    super();
    this.state = {
      showWine: false,
      outOfStock: false,
      wines: []
    }
  }

  toggleWines = async () => {
    const { id } = this.props;
    if (!this.state.wines.length) {
      let wines = await getVineyardWines(id);
      if (wines.status === 'failed') {
        return this.setState({ outOfStock: true })
      } else {
        this.setState({ outOfStock: false })
      }
      this.setState({ wines: wines.data });
    }
    this.setState({ showWine: !this.state.showWine });
  }

  showOutOfStock = () => {
    setTimeout(() => {
      this.setState({ outOfStock: false});
    }, 4000)
    return <p className="empty">Out of Stock!</p>
  }

  deleteWine = (id) => {
    const { wines } = this.state;
    deleteWine(id);
    const winesLeft = wines.filter(wine => wine.id !== id);
    this.setState({ wines: winesLeft });
  }

  render() {
    const { name, date_established, location } = this.props;
    const { showWine, outOfStock, wines } = this.state;
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
        { outOfStock && this.showOutOfStock() }
        { showWine && <WinesContainer wines={wines} deleteWine={this.deleteWine} /> }
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