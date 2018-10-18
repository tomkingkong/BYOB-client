import React, { Component } from 'react';

import { getAllVineyards } from '../../utils/apiCalls';
import { VineyardCard } from '../VineyardCard';
import { VineyardForm } from '../VineyardForm';
import './Vineyards.css';

export class VineyardsContainer extends Component {
  constructor() {
    super();
    this.state = {
      vineyards: []
    }
  }

  async componentDidMount() {
    const vineyards = await getAllVineyards();
    this.setState({ vineyards: vineyards.data });
  }

  displayVineyards = () => {
    const { vineyards } = this.state;
    return vineyards.map((v, i) => <VineyardCard {...v} key={i} />);
  }  

  addNewVineyard = (vineyard) => {
    this.setState({ vineyards: [vineyard, ...this.state.vineyards] })
  }

  render() {
    return (
      <section className="Vineyards">
        <VineyardForm addNewVineyard={this.addNewVineyard} />
        { this.displayVineyards() }
      </section>
    )
  }
}