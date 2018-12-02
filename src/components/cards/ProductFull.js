import React, { Component } from 'react';
import styled from 'styled-components'

import { product } from '../../data/product.js';

const ProductFullWrapper = styled.div`
  max-width: 1000px;
  margin 20px auto;
  padding: 20px;
`;

class ProductFull extends Component {
  constructor() {
    super();
    this.state = { product: {} };
  }

  async componentDidMount() {
    const data = await product;
    this.setState({ product: data });
  }

  render() {
    const { product } = this.state;
    console.log(product);

    return (
      <ProductFullWrapper className="product-full">
        {product.name}
      </ProductFullWrapper>
    );
  }
}

export default ProductFull;