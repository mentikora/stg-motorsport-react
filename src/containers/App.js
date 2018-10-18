import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Homepage } from './Homepage';
import defaultText from '../defaultText';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Homepage data={defaultText.homepage}/>

      </div>
    );
  }
}

export default App;
