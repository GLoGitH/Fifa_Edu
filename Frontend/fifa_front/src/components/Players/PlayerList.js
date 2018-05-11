import React, { Component } from 'react';
import AddPlayerForm from './AddPlayer';


class playerList extends Component 
{

    render() 
    {
      console.log("PlayerList this.props");
      console.log(this.props);
      console.log("PlayerList this.props.list");
      console.log(this.props.List);
    
      return(
        <table className="tablestyle"> 
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th><u><i>PlayerName</i></u></th>
            </tr>  
          </thead>
          <tbody>
            {
              this.props.List.map( (playerFromList, key) =>
              {
                return(
                  <tr key={key}>
                    <td>{key+1}</td>
                    <td>{playerFromList.fullName}</td>
                  </tr>
                )
              })
            }
            <tr>
              <td colSpan="2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan="2">
                <button onClick={this.props.onTogglePlayerAddForm}>Add player</button>
                { this.props.addPlayerVisible ? <AddPlayerForm 
                                                      addPlayer={this.props.addPlayer} 
                                                      NewPlayer={this.props.NewPlayer} 
                                                      SavePlayer={this.props.onToggleSavePlayer}
                                                /> : null }
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
}

export default playerList;


