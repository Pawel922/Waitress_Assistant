import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Header';
import Menu from './Menu';
import Summary from './Summary';
import Tables from './Tables';
import Footer from './Footer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            {<Header/>}
          </header>
          <main>
            <aside>
              <div className="menu">
                {<Menu/>}
              </div>
              <div className="summary">
                {<Summary/>}
              </div>
            </aside>
            <section className="tables">
              {<Tables/>}
            </section>
          </main>
          <footer>
            {<Footer/>}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
