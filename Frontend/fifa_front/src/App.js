import React, { Component } from 'react';
import logo from './img/fifa.jpg';
import './App.css';
import PlayerList from './components/Players/PlayerList';
import axios from 'axios';

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
        NewPlayer: {firstName: "", lastName: ""}, 
        BackEndUrl: { Players: "http://localhost:5082/api/players" }
      };

    this.togglePlayerAddForm = this.togglePlayerAddForm.bind(this);

    this.toggleAddPlayerFirstName = this.toggleAddPlayerFirstName.bind(this);
    this.toggleAddPlayerLastName = this.toggleAddPlayerLastName.bind(this);
  
    this.savePlayer = this.savePlayer.bind(this);
  }


  componentDidMount()
  {
    this.loadPlayerList();

    //axios.get('https://jsonplaceholder.typicode.com/users').then(res => {const persons = res.data; this.setState({persons})})

    //axios.post('https://jsonplaceholder.typicode.com/users').then(res => {console.log(res); console.log(res.data);})


    //fetch voor andere objecten
  }

  loadPlayerList()
  {
    console.log(this.state.BackEndUrl);
    console.log(this.state.BackEndUrl.Players);

    fetch(this.state.BackEndUrl.Players) 
      .then((Response)=>Response.json())
      .then((findresponse)=>
    {
      console.log ("fetch data");
      console.log(findresponse);
       this.setState( {players: findresponse})
    })
  }


  togglePlayerAddForm()
  {
    this.setState({addPlayerVisible: !this.state.addPlayerVisible}) ;
  }
  
  toggleAddPlayerFirstName(newFirstName)
  {
    this.setState({NewPlayer: [ ...this.state.NewPlayer, newFirstName] }) ;
  }

  toggleAddPlayerLastName(newLastName)
  {
    this.setState({NewPlayer: [ ...this.state.NewPlayer, newLastName] }) ;
  }
  

  savePlayer(event)
  {
    //actually save a player
    console.log ("savePlayer!");
//    console.log(event)
//    console.log(this.state)


    axios.post(this.state.BackEndUrl.Players, 
      {firstName: 'testFN', lastName: 'testLN'})
      .then(resultaat => 
        { 
           console.log("post resultaat"); 
           console.log(resultaat); 
           console.log(resultaat.data);
          const status = resultaat.status;
          
          (status === 201 ? this.forceUpdate() : console.log("Axios Error occured -- http status [",status,"]"))
        })
      .catch((err) =>  {console.log("Axios error : [",err,"]");}
      )
    
    //console.log(this.state.NewPlayer)

    /*
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    const options = 
    {
      method: 'POST',
      headers, 
      body: JSON.stringify(this.state.NewPlayer)
    }

    const request = new Request('http://localhost:5082/api/players', options);
    const response = fetch(request);
    const status = response.status;

    if (status === 201) { this.loadPlayerList(); }
*/
  }

  render() 
  {
    console.log("rendering app")
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
          <PlayerList 
             List={this.state.players} 
             addPlayerVisible={this.state.addPlayerVisible} 
             NewPlayer={this.state.NewPlayer} 
             onTogglePlayerAddForm={this.togglePlayerAddForm} 
             onToggleAddPlayerFirstName={this.toggleAddPlayerFirstName}
             onToggleAddPlayerLastName={this.toggleAddPlayerLastName}
             onToggleSavePlayer={this.savePlayer}
          />
      </div>
    );
  }
}

export default App;
