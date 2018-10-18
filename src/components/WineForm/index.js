import React, { Component } from 'react';

import { postWine } from '../../utils/apiCalls';
import './WineForm.css';

const initialState = {
  name: '',
  grape_type: '',
  color: '',
  production_year: '',
  score: '',
  price: ''
};

export class WineForm extends Component {
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
    const { vineyard_id } = this.props;
    const { id } = await postWine(vineyard_id, {...this.state, vineyard_id});

    this.resetState(initialState);
  };

  render() {
    const { name, grape_type, color, production_year, score, price } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="WineForm">
        <h1>Add New Wine</h1>
        <input
          type="text"
          name="name"
          id="wine_name"
          placeholder="Enter Wine Name"
          value={name}
          onChange={this.handleChange}
          maxLength="26"
          required
        />
        <input
          type="text"
          name="grape_type"
          id="grape_type"
          placeholder="Enter Grape Type"
          value={grape_type}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          name="color"
          id="color"
          placeholder="Enter Wine Color"
          value={color}
          onChange={this.handleChange}
          maxLength="5"
          required
        />
        <input
          type="number"
          name="production_year"
          id="production_id"
          placeholder="Enter Year Wine Produced"
          value={production_year}
          onChange={this.handleChange}
          maxLength="4"
          required
        />
        <input
          type="number"
          name="score"
          id="score"
          placeholder="Enter Wine Score"
          value={score}
          onChange={this.handleChange}
          maxLength="3"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Enter Wine Price"
          value={price}
          onChange={this.handleChange}
        />
        <button>Submit Wine</button>
      </form>
    );
  }
}
