import React, { Component } from 'react';


class AddPlayer extends Component 
{

    render() 
    {
        return(
          <p>
              firstName <input type="text" id="PlayerFirstName" onChange={this.handleUpdate} value={this.props.NewPlayer.firstName} /> <br />
              lastName  <input type="text" id="PlayerLastName"  onChange={this.handleUpdate} value={this.props.NewPlayer.lastName} />  <br />
              <button onClick={this.props.SavePlayer}>Save player</button>
          </p>
        )
    }

}

export default AddPlayer
