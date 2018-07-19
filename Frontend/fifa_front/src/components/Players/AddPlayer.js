import React, { Component } from 'react';

class AddPlayer extends Component 
{
    model = null;

    constructor(props)
    {
      super(props);

      console.log ("addPlayer construct")  
      console.log(this.props.NewPlayer)

      this.model = this.props.NewPlayer;
    }
  
    render() 
    {
        return (
          <div>
              firstName <input type="text" id="PlayerFirstName" name="firstName" onChange={this.props.handleNew} value={this.model.firstName} /> <br />
              lastName  <input type="text" id="PlayerLastName"  name="lastName"  onChange={this.props.handleNew} value={this.model.lastName} placeholder="playername"/>  <br />
              <button onClick={this.props.SavePlayer}>Save player</button>
              &nbsp;&nbsp;
              <button onClick={this.props.CancelAddEdit}>cancel</button>
          </div>
        )
    }

/*    

//      this.handleUpdateFirstName = this.handleUpdateFirstName.bind(this);
//      this.handleUpdateLastName  = this.handleUpdateLastName.bind(this);


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
*/

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
