import React, { Component } from 'react';
import axios from 'axios';
import CardList from '../CardList/CardList';
import Select from '../Select/Select';
import './Board.scss';

class Board extends Component {
  state = {
    products: [],
  };

  handleChange = (e) => {
    const sortedProduct = [...this.state.products];

    if (e.target.value === 'lowestToHighest') {
      sortedProduct.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (e.target.value === 'highestToLowest') {
      sortedProduct.sort((a, b) => {
        return b.price - a.price;
      });
    }

    this.setState({
      products: sortedProduct,
    });
  };

  async componentDidMount() {
    const url = 'http://localhost:3001/products';
    const res = await axios.get(url);

    this.setState({
      products: res.data,
    });
  }
  render() {
    return (
      <div className="container">
        <Select handleChange={this.handleChange} />
        <CardList state={this.state.products} />
      </div>
    );
  }
}
export default Board;
