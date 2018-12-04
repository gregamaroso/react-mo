import React, { Component } from 'react';
import styled from 'styled-components'

import { product } from '../../data/product.js';

const ProductFullWrapper = styled.div`
  max-width: 1000px;
  margin 20px auto;
  padding: 20px;
`;

const Button = styled.div`
  padding: 8px;
  border: 1px dotted red;
  margin: 10px 0;
  display: inline-block;
`;

class ProductFull extends Component {
  constructor() {
    super();
    this.state = {
      product: {
        skus: []
      }
    };
  }

  async componentDidMount() {
    const data = await product;
    this.setState({ product: data });

    // Update the product id value to test the mutation observer
    let i = 0;
    setInterval(() => {
      this.setState({ product: {
        ...data,
        product_id: data.product_id + '-' + i++
      }});
    }, 4000);
  }

  render() {
    const { product } = this.state;
    const { product_id } = product;
   
    return (
      <ProductFullWrapper className="product-full">
        <h3>{product.name}: {product_id}</h3>

        <Button
          className="pg-add-to-bag"
          data-pg
          data-sku-id={product_id} />
      </ProductFullWrapper>
    );
  }
}

export default ProductFull;