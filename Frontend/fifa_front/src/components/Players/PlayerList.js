import React, { Component } from 'react';
import AddPlayerForm from './AddPlayer';
import editImg from '../../img/edit.png';
import deleteImg from '../../img/delete.jpg';


class playerList extends Component 
{
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
    render() 
    {
      console.log("PlayerList this.props");
      console.log(this.props);
      console.log("PlayerList this.props.list");
      console.log(this.props.List);
      console.log("newplayer to pass along")
      console.log(this.props.NewPlayer)

      const playerFormProps = 
      {
        NewPlayer: this.props.NewPlayer,
        handleNew: this.props.handleNew,
        SavePlayer: this.props.onToggleSavePlayer
      };
    
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
                    <td><img src={editImg}    alt="edit" className="img" /></td>
                    <td><img src={deleteImg}  onClick={() => this.props.onToggleDeletePlayer(playerFromList.playerID)}  alt="remove" className="img" /></td>
                  </tr>
                )
              })
            }
            <tr>
              <td colSpan="4">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan="4">
                <button onClick={this.props.onTogglePlayerAddForm}>Add player</button>
                <p />
                { this.props.addPlayerVisible ? <AddPlayerForm {...playerFormProps} /> : null } 
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

