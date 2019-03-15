import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import ComoFunciona from './pages/ComoFunciona';
import Organizers from './pages/Organizers';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  render() {
    AOS.init();
    return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/comofunciona" component={ComoFunciona} />
            <Route exact path="/organizadores" component={Organizers} />
            <Route exact path="/faq" component={FAQ} />
            <Route path='/' component={NotFound} />
          </Switch>
        </div>
    );
  }
}

export default App;
