import React, {Component} from 'react';
import './App.scss';
import {Hello} from './Hello.tsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello compiler="Typescript" framework="React" />
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default App;
