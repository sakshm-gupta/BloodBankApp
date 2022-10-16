using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BloodBankMSApi.Models;
using Microsoft.AspNetCore.Authorization;

namespace BloodBankMSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]


    public class BloodDonorsController : ControllerBase
    {
        private readonly BloodBankMSContext _context;

        public BloodDonorsController(BloodBankMSContext context)
        {
            _context = context;
        }

        // GET: api/BloodDonors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BloodDonor>>> GetBloodDonors()
        {
            return await _context.BloodDonors.ToListAsync();
        }

        // GET: api/BloodDonors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BloodDonor>> GetBloodDonor(int id)
        {
            var bloodDonor = await _context.BloodDonors.FindAsync(id);

            if (bloodDonor == null)
            {
                return NotFound();
            }

            return bloodDonor;
        }

        // PUT: api/BloodDonors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBloodDonor(int id, BloodDonor bloodDonor)
        {
            if (id != bloodDonor.Id)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.Entry(bloodDonor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BloodDonorExists(id))
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

        // POST: api/BloodDonors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]

        public async Task<ActionResult<BloodDonor>> PostBloodDonor(BloodDonor bloodDonor)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.BloodDonors.Add(bloodDonor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBloodDonor", new { id = bloodDonor.Id }, bloodDonor);
        }

        // DELETE: api/BloodDonors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBloodDonor(int id)
        {
            var bloodDonor = await _context.BloodDonors.FindAsync(id);
            if (bloodDonor == null)
            {
                return NotFound();
            }

            _context.BloodDonors.Remove(bloodDonor);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BloodDonorExists(int id)
        {
            return _context.BloodDonors.Any(e => e.Id == id);
        }
    }
}
