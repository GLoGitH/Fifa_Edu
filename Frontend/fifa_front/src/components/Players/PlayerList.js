import React, { Component } from 'react';
import '../../App.css';


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
            <th>&nbsp;</th>
            <th><u><i>PlayerName</i></u></th>
          </thead>
          <tbody>
            {
              this.props.List.map( (playerFromList, key) =>
              {
                return(
                  <tr key="{key}">
                    <td>{key+1}</td>
                    <td>{playerFromList.fullName}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      );
    }
}
export default playerList;


