import React, { Component } from 'react';

export class AddWineForm extends Component {
  constructor() {
    super();
    this.state = {
      wines: [],
      wine_name: '',
      grape_type: '',
      color: '',
      production_year: '',
      score: '',
      price: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSumbit = e => {
    e.preventDefault();
    this.submitWineForm(this.state);
    this.setState({
      wine_name: '',
      grape_type: '',
      color: '',
      production_year: '',
      score: '',
      price: ''
    });
  };

  submitWineForm = async wineObject => {
    const url = 'http://localhost:3010/api/v1/vineyards';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(wineObject),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    this.setState({
      wines: [...this.state.wines, data]
    });
  };

  render() {
    return (
      <div>
        <h1>Add New Wine</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="wine_name"
            id="wine_name"
            placeholder="Enter Wine Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="grape_type"
            id="grape_type"
            placeholder="Enter Grape Type"
            value={this.state.grape_type}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="color"
            id="color"
            placeholder="Enter Wine Color"
            value={this.state.color}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
