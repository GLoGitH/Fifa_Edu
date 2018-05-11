import React, { Component } from 'react';


class AddPlayer extends Component 
{

    render() 
    {
        return(
          <p>
              firstName <input type="text" id="PlayerFirstName" onChange={this.handleUpdate} value={this.props.NewPlayer.firstName} /> <br />
              lastName  <input type="text" id="PlayerLastName"  onChange={this.handleUpdate} value={this.props.NewPlayer.lastName} />  <br />
              <button onClick={this.props.addPlayer}>Save player</button>
          </p>
        )
    }

    savePlayer(newName) 
    {
    }

}

export default AddPlayer
