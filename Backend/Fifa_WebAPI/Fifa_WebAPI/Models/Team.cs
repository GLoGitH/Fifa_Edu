using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fifa_WebAPI.Models
{
    public class Team
    {
		public int                  ID        { get; set; } 

		public string               TeamName  { get; set; }

		public ICollection<Player>  Players   { get; set; }
    }
}
