import React, { Component } from 'react';
import isLoadingImg from './img/isLoading.svg';
import axios from 'axios';
import './App.css';
import AvailableMenu from './AvailableMenu';
import AppHeader from './components/appHeader';
import TopNav from './components/nav/nav';
import PlayerList from './components/Players/PlayerList';
import TeamList from './components/Teams/TeamList';


class App extends Component 
{
  constructor(props)
  {
    super(props);

    //this.state = { players: [{ name: 'Jim'}, { name: 'John' }] }    
    this.state = 
      { 
        addObjVisible: false, 
        BackEndUrl: { Players: "http://localhost:5082/api/players", Teams: "http://localhost:5082/api/teams" }, 

        players: [ ] , 
        NewPlayer: {firstName: "", lastName: "", playerID: -1}, 

        teams: [],
        NewTeam: {teamName: "", teamID: -1}, 
        
        isLoading : false, 
        ActiveMenu: AvailableMenu.Players   /*Teams*/  /*Players*/ /* default value */
      };

    this.toggleAddForm = this.toggleAddForm.bind(this);

    this.handleNew = this.handleNew.bind(this);
    this.savePlayer = this.savePlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
    this.showEditPlayer = this.showEditPlayer.bind(this); 
    
    this.doNav = this.doNav.bind(this);
  }

  handleChange = event => {this.setState({CurID : event.target.value });}


  componentDidMount()
  {
    this.loadPlayerList();

    this.loadTeamList();

    //fetch voor andere objecten
  }

  //#region Players 
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


  toggleAddForm()
  {
    this.setState({addObjVisible: !this.state.addObjVisible}) ;
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

    //check insert or edit
    let playerSearch = this.state.NewPlayer.playerID;
    if (this.state.players.some(function(item) { return item.playerID === playerSearch } ))
    {
      //edit
      let url = this.state.BackEndUrl.Players + '/' +  playerSearch;
      axios.put(url, 
                this.state.NewPlayer)
           .then(resultaat =>
             { 
               console.log("post resultaat"); 
               console.log(resultaat); 
               console.log(resultaat.data);
               const status = resultaat.status;
            
               if (status === 201 || status === 200 || status === 204) 
               {
                 this.setState({NewPlayer: {firstName: '', lastName: ''}})
                 this.toggleAddForm();    /* hide the add form again */ 
                 this.loadPlayerList();     
                }
                else 
                {
                  console.log("Axios Error occured -- http status [",status,"]")
                } 
              })
           .catch((err) =>  {console.log("Axios error : [",err,"]");})
    }
    else 
    {   //new 
        let newPlayer = { firstName: this.state.NewPlayer.firstName, lastName: this.state.NewPlayer.lastName };
        axios.post(this.state.BackEndUrl.Players, 
                   newPlayer)
         .then(resultaat => 
         { 
           console.log("post resultaat"); 
           console.log(resultaat); 
           console.log(resultaat.data);
           const status = resultaat.status;
          
           if (status === 201 || status === 200) 
           {
             this.setState({NewPlayer: {firstName: '', lastName: ''}})
             this.toggleAddForm();    /* hide the add form again */ 
             this.loadPlayerList();     
           }
           else 
           {
             console.log("Axios Error occured -- http status [",status,"]")
           }  
          })
          .catch((err) =>  {console.log("Axios error : [",err,"]");})
    
      }
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

  showEditPlayer(playerID)
  {
    console.log("addObjVisible: [", this.state.addObjVisible, "]");
    //set the player as Newplayer & show form to enable editing
    this.toggleAddForm();
    let EditPlayer = this.state.players[playerID];
    this.setState({NewPlayer: {firstName: EditPlayer.firstName, lastName: EditPlayer.lastName, playerID: EditPlayer.playerID}})
    console.log(this.state.players[playerID])
  }
//#endregion Players 

  //#region Teams 
  loadTeamList()
  {
    this.setState({isLoading: true});

    fetch(this.state.BackEndUrl.Teams) 
      .then((Response)=>Response.json())
      .then((findresponse)=>
    {
      console.log ("fetch data");
      console.log(findresponse);
      this.setState( {teams: findresponse, isLoading: false})
    })
  }
//#endregion Teams 


  doNav(activeMenuItem)
  {
    console.log("doingNavi");
    console.log("targetMenuItem : [", activeMenuItem, "]");
    //console.log(this);
    console.log("ActiveMenu : [", this.state.ActiveMenu, "]");

    this.setState({ActiveMenu: activeMenuItem}) ; 
  }


  render() 
  {
    console.log("rendering app")
    console.log(this.state.players)

    let ContentComponent  = null; 

    if (this.state.isLoading) 
      ContentComponent = <img src={isLoadingImg} alt="please wait..." /> 
    else 
    {
      switch (this.state.ActiveMenu) 
      {
          case AvailableMenu.Players:
              ContentComponent = 
                <PlayerList 
                    List={this.state.players} 
                    addObjVisible={this.state.addObjVisible} 
                    NewPlayer={this.state.NewPlayer} 
                    onToggleAddForm={this.toggleAddForm} 
                    handleNew={this.handleNew}
                    onToggleSavePlayer={this.savePlayer}
                    onToggleDeletePlayer={this.deletePlayer}
                    onToggleEditPlayer={this.showEditPlayer}
                    onToggleCancelAddEdit={this.toggleAddForm}
                />
            break;
          case AvailableMenu.Teams:
          ContentComponent = 
            <TeamList 
                List={this.state.teams}
                addObjVisible={this.state.addObjVisible} 
                NewTeam={this.setState.NewTeam}
                onToggleAddForm={this.toggleAddForm} 
                onToggleCancelAddEdit={this.toggleAddForm}
                />
            break;
          case AvailableMenu.Home:
            break;
          default:
            break;
      }
    }

    return (
      <div className="App">
        <AppHeader />
        <TopNav 
           doNav = {this.doNav} 
           ActiveMenu = {this.state.ActiveMenu}
        />
        {ContentComponent}
      </div>
    );
  }
}

export default App;



/*
    this.setState({NewPlayer: [ ...this.state.NewPlayer, newFirstName] }) ;

      <li className="fifanav"><a onClick="{() => this.setState({ActiveMenu: AvailableMenu.Home})}">Home</a></li>
      <li className="fifanav active"><a onClick="{() => this.setState({ActiveMenu: AvailableMenu.Players})}">Players</a></li>
      <li className="fifanav"><a onClick="{() => this.setState({ActiveMenu: AvailableMenu.Teams})}">Teams</a></li>


    //axios.get('https://jsonplaceholder.typicode.com/users').then(res => {const persons = res.data; this.setState({persons})})

    //axios.post('https://jsonplaceholder.typicode.com/users').then(res => {console.log(res); console.log(res.data);})





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

*/
