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
    public class BloodInventoriesController : ControllerBase
    {
        private readonly BloodBankMSContext _context;

        public BloodInventoriesController(BloodBankMSContext context)
        {
            _context = context;
        }

        // GET: api/BloodInventories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BloodInventory>>> GetBloodInventories()
        {
            return await _context.BloodInventories.ToListAsync();
        }

        // GET: api/BloodInventories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BloodInventory>> GetBloodInventory(int id)
        {
            var bloodInventory = await _context.BloodInventories.FindAsync(id);

            if (bloodInventory == null)
            {
                return NotFound();
            }

            return bloodInventory;
        }

        // PUT: api/BloodInventories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBloodInventory(int id, BloodInventory bloodInventory)
        {
            if (id != bloodInventory.Id)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Entry(bloodInventory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BloodInventoryExists(id))
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

        // POST: api/BloodInventories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BloodInventory>> PostBloodInventory(BloodInventory bloodInventory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.BloodInventories.Add(bloodInventory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBloodInventory", new { id = bloodInventory.Id }, bloodInventory);
        }

        // DELETE: api/BloodInventories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBloodInventory(int id)
        {
            var bloodInventory = await _context.BloodInventories.FindAsync(id);
            if (bloodInventory == null)
            {
                return NotFound();
            }

            _context.BloodInventories.Remove(bloodInventory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BloodInventoryExists(int id)
        {
            return _context.BloodInventories.Any(e => e.Id == id);
        }
    }
}
