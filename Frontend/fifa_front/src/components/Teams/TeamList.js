import React, { Component } from 'react';
import editImg from '../../img/edit.png';
import deleteImg from '../../img/delete.jpg';
import AddTeamForm from './AddTeam';

class teamList extends Component 
{
    constructor(props)
    {
      super(props);

      console.log ("TeamList construct")  
      console.log(this.props.ActiveMeu)

      this.ActiveMenu = this.props.ActiveMenu;
    }

    render() 
    {
      const teamFormProps = 
      {
        NewTeam: this.props.NewTeam,
        handleNew: this.props.handleNew,
        SavePlayer: this.props.onToggleSaveTeam, 
        CancelAddEdit: this.props.onToggleAddForm 
      };
    
      return (
        <table className="tablestyle table-hover"> 
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th><u><i>TeamName</i></u></th>
              <th><i>edit</i></th>
              <th><i>remove from list</i></th>
            </tr>  
          </thead>
          <tbody>
            {
              this.props.List.map( (teamFromList, key) =>
              {
                return(
                  <tr key={key}>
                    <td>{key+1}</td>
                    <td>{teamFromList.TeamName}</td>
                    <td><img src={editImg}    onClick={() => this.props.onToggleEditTeam(key)}  alt="edit" className="img" data-toggle="tooltip" title="edit" /></td>
                    <td><img src={deleteImg}  onClick={() => this.props.onToggleDeleteTeam(teamFromList.playerID)}  alt="remove" className="img" data-toggle="tooltip" title="remove" /></td>
                  </tr>
                )
              })
            }
            <tr>
              <td colSpan="4">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan="4">
                { !this.props.addVisible ? <button onClick={this.props.onToggleAddForm}>Add team</button> : null  }  
                <p />
                { this.props.addTeamVisible ? <AddTeamForm {...teamFormProps} /> : null } 
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
}

export default teamList;
