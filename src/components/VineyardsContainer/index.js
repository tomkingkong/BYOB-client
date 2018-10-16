import React, { Component } from 'react';

import { getAllVineyards } from '../../utils/apiCalls';
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
    this.setState({ vineyards });
  }

  render() {
    return (
      <section className="Vineyards">

      </section>
    )
  }
}