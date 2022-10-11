using System.ComponentModel.DataAnnotations;

namespace BloodBankMSApi.Models
{
    public class BloodDonor
    {
        public int BloodDonorId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        [RegularExpression(@"^\d{10}$")]
        public long ContactNo { get; set; }
        [Required]
        public BloodGroup BloodGroup { get; set; }
    }
}
