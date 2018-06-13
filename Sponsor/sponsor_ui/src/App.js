import React, { Component } from 'react';
import logo from './site-logo.png';
import './App.css';
import SponsorshipRequests from './components/sponsorship_requests/sponsorship_requests';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Kuwa Sponsor</h1>
        </header>
        <SponsorshipRequests/>
      </div>
    );
  }
}

export default App;
