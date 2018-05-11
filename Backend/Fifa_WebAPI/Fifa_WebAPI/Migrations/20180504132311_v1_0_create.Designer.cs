﻿// <auto-generated />
using Fifa_WebAPI.DbContext;
using Fifa_WebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Fifa_WebAPI.Migrations
{
    [DbContext(typeof(FifaDbContext))]
    [Migration("20180504132311_v1_0_create")]
    partial class v1_0_create
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Fifa_WebAPI.Models.Match", b =>
                {
                    b.Property<int>("MatchID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("MatchDate");

                    b.Property<int?>("ScoreID");

                    b.Property<int?>("Team1TeamID");

                    b.Property<int?>("Team2TeamID");

                    b.HasKey("MatchID");

                    b.HasIndex("ScoreID");

                    b.HasIndex("Team1TeamID");

                    b.HasIndex("Team2TeamID");

                    b.ToTable("Match");
                });

            modelBuilder.Entity("Fifa_WebAPI.Models.Player", b =>
                {
                    b.Property<int>("PlayerID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.HasKey("PlayerID");

                    b.ToTable("Player");
                });

            modelBuilder.Entity("Fifa_WebAPI.Models.Player_Team", b =>
                {
                    b.Property<int>("PlayerID");

                    b.Property<int>("TeamID");

                    b.HasKey("PlayerID", "TeamID");

                    b.HasIndex("TeamID");

                    b.ToTable("Player_Teams");
                });

            modelBuilder.Entity("Fifa_WebAPI.Models.Score", b =>
                {
                    b.Property<int>("ScoreID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Contestant1");

                    b.Property<int>("Contestant2");

                    b.Property<int>("GoalsMadeByContestant1");

                    b.Property<int>("GoalsMadeByContestant2");

                    b.Property<int>("ScoreKind");

                    b.Property<int>("ScoreValue1");

                    b.Property<int>("ScoreValue2");

                    b.Property<int>("WhoWon");

                    b.HasKey("ScoreID");

                    b.ToTable("Score");
                });

            modelBuilder.Entity("Fifa_WebAPI.Models.Team", b =>
                {
                    b.Property<int>("TeamID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("TeamName");

                    b.HasKey("TeamID");

                    b.ToTable("Team");
                });

            modelBuilder.Entity("Fifa_WebAPI.Models.Match", b =>
                {
                    b.HasOne("Fifa_WebAPI.Models.Score", "Score")
                        .WithMany()
                        .HasForeignKey("ScoreID");

                    b.HasOne("Fifa_WebAPI.Models.Team", "Team1")
                        .WithMany()
                        .HasForeignKey("Team1TeamID");

                    b.HasOne("Fifa_WebAPI.Models.Team", "Team2")
                        .WithMany()
                        .HasForeignKey("Team2TeamID");
                });

            modelBuilder.Entity("Fifa_WebAPI.Models.Player_Team", b =>
                {
                    b.HasOne("Fifa_WebAPI.Models.Player", "Player")
                        .WithMany("Player_Teams")
                        .HasForeignKey("PlayerID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Fifa_WebAPI.Models.Team", "Team")
                        .WithMany("Player_Teams")
                        .HasForeignKey("TeamID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}