import React, { Component } from 'react';

class playerList extends Component 
{
//   constructor(props) 
//   {
//       super(props);
// //      this.state = { data: [ ] };
//   }

  // componentDidMount()
  // {
  //   fetch('https://facebook.github.io/react-native/movies.json')
  //    .then((Response)=>Response.json())
  //    .then((findresponse)=>
  //   {
  //     console.log(findresponse);
  //     console.log(findresponse.movies);
  //     this.setState( {data: findresponse.movies})
  //   })
  // }

    render() 
    {
      return(<ul>
              {
                //console.log(this.props);
                console.log(this.props.list)}
                {//this.props.list.map(listValue)  
     //             <li>{playerList, listValue}</li>
                  this.props.list.map((playerFromList, key) =>
                  {
                    return(
                      <li key={key}>{playerFromList.name}</li>

                )})
              }
             </ul>);
    }
}
export default playerList;
