import React, { Component } from 'react';
import AvailableMenu from '../../AvailableMenu';

class TopNav extends Component 
{
    
    constructor(props)
    {
      super(props);

      console.log ("nav construct")  
      console.log(this.props.ActiveMeu)

      this.ActiveMenu = this.props.ActiveMenu;
      this.doNav = this.props.doNav;
    }



    render() 
    {   
      console.log("rendering nav component");

      return  (
        <div className="container">
          <nav className="navbar">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
              </button>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav nav-pills" role="tablist">
                <li className="fifaNav" id="liHome">    <a onClick={() => this.doNav(AvailableMenu.Home)}>Home</a></li>
                <li className="fifaNav" id="liPlayers"> <a onClick={() => this.doNav(AvailableMenu.Players)}>Players</a></li>
                <li className="fifaNav" id="liTeams">   <a onClick={() => this.doNav(AvailableMenu.Teams)}>Teams</a></li>
              </ul>
            </div>
          </nav>
        </div>
      );
      
    }
  }

  
export default TopNav;

