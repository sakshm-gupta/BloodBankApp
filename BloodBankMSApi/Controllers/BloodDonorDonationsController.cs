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
    public class BloodDonorDonationsController : ControllerBase
    {
        private readonly BloodBankMSContext _context;

        public BloodDonorDonationsController(BloodBankMSContext context)
        {
            _context = context;
        }

        // GET: api/BloodDonorDonations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BloodDonorDonation>>> GetBloodDonorDonations()
        {
            return await _context.BloodDonorDonations.ToListAsync();
        }

        // GET: api/BloodDonorDonations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BloodDonorDonation>> GetBloodDonorDonation(int id)
        {
            var bloodDonorDonation = await _context.BloodDonorDonations.FindAsync(id);

            if (bloodDonorDonation == null)
            {
                return NotFound();
            }


            return bloodDonorDonation;
        }

        // PUT: api/BloodDonorDonations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBloodDonorDonation(int id, BloodDonorDonation bloodDonorDonation)
        {
            if (id != bloodDonorDonation.Id)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.Entry(bloodDonorDonation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BloodDonorDonationExists(id))
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

        // POST: api/BloodDonorDonations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BloodDonorDonation>> PostBloodDonorDonation(BloodDonorDonation bloodDonorDonation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.BloodDonorDonations.Add(bloodDonorDonation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBloodDonorDonation", new { id = bloodDonorDonation.Id }, bloodDonorDonation);
        }

        // DELETE: api/BloodDonorDonations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBloodDonorDonation(int id)
        {
            var bloodDonorDonation = await _context.BloodDonorDonations.FindAsync(id);
            if (bloodDonorDonation == null)
            {
                return NotFound();
            }

            _context.BloodDonorDonations.Remove(bloodDonorDonation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BloodDonorDonationExists(int id)
        {
            return _context.BloodDonorDonations.Any(e => e.Id == id);
        }
    }
}
