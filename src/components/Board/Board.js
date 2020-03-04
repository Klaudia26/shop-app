import React, { Component } from 'react';
import axios from 'axios';
import CardList from '../CardList/CardList';

class Board extends Component {
  state = {
    products: [],
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
      <>
        <CardList state={this.state.products} />
      </>
    );
  }
}
export default Board;
