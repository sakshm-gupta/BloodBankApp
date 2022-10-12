using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BloodBankMSApi.Models;

namespace BloodBankMSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BloodDonationCampsController : ControllerBase
    {
        private readonly BloodBankMSContext _context;

        public BloodDonationCampsController(BloodBankMSContext context)
        {
            _context = context;
        }

        // GET: api/BloodDonationCamps
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BloodDonationCamp>>> GetBloodDonationCamps()
        {
            return await _context.BloodDonationCamps.ToListAsync();
        }

        // GET: api/BloodDonationCamps/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BloodDonationCamp>> GetBloodDonationCamp(int id)
        {
            var bloodDonationCamp = await _context.BloodDonationCamps.FindAsync(id);

            if (bloodDonationCamp == null)
            {
                return NotFound();
            }

            return bloodDonationCamp;
        }

        // PUT: api/BloodDonationCamps/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBloodDonationCamp(int id, BloodDonationCamp bloodDonationCamp)
        {
            if (id != bloodDonationCamp.Id)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Entry(bloodDonationCamp).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BloodDonationCampExists(id))
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

        // POST: api/BloodDonationCamps
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BloodDonationCamp>> PostBloodDonationCamp(BloodDonationCamp bloodDonationCamp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.BloodDonationCamps.Add(bloodDonationCamp);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBloodDonationCamp", new { id = bloodDonationCamp.Id }, bloodDonationCamp);
        }

        // DELETE: api/BloodDonationCamps/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBloodDonationCamp(int id)
        {
            var bloodDonationCamp = await _context.BloodDonationCamps.FindAsync(id);
            if (bloodDonationCamp == null)
            {
                return NotFound();
            }

            _context.BloodDonationCamps.Remove(bloodDonationCamp);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BloodDonationCampExists(int id)
        {
            return _context.BloodDonationCamps.Any(e => e.Id == id);
        }
    }
}
