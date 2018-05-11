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
    this.state =
      { 
        players: [ ] , 
        addPlayerVisible: false, 
        NewPlayer: {firstName: "", lastName: ""} 
      };

    this.togglePlayerAddForm = this.togglePlayerAddForm.bind(this);
    }


  componentDidMount()
  {
    fetch('http://localhost:5082/api/players')
      .then((Response)=>Response.json())
      .then((findresponse)=>
    {
      console.log ("fetch data");
      console.log(findresponse);
       this.setState( {players: findresponse})
    })

    //fetch voor andere objecten
  }

  togglePlayerAddForm()
  {
    this.setState({addPlayerVisible: !this.state.addPlayerVisible}) ;
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
        <PlayerList List={this.state.players} addPlayerVisible={this.state.addPlayerVisible} onTogglePlayerAddForm={this.togglePlayerAddForm} NewPlayer={this.state.NewPlayer} />
      </div>
    );
  }
}

export default App;
