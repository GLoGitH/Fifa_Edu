using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Fifa_WebAPI.Migrations
{
    public partial class v0_0_InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable
				(
                name: "Score",
                columns: table => new
                 {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Contestant1 = table.Column<int>(nullable: false),
                    Contestant2 = table.Column<int>(nullable: false),
                    GoalsMadeByContestant1 = table.Column<int>(nullable: false),
                    GoalsMadeByContestant2 = table.Column<int>(nullable: false),
                    ScoreKind = table.Column<int>(nullable: false),
                    ScoreValue1 = table.Column<int>(nullable: false),
                    ScoreValue2 = table.Column<int>(nullable: false),
                    WhoWon = table.Column<int>(nullable: false)
                 },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Score", x => x.ID);
                });

            migrationBuilder.CreateTable
				(
                name: "Team",
                columns: table => new
                 {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    TeamName = table.Column<string>(nullable: true)
                 },
                constraints: table =>
                 {
                    table.PrimaryKey("PK_Team", x => x.ID);
                 }
			);

            migrationBuilder.CreateTable
				(
                name: "Match",
                columns: table => new
                 {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MatchDate = table.Column<DateTime>(nullable: false),
                    ScoreID = table.Column<int>(nullable: true),
                    Team1ID = table.Column<int>(nullable: true),
                    Team2ID = table.Column<int>(nullable: true)
                 },
                constraints: table =>
                 {
                    table.PrimaryKey("PK_Match", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Match_Score_ScoreID",
                        column: x => x.ScoreID,
                        principalTable: "Score",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Match_Team_Team1ID",
                        column: x => x.Team1ID,
                        principalTable: "Team",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Match_Team_Team2ID",
                        column: x => x.Team2ID,
                        principalTable: "Team",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                 }
			);

            migrationBuilder.CreateTable
				(
                name: "Player",
                columns: table => new
                 {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    TeamID = table.Column<int>(nullable: true)
                 },
                constraints: table =>
                 {
                    table.PrimaryKey("PK_Player", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Player_Team_TeamID",
                        column: x => x.TeamID,
                        principalTable: "Team",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                 }
			);

            migrationBuilder.CreateIndex
				(
                name: "IX_Match_ScoreID",
                table: "Match",
                column: "ScoreID"
				);

            migrationBuilder.CreateIndex
				(
                name: "IX_Match_Team1ID",
                table: "Match",
                column: "Team1ID"
				);

            migrationBuilder.CreateIndex
				(
                name: "IX_Match_Team2ID",
                table: "Match",
                column: "Team2ID"
				);

            migrationBuilder.CreateIndex
				(
                name: "IX_Player_TeamID",
                table: "Player",
                column: "TeamID"
				);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable
				(name: "Match");

            migrationBuilder.DropTable
				(name: "Player");

            migrationBuilder.DropTable
				(name: "Score");

            migrationBuilder.DropTable
				(name: "Team");
        }
    }
}
