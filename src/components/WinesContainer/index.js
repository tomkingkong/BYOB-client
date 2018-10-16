import React, { Component } from 'react';

import { WineCard } from '../WineCard';
import './Wines.css';

export class WinesContainer extends Component {

  displayWines = () => {
    return this.props.wines.map((wine, i) => {
      return <WineCard {...wine} key={i} deleteWine={this.props.deleteWine}/>
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