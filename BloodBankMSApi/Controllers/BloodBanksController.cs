﻿using System;
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
    public class BloodBanksController : ControllerBase
    {
        private readonly BloodBankMSContext _context;

        public BloodBanksController(BloodBankMSContext context)
        {
            _context = context;
        }

        // GET: api/BloodBanks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BloodBank>>> GetBloodBanks()
        {
            return await _context.BloodBanks.ToListAsync();
        }

        // GET: api/BloodBanks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BloodBank>> GetBloodBank(int id)
        {
            var bloodBank = await _context.BloodBanks.FindAsync(id);

            if (bloodBank == null)
            {
                return NotFound();
            }

            return bloodBank;
        }

        // PUT: api/BloodBanks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBloodBank(int id, BloodBank bloodBank)
        {
            if (id != bloodBank.Id)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Entry(bloodBank).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BloodBankExists(id))
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

        // POST: api/BloodBanks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BloodBank>> PostBloodBank(BloodBank bloodBank)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.BloodBanks.Add(bloodBank);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBloodBank", new { id = bloodBank.Id }, bloodBank);
        }

        // DELETE: api/BloodBanks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBloodBank(int id)
        {
            var bloodBank = await _context.BloodBanks.FindAsync(id);
            if (bloodBank == null)
            {
                return NotFound();
            }

            _context.BloodBanks.Remove(bloodBank);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BloodBankExists(int id)
        {
            return _context.BloodBanks.Any(e => e.Id == id);
        }
    }
}
