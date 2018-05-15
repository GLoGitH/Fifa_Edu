import React, { Component } from 'react';
//import playerList from './PlayerList';


class AddPlayer extends Component 
{

    constructor(props)
    {
      super(props);
  
      this.handleUpdateFirstName = this.handleUpdateFirstName.bind(this);
      this.handleUpdateLastName  = this.handleUpdateLastName.bind(this);
    }
  
  
    render() 
    {
        return(
          <form>
              firstName <input type="text" id="PlayerFirstName" onChange={this.handleUpdateFirstName} value={this.props.NewPlayer.firstName} /> <br />
              lastName  <input type="text" id="PlayerLastName"  onChange={this.handleUpdateLastName}  value={this.props.NewPlayer.lastName} placeholder="playername"/>  <br />
              <button onClick={this.props.SavePlayer}>Save player</button>
          </form>
        )
    }

    
    handleUpdateFirstName(event)
    {
        console.log("AddPlayer handleUpdateFirstName");
//        console.log (this.props.NewPlayer.firstName);
//        console.log(this.props.NewPlayer);
        console.log("event.target.value FN ["+event.target.value+"]");
        //console.log("doc.ElemV ["+document.getElementById("PlayerFurstName")+"]");
     
        //this.props.onToggleAddPlayerFirstName(event.target.value);
    }
 
    handleUpdateLastName(event)
    {
        console.log("AddPlayer handleUpdateLastName");
//        console.log (this.props.NewPlayer.lastName);
  //      console.log(this.props.NewPlayer);
        console.log("event.target.value LN ["+event.target.value+"]");
     
        //this.props.onToggleAddPlayerLastName(event.target.value);
    }

/*
    handleUpdate(event)
    {
        console.log("AddPlayer NewPlayer")
        console.log(this.state.NewPlayer)
        
        this.props.NewPlayer(
           { 
               firstName:  event.target.firstName.value, 
               lastName: event.target.lastName.value
             }
        )
        console.log(this.state.NewPlayer);
        
    }
*/

}

export default AddPlayer
