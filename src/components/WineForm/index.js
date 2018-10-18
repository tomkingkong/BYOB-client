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
    const { vineyard_id, addNewWine } = this.props;
    const { id } = await postWine(vineyard_id, {...this.state, vineyard_id});
    addNewWine({...this.state, id});
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
          placeholder="Wine Name"
          value={name}
          onChange={this.handleChange}
          maxLength="26"
          required
        />
        <input
          type="text"
          name="grape_type"
          id="grape_type"
          placeholder="Grape Type"
          value={grape_type}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="color"
          id="color"
          placeholder="Wine Color"
          value={color}
          onChange={this.handleChange}
          maxLength="5"
        />
        <input
          type="number"
          name="production_year"
          id="production_id"
          placeholder="Year"
          value={production_year}
          onChange={this.handleChange}
          maxLength="4"
        />
        <input
          type="number"
          name="score"
          id="score"
          placeholder="Score"
          value={score}
          onChange={this.handleChange}
          maxLength="3"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price"
          value={price}
          onChange={this.handleChange}
        />
        <button>+</button>
      </form>
    );
  }
}
