using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Fifa_WebAPI.Models;

namespace Fifa_WebAPI.DbContext
{
    public class DbInitializer
    {
		public static void Initialize(FifaDbContext context)
		{
			//just test to check the db is avail. 
			SqlConnection conn = new SqlConnection("Server=.\\SQLSRV;Database=Fifa_edu;Trusted_Connection=True;MultipleActiveResultSets=true");
			conn.Open(); // throws if invalid
			conn.Close();
			conn = null;

			context.Database.EnsureCreated();

			//possibly check to see if tables contain data ; possibly setup testData here....

			if (context.Players.Any())
			{
			  return;   // DB has been seeded/contains data already (table Players) 
			}
			var players = new Player[]
			  {
				  new Player { FirstName="Monballiu",LastName="Marie" }
			  };
			foreach (Player p in players) 
			{
			  context.Players.Add(p);
			}
			context.SaveChanges();
		}
    }
}

