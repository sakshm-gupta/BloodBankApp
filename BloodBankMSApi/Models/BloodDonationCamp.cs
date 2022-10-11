using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankMSApi.Models
{
    public class BloodDonationCamp
    {
        public int BloodDonationCampId { get; set; }
        [Required]
        public string CampName { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string City { get; set; }

        //[ForeignKey]
        [Required]
        public int AdminBloodBankId { get; set; }

        public virtual Admin? Admin { get; set; }
        [Required]
        public DateTime CampStartDate { get; set; }
        [Required]
        public DateTime CampEndDate { get; set; }

    }
}
