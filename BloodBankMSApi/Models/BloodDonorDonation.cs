using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankMSApi.Models
{
    public class BloodDonorDonation
    {

        public int BloodDonorDonationId { get; set; }
        [Required]
        public string BloodDonorBloodDonorId { get; set; }
        // [ForeignKey]

        public virtual BloodDonor? BloodDonor {get;set;}

        [Required]
        public DateTime BloodDonationDate { get; set; }
        [Required]
        public int NumberofBottle { get; set; }
        [Required]
        public double Weight { get; set; }
        [Required]
        public double HBCount { get; set; }
    }
}
