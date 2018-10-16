import React, { Component } from 'react';

export class AddVineyardForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      location: '',
      date_established: '',
      harvest: true
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.submitVineyardForm(this.state);
  };

  submitVineyardForm = async vineyardObject => {
    const url = 'http://localhost:3010/api/v1/vineyards';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(vineyardObject),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="" id="" />
        <input type="text" />
        <input type="text" />
        <button>Submit Vineyard</button>
      </form>
    );
  }
}
