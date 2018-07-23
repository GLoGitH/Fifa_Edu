import React, { Component } from 'react';

class AddTeam extends Component 
{
    model = null;

    constructor(props)
    {
      super(props);

      console.log ("addTeam construct")  
      console.log(this.props.NewTeam)

      this.model = this.props.NewTeam;
    }
  
    render() 
    {
        return (
          <div>
              TeamName  <input type="text" id="teamName"  name="teamName"  onChange={this.props.handleNewTeam} value={this.model.teamName} placeholder="team name"/>  <br />
              <button onClick={this.props.SaveTeam}>Save Team</button>
              &nbsp;&nbsp;
              <button onClick={this.props.CancelAddEdit}>cancel</button>
          </div>
        )
    }

}

export default AddTeam
