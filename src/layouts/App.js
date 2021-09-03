import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Menu from './Menu';
import Summary from './Summary';
import Panel from './Panel';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <p>Waitress Assistant</p>
          </header>
          <main>
            <aside>
              <div className="menu">
                <h1>Menu</h1>
                {<Menu/>}
              </div>
              <div className="summary">
                <h1>Summary</h1>
                {<Summary/>}
              </div>
            </aside>
            <section className="panel">
              {<Panel/>}
            </section>
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
