using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fifa_WebAPI.Models
{
    public class Player_Team
    {
		public int     ID      { get; set; }

		public Player  Player  { get; set; }
		public Team    Team    { get; set; }
    }
}
