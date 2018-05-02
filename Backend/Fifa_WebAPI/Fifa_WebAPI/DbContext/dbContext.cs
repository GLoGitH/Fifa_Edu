using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Fifa_WebAPI.Models;

namespace Fifa_WebAPI.DbContext
{
	public class FifaDbContext : Microsoft.EntityFrameworkCore.DbContext
	{
		public FifaDbContext(DbContextOptions<FifaDbContext> options) : base(options)
		{
		}

		public DbSet<Player>  Players  { get; set; }
		public DbSet<Team>    Teams    { get; set; }
		public DbSet<Match>   Matches  { get; set; }
		public DbSet<Score>   Scores   { get; set; }

		//public DbSet<Player_Team> Player_Teams { get; set; }


		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Player>().ToTable("Player");
			modelBuilder.Entity<Team>().ToTable("Team");
			modelBuilder.Entity<Match>().ToTable("Match");
			modelBuilder.Entity<Score>().ToTable("Score");
		}	
	}
}

