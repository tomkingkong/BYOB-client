import React, { Component } from 'react';
import { func, array } from 'prop-types';

import { WineCard } from '../WineCard';
import './Wines.css';

export class WinesContainer extends Component {

  displayWines = () => {
    const { wines, deleteWine } = this.props;
    return wines.map((wine, i) => {
      return <WineCard {...wine} key={i} deleteWine={deleteWine}/>
    });
  }

  render() {
    return (
      <section className="Wines">
        { this.displayWines() }
      </section>
    )
  }
}

WinesContainer.propTypes = {
  wines: array,
  deleteWine: func
}