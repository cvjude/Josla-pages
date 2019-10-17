import React from 'react';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Products from './views/Products';
import Us from './views/Us';
import Carrier from './views/Carrier';
import Blog from './views/Blog';
import Error from './views/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.scss';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/about' component={Us} />
          <Route path='/carrier' component={Carrier} />
          <Route path='/blog' component={Blog} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
