import React, { Component } from 'react';
import about from '../../assets/about.jpg';
import Hero from '../../components/Hero';

class Us extends Component {
  render() {
    return (
      <section>
        <Hero src={about} featured='About' />
      </section>
    );
  }
}

export default Us;
