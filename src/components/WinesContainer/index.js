import React, { Component } from 'react';

import { WineCard } from '../WineCard';
import './Wines.css';

export class WinesContainer extends Component {
  displayWines = () => {
    const { wines } = this.props;
    return wines.map((wine, i) => <WineCard {...wine} key={i}/>);
  }

  render() {
    return (
      <section className="Wines">
        { this.displayWines() }
      </section>
    )
  }
}