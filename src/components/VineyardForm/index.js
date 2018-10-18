import React, { Component } from 'react';

import { postVineyard } from '../../utils/apiCalls';
import './VineyardForm.css';

const initialState = {
  name: '',
  location: '',
  date_established: '',
  harvest: true
}

export class VineyardForm extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  resetState = (state) => {
    this.setState(state);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { id } = await postVineyard(this.state);
    this.props.addNewVineyard({...this.state, id});
    this.resetState(initialState);
  };

  render() {
    const { name, location, date_established, harvest } = this.state;
    return (
    <form onSubmit={this.handleSubmit} className="VineyardForm">
      <h1>Add New Vineyard</h1>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter Vineyard Name"
        value={name}
        onChange={this.handleChange}
        maxLength="26"
        required
      />
      <input
        type="text"
        name="location"
        id="location"
        placeholder="Enter Vineyard Location"
        value={location}
        onChange={this.handleChange}
        required
      />
      <input
        type="number"
        name="date_established"
        id="date_established"
        placeholder="ex. 2018"
        value={date_established}
        onChange={this.handleChange}
        maxLength="4"
        required
      />
      <input
        type="radio"
        name="harvest"
        id="harvest"
        placeholder="Enter Harvest True or False"
        value={harvest}
        onChange={this.handleChange}
      />
      <button>Submit Vineyard</button>

    </form>
    );
  }
}
