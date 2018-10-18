import React, { Component } from 'react';
import { func } from 'prop-types';

import './Search.css';

export class SearchVineyards extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleKeyUp = e => {
    const { search } = this.state;
    const { filterVineyards } = this.props;
    filterVineyards(search)
  }

  render() {
    const { search } = this.state;
    return (
      <section className="SearchForm" onKeyUp={this.handleKeyUp}>
        <input 
          className="Search"
          type="text" 
          name="search"
          placeholder="Search for Vineyard" 
          onChange={this.handleChange} 
          value={search} />
      </section>
    )
  }
}

SearchVineyards.propTypes = {
  filterVineyards: func
}