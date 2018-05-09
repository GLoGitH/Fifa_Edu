using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fifa_WebAPI.Models
{
    public class Player
    {
		public int                       PlayerID      { get; set; }
		public string                    LastName      { get; set; }
		public string                    FirstName     { get; set; }

		public string FullName
		{
			get
			{ return string.Concat(FirstName, " ", LastName);  }
		}        //derived, hence only getter 


		public ICollection<Player_Team>  Player_Teams  { get; set; }
	}
}

