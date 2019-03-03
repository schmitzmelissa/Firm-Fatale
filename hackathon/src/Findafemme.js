import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <body>

      <script type="text/javascript" src="//platform.linkedin.com/in.js">
      api_key: 776l2kmyn53bu7
      authorize: true
      onLoad: onLinkedInLoad
      scope: r_basicprofile r_emailaddress
    </script>
      <div className="App">
        <header className="App-header">
          <p>Find a Femme</p>
          <p> Find a femme near YOU.</p>

          </header>

      </div>
      </body>
    );
  }
}

export default App;
