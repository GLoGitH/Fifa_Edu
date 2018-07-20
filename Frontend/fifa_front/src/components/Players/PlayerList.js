import React, { Component } from 'react';
import AddPlayerForm from './AddPlayer';
import editImg from '../../img/edit.png';
import deleteImg from '../../img/delete.jpg';


class playerList extends Component 
{
    render() 
    {
      console.log("PlayerList--- this.props:");
      console.log(this.props);
      console.log("PlayerList this.props.list");
      console.log(this.props.List);
      console.log("newplayer to pass along") 
      console.log(this.props.NewPlayer) 

      const playerFormProps = 
      {
        NewPlayer: this.props.NewPlayer,
        handleNewPlayer: this.props.handleNewPlayer,
        SavePlayer: this.props.onToggleSavePlayer, 
        CancelAddEdit: this.props.onToggleAddForm 
      };
    
      return (
        <table className="tablestyle table-hover"> 
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th><u><i>PlayerName</i></u></th>
              <th><i>edit</i></th>
              <th><i>remove from list</i></th>
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
                    <td><img src={editImg}    onClick={() => this.props.onToggleEditPlayer(key)}  alt="edit" className="img" data-toggle="tooltip" title="edit" /></td>
                    <td><img src={deleteImg}  onClick={() => this.props.onToggleDeletePlayer(playerFromList.playerID)}  alt="remove" className="img" data-toggle="tooltip" title="remove" /></td>
                  </tr>
                )
              })
            }
            <tr>
              <td colSpan="4">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan="4">
                { !this.props.addObjVisible ? <button onClick={this.props.onToggleAddForm}>Add player</button> : null  }  
                <p />
                { this.props.addObjVisible ? <AddPlayerForm {...playerFormProps} /> : null } 
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
}

export default playerList;


/*
                    <td><img src={deleteImg} playerid={playerFromList.playerID} onClick={()=>this.props.onToggleDeletePlayer(playerFromList.playerID)}  alt="remove" className="img" /></td>



                                        <td><img src={editImg}  playerID={playerFromList.playerID} alt="edit" className="img" /></td>
                    <td><img src={deleteImg} playerid={playerFromList.playerID} onClick={this.props.onToggleDeletePlayer}  alt="remove" className="img" /></td>

*/

/*
  constructor(props)
    {
      super(props);

      this.onToggleDeletePlayer = this.onToggleDeletePlayer.bind(this, playerID);
    }
*/
/*
    deletePlayer(playerID)
    {
      console.log("deletePlayer");
      console.log(this.props.List)
      console.log(playerID);
    //  this.props.delete(playerID);
    }
*/
