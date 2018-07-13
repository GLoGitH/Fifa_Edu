import React, { Component } from 'react';
import logo from './img/fifa.jpg';
import isLoadingImg from './img/isLoading.svg';
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
        isLoading : false, 
        BackEndUrl: { Players: "http://localhost:5082/api/players" }
      };

    this.togglePlayerAddForm = this.togglePlayerAddForm.bind(this);

    this.handleNew = this.handleNew.bind(this);
  
    this.savePlayer = this.savePlayer.bind(this);

    this.deletePlayer = this.deletePlayer.bind(this);
  }

  handleChange = event => {this.setState({CurID : event.target.value });}

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

    this.setState({isLoading: true});

    fetch(this.state.BackEndUrl.Players) 
      .then((Response)=>Response.json())
      .then((findresponse)=>
    {
      console.log ("fetch data");
      console.log(findresponse);
      this.setState( {players: findresponse, isLoading: false})
    })
  }


  togglePlayerAddForm()
  {
    this.setState({addPlayerVisible: !this.state.addPlayerVisible}) ;
  }
  
  toggleAddPlayerFirstName(newFirstName)
  {
    console.log('newFirstName [',newFirstName,']');
    console.log('[', ...this.state.NewPlayer.newFirstName, ']');
    this.setState({NewPlayer: [ ...this.state.NewPlayer.newFirstName, newFirstName] }) ;
  }

  toggleAddPlayerLastName(newLastName)
  {
    this.setState({NewPlayer: [ ...this.state.NewPlayer, newLastName] }) ;
  }
  
  handleNew(event)
  {
    let model = this.state.NewPlayer;
    model[event.target.name] = event.target.value;
    this.setState({NewPlayer: model});
  }

  savePlayer(event)
  {
    //actually save a player
    console.log ("savePlayer!");
//    console.log(event)
//    console.log(this.state)


    axios.post(this.state.BackEndUrl.Players, 
      /*{firstName: 'testFN', lastName: 'testLN'}*/
      this.state.NewPlayer
        )
      .then(resultaat => 
        { 
          console.log("post resultaat"); 
          console.log(resultaat); 
          console.log(resultaat.data);
          const status = resultaat.status;
          
          if (status === 201 || status === 200) 
          {
            this.setState({NewPlayer: {firstName: '', lastName: ''}})
            this.togglePlayerAddForm();    /* hide the add form again */ 
            this.loadPlayerList();     
          }
          else 
          {
            console.log("Axios Error occured -- http status [",status,"]")
          } 
        })
      .catch((err) =>  {console.log("Axios error : [",err,"]");}
      )
    
  }

  deletePlayer(playerID)
  {
    console.log("delete user")
    //console.log("playerID [", {playerID}, "]");
    //debugger;
    //console.log(event.target.value);
 
    console.log("CurID [", playerID, "]");

    var url = this.state.BackEndUrl.Players + '/' + playerID;
    console.log ('url for delete [',url,']');

    axios.delete(url)
      .then(resultaat =>
        {
        console.log("post resultaat"); 
        console.log(resultaat); 
        console.log(resultaat.data);
        const status = resultaat.status;
       
       ((status === 200 || status === 201) ? this.loadPlayerList() : console.log("Axios Error occured -- http status [",status,"]"))
     })
   .catch((err) =>  {console.log("Axios error : [",err,"]");}
   )

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
          {
            this.state.isLoading ? <img src={isLoadingImg} alt="please wait..." /> :  
          <PlayerList 
             List={this.state.players} 
             addPlayerVisible={this.state.addPlayerVisible} 
             NewPlayer={this.state.NewPlayer} 
             onTogglePlayerAddForm={this.togglePlayerAddForm} 
             handleNew={this.handleNew}
             onToggleSavePlayer={this.savePlayer}
             onToggleDeletePlayer={this.deletePlayer}
          />
          }
      </div>
    );
  }
}

export default App;



/*

    this.setState({NewPlayer: [ ...this.state.NewPlayer, newFirstName] }) ;


*/
