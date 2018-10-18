import React, { Component } from 'react';
import { string, number, func } from 'prop-types';

import { getVineyardWines, deleteWine } from '../../utils/apiCalls';
import { WinesContainer } from '../WinesContainer';
import { WineForm } from '../WineForm';
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
        this.setState({ outOfStock: true })
      } else {
        this.setState({ outOfStock: false })
      }
      this.setState({ wines: wines.data || [] });
    }
    this.setState({ showWine: !this.state.showWine });
  }

  addNewWine = (wine) => {
    this.setState({ wines: [wine,...this.state.wines], outOfStock: false });
  }

  deleteWine = (id) => {
    const { wines } = this.state;
    deleteWine(id);
    const winesLeft = wines.filter(wine => wine.id !== id);
    this.setState({ wines: winesLeft });
  }

  render() {
    const { name, date_established, location, id } = this.props;
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
        { showWine && <WineForm vineyard_id={id} addNewWine={this.addNewWine}/> }
        { showWine && outOfStock && <p className="empty">Out of Stock!</p> }
        { showWine && <WinesContainer wines={wines} deleteWine={this.deleteWine} /> }
      </React.Fragment>
    )
  }
}

VineyardCard.propTypes = {
  name: string,
  date_established: number,
  location: string,
  displayWines: func,
  id: number
}