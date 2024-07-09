using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PRSServer.Models;

namespace PRSServer.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class RequestsController : ControllerBase {
        private readonly PrsDbContext _context;

        public RequestsController(PrsDbContext context) {
            _context = context;
        }

        [HttpPut("/api/requests/review/{id}")]
        public async Task<IActionResult> Review(int id) {

            var request = await _context.RequestLines.FindAsync(id);

            if (request == null) {
                return NotFound();
            }
            if (request.TotalAmount <= 50) {
                request.Status = "APPROVED";

            } else {
                request.Status = "Review";
            }
            await _context.SaveChangesAsync();

            return Ok($"request status for {id} has been reviewed and status is {request.Status}");


        }

        // put method for Approve status
        [HttpPut("api/requests/approve{id}")]
        public async Task<IActionResult> APPROVE(int id) {
            var request = await _context.Requests.FindAsync(id);
            if (request == null) {
                return NotFound();
            }
            request.Status = "APPROVED";
            await _context.SaveChangesAsync();
            return Ok($"request with {id} is APPROVED");
        }
        [HttpPut("api/requests/REJECTED{id}")]
        public async Task<IActionResult> REJECT(int id) {
            var request = await _context.Requests.FindAsync(id);
            if (request == null) {
                return NotFound();
            }

            request.Status = "REJECTED";
            await _context.SaveChangesAsync();
            return Ok($"request with {id} is REJECTED");
        }
        // get requests by user Id
        [HttpGet("api/requests/reviews/{userId}")]
        public async Task<ActionResult<IEnumerable>> GetReviews(int UserId) 
            {

            var reviews = await _context.Requests
                .Where(r => r.Status == "REVIEW" && r.UserId != UserId)
                .ToListAsync();
            return Ok(reviews);

        }
        [HttpGet("status/{status}")]
        public async Task<ActionResult<IEnumerable<Request>>> GetRequestByStatus(string status) {
            return await _context.Requests
                                    .Include(x => x.User)
                                    .Where(x => x.Status == status).ToListAsync();
        }

        // GET: api/Requests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Request>>> GetRequests()
        {
            return await _context.Requests.ToListAsync();
        }

        // GET: api/Requests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Request>> GetRequest(int id)
        {
            var request = await _context.Requests.FindAsync(id);

            if (request == null)
            {
                return NotFound();
            }

            return request;
        }

        // PUT: api/Requests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRequest(int id, Request request)
        {
            if (id != request.Id)
            {
                return BadRequest();
            }

            _context.Entry(request).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RequestExists(id))
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

        // POST: api/Requests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Request>> PostRequest(Request request)
        {
            _context.Requests.Add(request);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRequest", new { id = request.Id }, request);
        }

        // DELETE: api/Requests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRequest(int id)
        {
            var request = await _context.Requests.FindAsync(id);
            if (request == null)
            {
                return NotFound();
            }

            _context.Requests.Remove(request);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RequestExists(int id)
        {
            return _context.Requests.Any(e => e.Id == id);
        }
    }
}
