using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Fifa_WebAPI.DbContext;
using Fifa_WebAPI.Models;

namespace Fifa_WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Teams")]
    public class TeamsController : Controller
    {
        private readonly FifaDbContext _context;

        public TeamsController(FifaDbContext context)
        {
            _context = context;
        }

        // GET: api/Teams
        [HttpGet]
        public IEnumerable<Team> GetTeams()
        {
            return _context.Teams;
        }

        // GET: api/Teams/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTeam([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var team = await _context.Teams.SingleOrDefaultAsync(m => m.TeamID == id);

            if (team == null)
            {
                return NotFound();
            }

            return Ok(team);
        }

        // PUT: api/Teams/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeam([FromRoute] int id, [FromBody] Team team)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != team.TeamID)
            {
                return BadRequest();
            }

            _context.Entry(team).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Teams
        [HttpPost]
        public async Task<IActionResult> PostTeam([FromBody] Team team)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Teams.Add(team);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTeam", new { id = team.TeamID }, team);
        }

        // DELETE: api/Teams/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeam([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var team = await _context.Teams.SingleOrDefaultAsync(m => m.TeamID == id);
            if (team == null)
            {
                return NotFound();
            }

            _context.Teams.Remove(team);
            await _context.SaveChangesAsync();

            return Ok(team);
        }

        private bool TeamExists(int id)
        {
            return _context.Teams.Any(e => e.TeamID == id);
        }
    }
}