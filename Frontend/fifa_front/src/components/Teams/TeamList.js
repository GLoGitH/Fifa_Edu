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

      this.ActiveMenu = this.props.ActiveMenu;
    }


    render() 
    {
      const teamFormProps = 
      {
        NewTeam: this.props.NewTeam,
        handleNewTeam: this.props.handleNewTeam,
        SaveTeam: this.props.onToggleSaveTeam, 
        CancelAddEdit: this.props.onToggleAddForm 
      };
    
      console.log("TeamList--- this.props:");
      console.log(this.props);
      console.log("TeamList this.props.list");
      console.log(this.props.List);
      console.log("newTeam to pass along") 
      console.log(this.props.NewTeam) 

      return (
        <table className="tablestyle table-hover"> 
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th><u><i>TeamName&nbsp;</i></u></th>
              <th><i>edit&nbsp;</i></th>
              <th><i>remove from list&nbsp;</i></th>
            </tr>  
          </thead>
          <tbody>
            {
              this.props.List.map( (teamFromList, key) =>
              {
                return(
                  <tr key={key}>
                    <td>{key+1}</td>
                    <td>{teamFromList.teamName}</td>
                    <td><img src={editImg}    onClick={() => this.props.onToggleEditTeam(key)}  alt="edit" className="img" data-toggle="tooltip" title="edit" /></td>
                    <td><img src={deleteImg}  onClick={() => this.props.onToggleDeleteTeam(teamFromList.teamID)}  alt="remove" className="img" data-toggle="tooltip" title="remove" /></td>
                  </tr>
                )
              })
            }
            <tr>
              <td colSpan="4">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan="4">
                { !this.props.addObjVisible ? <button onClick={this.props.onToggleAddForm}>Add team</button> : null  }  
                <p />
                { this.props.addObjVisible ? <AddTeamForm {...teamFormProps} /> : null } 
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
}

export default teamList;
