using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fifa_WebAPI.Models
{
    public class Match
    {
		public int       ID         { get; set; }
		public DateTime  MatchDate  { get; set; }

		public Team      Team1      { get; set; }
		public Team      Team2      { get; set; }

		public Score     Score      { get; set; }
	}
}
