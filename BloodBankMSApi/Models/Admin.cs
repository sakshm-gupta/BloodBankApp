using System.ComponentModel.DataAnnotations;
using System.Reflection.PortableExecutable;

namespace BloodBankMSApi.Models
{
    public class Admin
    {
        //[Required]
        public int Id { get; set; }//bloodbankId
        [Required]
        public string BloodBankName { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        [RegularExpression(@"^\d{10}$")]
        public long ContactNo { get; set; }
        [Required]
        public string UserId{ get; set; }
        [Required]
        public int Password{ get; set; }
    }
}
