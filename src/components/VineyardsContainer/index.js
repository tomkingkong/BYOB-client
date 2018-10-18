import React, { Component } from 'react';

import { getAllVineyards } from '../../utils/apiCalls';
import { VineyardCard } from '../VineyardCard';
import { VineyardForm } from '../VineyardForm';
import { SearchVineyards } from '../SearchVineyards';
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

  addNewVineyard = vineyard => {
    this.setState({ vineyards: [vineyard, ...this.state.vineyards] });
  }

  filterVineyards = filter => {
    const { vineyards } = this.state;
    const filteredVineyards = vineyards.map(v => {
      if (!v.name.toLowerCase().includes(filter.toLowerCase())) {
        v.hide = true;
      } else {
        v.hide = false;
      }
      return v;
    });
    this.setState({ vineyards: filteredVineyards });
  }

  render() {
    return (
      <section className="Vineyards">
        <SearchVineyards filterVineyards={this.filterVineyards}/>
        { this.displayVineyards() }
        <VineyardForm addNewVineyard={this.addNewVineyard} />
      </section>
    )
  }
}