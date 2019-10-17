import React, { Component } from 'react';
import light from '../../assets/light.jpg';
import compute from '../../assets/compute.jpg';
import engineer from '../../assets/engineer.jpg';
import Hero from '../../components/Hero';
import './style.scss';

const data = [
  {
    src: light,
    heroText: 'Innovate'
  },
  {
    src: compute,
    heroText: 'Compute'
  },
  {
    src: engineer,
    heroText: 'Engineer'
  }
];

class Home extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        const value = prevState.count;
        return { count: value === 2 ? 0 : value + 1 };
      });
    }, 5000);
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <Hero {...data[count]} />
        <section className='container'>
          <div className='row'>
            <div className='col-md-12'>1</div>
            <div className='col-sm-12 col-md-6'>2</div>
            <div className='col-sm-12 col-md-6'>3</div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
