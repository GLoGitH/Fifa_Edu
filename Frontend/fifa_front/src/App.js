import React, { Component } from 'react';
import logo from './img/fifa.jpg';
import './App.css';
import PlayerList from './components/Players/PlayerList';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = { players: [{ name: 'Jim'}, { name: 'John' }] }
  }

  render() 
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fifa Venti follow </h1>
        </header>
        <p className="App-intro">
          main menu 
        </p>
        <PlayerList list={this.state.players} />
        {
          console.log(this.state.players)
        }
      </div>
    );
  }
}

export default App;
