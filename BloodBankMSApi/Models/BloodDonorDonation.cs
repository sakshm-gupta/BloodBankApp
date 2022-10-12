using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankMSApi.Models
{
    public class BloodDonorDonation
    {

        public int Id { get; set; }
        
        [Required]
        public int BloodDonorId { get; set; }
        // [ForeignKey]

        public virtual BloodDonor? BloodDonor {get;set;}

        [Required]
        [DataType(DataType.Date)]
        public DateTime BloodDonationDate { get; set; }
        
        [Required]
        [Range (0, int.MaxValue)]
        public int NumberofBottle { get; set; }
        
        [Required]
        [Range(0, int.MaxValue)]
        public double Weight { get; set; }
        
        [Required]
        [Range(0, int.MaxValue)]
        public double HBCount { get; set; }

        [Required]
        public int BloodDonationCampId { get; set; }
        public virtual BloodDonationCamp? BloodDonationCamp { get; set; }
        [Required]
        public DateTime ExpiryDate { get; set; }

        [ForeignKey("BloodBank")]
        public int BloodBankId { get; set; }
    }
}
