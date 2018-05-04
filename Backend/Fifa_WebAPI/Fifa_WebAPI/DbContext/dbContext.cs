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

		public DbSet<Player>       Players       { get; set; }
		public DbSet<Team>         Teams         { get; set; }
		public DbSet<Match>        Matches       { get; set; }
		public DbSet<Score>		   Scores        { get; set; }

		public DbSet<Player_Team>  Player_Teams  { get; set; }


		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
		   modelBuilder.Entity<Player>() .ToTable("Player");
		   modelBuilder.Entity<Team>()   .ToTable("Team");
		   modelBuilder.Entity<Match>()  .ToTable("Match");
		   modelBuilder.Entity<Score>()  .ToTable("Score");

			//modelBuilder.Entity<Player>()
			//	.HasMany<Team>(t => t.Teams)
			//	.WithMany(p => p.Players)
			//	.Map(cs =>
			//	{
			//		cs.MapLeftKey("PlayerRefId");
			//		cs.MapRightKey("TeamRefId");
			//		cs.ToTable("Player_Team");
			//	});

			//implement nxn relation by adding it's PK, then adding 1n relation in both senses... 
			modelBuilder.Entity<Player_Team>()
				.HasKey(pt => new { pt.PlayerID, pt.TeamID });

			modelBuilder.Entity<Player_Team>()
				 .HasOne(pt => pt.Player)
				 .WithMany(t => t.Player_Teams)
				 .HasForeignKey(pt => pt.PlayerID);

			modelBuilder.Entity<Player_Team>()
				.HasOne(pt => pt.Team)
				.WithMany(p => p.Player_Teams)
				.HasForeignKey(pt => pt.TeamID);

			base.OnModelCreating(modelBuilder);
		}	
	}
}

