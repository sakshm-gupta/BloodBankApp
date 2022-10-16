using System.ComponentModel.DataAnnotations;
using System.Data;

namespace BloodBankMSApi.Models
{
    public class User
    {
     
        //public int Id { get; set; }
        //[Required]
        //public string UserId { get; set; }
        //[Required]
        //public string Password { get; set; }

        public int Id { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }

    }
}
