import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navigation from './Navigation';
import Panel from './Panel';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header>
            <p>Waitress Assistant</p>
          </header>
          <main>
            <div className="navigation">
              {<Navigation/>}
            </div>
            <div className="panel">
              {<Panel/>}
            </div>
          </main>
          <footer>
            <p dangerouslySetInnerHTML={{ "__html": "&copy; Paweł Woźniak"}}/>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
