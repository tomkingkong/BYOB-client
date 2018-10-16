import React, { Component } from 'react';

import { getAllWines } from '../../utils/apiCalls';
import { WineCard } from '../WineCard';
import './Wines.css';

export class WinesContainer extends Component {
  constructor() {
    super();
    this.state = {
      wines: []
    }
  }

  async componentDidMount() {
    const wines = await getAllWines();
    this.setState({ wines: wines.data });
  }

  displayWines = () => {
    const { wines } = this.state;
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