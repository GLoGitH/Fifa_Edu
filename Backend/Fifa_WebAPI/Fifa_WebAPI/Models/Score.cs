using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fifa_WebAPI.Models
{
	public enum ScoreKind { Player, Team }

	public class Score
	{
		public int        ScoreID                 { get; set; }

		public int        ScoreValue1             { get; set; }
		public int        ScoreValue2             { get; set; }

		public int        GoalsMadeByContestant1  { get; set; }
		public int        GoalsMadeByContestant2  { get; set; }

		public int        WhoWon                  { get; set; }   //will be 1 or 2  - ie. contestant1 or contestant2


		public ScoreKind  ScoreKind               { get; set; }
		public int        Contestant1             { get; set; }   //depending on ScoreKind will point to either Players or Teams 
		public int        Contestant2             { get; set; }
	}
}
