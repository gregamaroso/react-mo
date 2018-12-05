import React, { Component } from 'react';
import styled from 'styled-components'

import { product } from '../../data/product.js';

const ProductFullWrapper = styled.div`
  max-width: 1000px;
  margin 20px auto;
  padding: 20px;
`;

const QuantityWrapper = styled.div`
  margin 20px 0;
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
  margin: 10px 0;
  display: inline-block;
`;

class Quantity extends Component {
  render() {
    const handleQuantityChange = this.props.updateQuantity;

    return (
      <QuantityWrapper className="product-full__quantity">
        <select name="quantity" onChange={handleQuantityChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </QuantityWrapper>
    );
  }
}

class ProductFull extends Component {
  constructor() {
    super();
    this.state = {
      product: {
        skus: []
      },
      quantity: 1
    };
  }

  handleQuantityChange(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  async componentDidMount() {
    const data = await product;
    this.setState({
      product: data,
      quantity: 1,
    });

    document.body.className += ' home';
  }

  render() {
    const { product, quantity } = this.state;
    const { product_id } = product;
    const now = Date.now();

    if (false || !product.hasOwnProperty('skus') || product.skus.length === 0) {
      return (
        <div />
      );
    }

    console.log('product-full mounted');

    return (
      <ProductFullWrapper className="product-full">
        <h3>{product.name}</h3>

        <Quantity
          updateQuantity={this.handleQuantityChange.bind(this)}
        />

        <ButtonWrapper
          className="product-full__add-to-bag"
          data-pg-component="add-to-bag"
          data-pg-time={now}
          data-quantity={quantity}
          data-sku-id={product_id}
        />
      </ProductFullWrapper>
    );
  }
}

export default ProductFull;