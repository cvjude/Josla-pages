import React, { Component } from 'react';
import blank from '../../assets/blank.jpg';
import Hero from '../../components/Hero';

class Products extends Component {
  render() {
    return (
      <section>
        <Hero src={blank} featured='Products' />
      </section>
    );
  }
}

export default Products;
