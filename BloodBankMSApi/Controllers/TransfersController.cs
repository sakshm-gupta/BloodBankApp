using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BloodBankMSApi.Models;
using BloodBankMSApi.Models.Transfer;
using Microsoft.AspNetCore.Authorization;

namespace BloodBankMSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]

    public class TransfersController : ControllerBase
    {
        private readonly BloodBankMSContext _context;



        public TransfersController(BloodBankMSContext context)
        {
            _context = context;
        }



        // GET: api/Transfers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transfer>>> GetTransfer()
        {
            return await _context.Transfer.ToListAsync();
        }



        // GET: api/Transfers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transfer>> GetTransfer(int id)
        {
            var transfer = await _context.Transfer.FindAsync(id);



            if (transfer == null)
            {
                return NotFound();
            }



            return transfer;
        }



        // PUT: api/Transfers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransfer(int id, Transfer transfer)
        {
            if (id != transfer.Id)
            {
                return BadRequest();
            }



            _context.Entry(transfer).State = EntityState.Modified;



            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransferExists(id))
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



        // POST: api/Transfers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Transfer>> PostTransfer(Transfer transfer)
        {



            BloodInventory fromBankInventory = _context.BloodInventories.FirstOrDefault(b => b.BloodBankId == transfer.FromId && b.BloodGroup == transfer.BloodGroup);
            if (fromBankInventory == null || fromBankInventory.NumberofBottles < transfer.NumberOfBottles) return BadRequest();
            BloodInventory toBloodInventory = _context.BloodInventories.FirstOrDefault(b => b.BloodBankId == transfer.ToId && b.BloodGroup == transfer.BloodGroup);
            fromBankInventory.NumberofBottles -= transfer.NumberOfBottles;
            if (toBloodInventory == null)
            {
                toBloodInventory = new BloodInventory();
                toBloodInventory.BloodBankId = transfer.ToId;
                toBloodInventory.BloodGroup = transfer.BloodGroup;
            }
            toBloodInventory.NumberofBottles += transfer.NumberOfBottles;
            _context.BloodInventories.Update(fromBankInventory);
            _context.BloodInventories.Update(toBloodInventory);
            if (fromBankInventory.NumberofBottles == 0) _context.BloodInventories.Remove(fromBankInventory);



            //_context.Transfer.Add(transfer);
            await _context.SaveChangesAsync();



            return CreatedAtAction("GetTransfer", new { id = transfer.Id }, transfer);
        }



        // DELETE: api/Transfers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransfer(int id)
        {
            var transfer = await _context.Transfer.FindAsync(id);
            if (transfer == null)
            {
                return NotFound();
            }



            _context.Transfer.Remove(transfer);
            await _context.SaveChangesAsync();



            return NoContent();
        }



        private bool TransferExists(int id)
        {
            return _context.Transfer.Any(e => e.Id == id);
        }
    }
}
