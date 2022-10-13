using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BloodBankMSApi.Dtos;
using BloodBankMSApi.Models;
using System.Configuration;

namespace BloodBankMSApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly BloodBankMSContext _context;
        private readonly IConfiguration config;

        public UsersController(BloodBankMSContext context, IConfiguration config)
        {
            _context = context;
            this.config = config;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> Register(User user)
        {

            if (!ModelState.IsValid)//added
            {
                return BadRequest(ModelState);
            }


            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }
        //----------------------------------------
        //Post: spi/Users/login
        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(User user)
        {
            if (ModelState.IsValid)
            {
                //user exists?
                var existingUser = _context.Users.FirstOrDefault(
                    u => u.Username == user.Username
                    && u.Password == user.Password);

                //not correct => 404 not found
                if (existingUser == null)
                {
                    return NotFound();
                }
                //correct => Ok(loginDto)
                LoginDto loginDto = new LoginDto
                {
                    Username = user.Username,
                 
                    Token = GenerateJwtToken(existingUser)
                };
                return Ok(loginDto);
            }
            return BadRequest(ModelState);
        }
        private string GenerateJwtToken(User existingUser)
        {
            var secret = config["Secret"];
            var expiryDays = config.GetValue<int>("ExpiryDays");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Issuer = config["Issuer"],
                Audience = config["Audience"],
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("id", existingUser.Id.ToString())
                    
                }),
                Expires = DateTime.UtcNow.AddDays(expiryDays),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secret)),
                    SecurityAlgorithms.HmacSha256Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
