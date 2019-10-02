import React, { Component } from 'react';
import './App.css';
import CocktailListContainer from './components/CocktailListContainer'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cocktails Explorer</h1>
        </header>
        <main>
          <Route exact path='/' component={CocktailListContainer}/>
        </main>
      </div>
    );
  }
}

export default App;
