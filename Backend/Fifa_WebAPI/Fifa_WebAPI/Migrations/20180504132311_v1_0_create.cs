using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Fifa_WebAPI.Migrations
{
    public partial class v1_0_create : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Match_Team_Team1ID",
                table: "Match");

            migrationBuilder.DropForeignKey(
                name: "FK_Match_Team_Team2ID",
                table: "Match");

            migrationBuilder.DropForeignKey(
                name: "FK_Player_Team_TeamID",
                table: "Player");

            migrationBuilder.DropIndex(
                name: "IX_Player_TeamID",
                table: "Player");

            migrationBuilder.DropColumn(
                name: "TeamID",
                table: "Player");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Team",
                newName: "TeamID");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Score",
                newName: "ScoreID");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Player",
                newName: "PlayerID");

            migrationBuilder.RenameColumn(
                name: "Team2ID",
                table: "Match",
                newName: "Team2TeamID");

            migrationBuilder.RenameColumn(
                name: "Team1ID",
                table: "Match",
                newName: "Team1TeamID");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Match",
                newName: "MatchID");

            migrationBuilder.RenameIndex(
                name: "IX_Match_Team2ID",
                table: "Match",
                newName: "IX_Match_Team2TeamID");

            migrationBuilder.RenameIndex(
                name: "IX_Match_Team1ID",
                table: "Match",
                newName: "IX_Match_Team1TeamID");

            migrationBuilder.CreateTable(
                name: "Player_Teams",
                columns: table => new
                {
                    PlayerID = table.Column<int>(nullable: false),
                    TeamID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Player_Teams", x => new { x.PlayerID, x.TeamID });
                    table.ForeignKey(
                        name: "FK_Player_Teams_Player_PlayerID",
                        column: x => x.PlayerID,
                        principalTable: "Player",
                        principalColumn: "PlayerID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Player_Teams_Team_TeamID",
                        column: x => x.TeamID,
                        principalTable: "Team",
                        principalColumn: "TeamID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Player_Teams_TeamID",
                table: "Player_Teams",
                column: "TeamID");

            migrationBuilder.AddForeignKey(
                name: "FK_Match_Team_Team1TeamID",
                table: "Match",
                column: "Team1TeamID",
                principalTable: "Team",
                principalColumn: "TeamID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Match_Team_Team2TeamID",
                table: "Match",
                column: "Team2TeamID",
                principalTable: "Team",
                principalColumn: "TeamID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Match_Team_Team1TeamID",
                table: "Match");

            migrationBuilder.DropForeignKey(
                name: "FK_Match_Team_Team2TeamID",
                table: "Match");

            migrationBuilder.DropTable(
                name: "Player_Teams");

            migrationBuilder.RenameColumn(
                name: "TeamID",
                table: "Team",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "ScoreID",
                table: "Score",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "PlayerID",
                table: "Player",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "Team2TeamID",
                table: "Match",
                newName: "Team2ID");

            migrationBuilder.RenameColumn(
                name: "Team1TeamID",
                table: "Match",
                newName: "Team1ID");

            migrationBuilder.RenameColumn(
                name: "MatchID",
                table: "Match",
                newName: "ID");

            migrationBuilder.RenameIndex(
                name: "IX_Match_Team2TeamID",
                table: "Match",
                newName: "IX_Match_Team2ID");

            migrationBuilder.RenameIndex(
                name: "IX_Match_Team1TeamID",
                table: "Match",
                newName: "IX_Match_Team1ID");

            migrationBuilder.AddColumn<int>(
                name: "TeamID",
                table: "Player",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Player_TeamID",
                table: "Player",
                column: "TeamID");

            migrationBuilder.AddForeignKey(
                name: "FK_Match_Team_Team1ID",
                table: "Match",
                column: "Team1ID",
                principalTable: "Team",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Match_Team_Team2ID",
                table: "Match",
                column: "Team2ID",
                principalTable: "Team",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Player_Team_TeamID",
                table: "Player",
                column: "TeamID",
                principalTable: "Team",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
