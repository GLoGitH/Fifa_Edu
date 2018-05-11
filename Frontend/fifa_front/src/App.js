import React, { Component } from 'react';
import logo from './img/fifa.jpg';
import './App.css';
import PlayerList from './components/Players/PlayerList';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    //this.state = { players: [{ name: 'Jim'}, { name: 'John' }] }
    this.state = { players: [ ] };

  }

  componentDidMount()
  {
    fetch('http://localhost:5082/api/players')
      .then((Response)=>Response.json())
      .then((findresponse)=>
    {
      console.log ("fetch data");
      console.log(findresponse);
//      console.log(findresponse.movies); 
       this.setState( {players: findresponse})
    })
  }

  render() 
  {
    console.log("render app")
    console.log(this.state.players)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fifa Venti follow </h1>
        </header>
        <p className="App-intro">
          main menu placeholder
        </p>
        <PlayerList List={this.state.players} />
      </div>
    );
  }
}

export default App;
