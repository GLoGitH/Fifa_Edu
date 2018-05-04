using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fifa_WebAPI.Models
{
    public class Team
    {
		public int                        TeamID        { get; set; } 

		public string                     TeamName      { get; set; }


		public  ICollection<Player_Team>  Player_Teams  { get; set; }
	}
}
