import React, { Component } from 'react';

import { getAllWines } from '../../utils/apiCalls';
import './Wines.css';

export class Wines extends Component {
  constructor() {
    super();
    this.state = {
      wines: []
    }
  }

  async componentDidMount() {
    const wines = await getAllWines();
    this.setState({ wines });
  }

  render() {
    return (
      <section className="Wines">

      </section>
    )
  }
}