import React, { Component } from 'react';
// import logo from './logo.svg';
// import Life from './pages/demo/Life'
// import Admin from './Admin'
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="100px" />
        </header> */}
        {/* <Life></Life> */}
        {/* <Admin></Admin> */}
        {this.props.children}
      </div>
    );
  }
}

export default App;
