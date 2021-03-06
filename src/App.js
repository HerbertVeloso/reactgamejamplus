import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// import Navbar from './components/Navbar';
import Teste from './components/Teste';
import Footer from './components/Footer';

import Home from './pages/Home';
import ComoFunciona from './pages/ComoFunciona';
import Organizers from './pages/Organizers';
import FAQ from './pages/FAQ';
import Edicoes from './pages/Edicoes';
import Empresa from './pages/Empresa';
import NotFound from './pages/NotFound';

import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: null
    }
  }
  render() {
    AOS.init();
    return (
        <div className="App">
          {/* <Navbar /> */}
          <Teste />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/comofunciona" component={ComoFunciona} />
            <Route exact path="/organizadores" component={Organizers} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/edicao" component={Edicoes} />
            <Route exact path="/conquistas" component={Empresa} />
            <Route path='/' component={NotFound} />
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default App;
