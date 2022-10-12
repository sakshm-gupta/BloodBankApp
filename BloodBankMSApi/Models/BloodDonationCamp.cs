using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankMSApi.Models
{
    public class BloodDonationCamp
    {
        public int Id { get; set; }
        
        [Required]
        public string CampName { get; set; }
        
        [Required]
        public string Address { get; set; }
        
        [Required]
        public string City { get; set; }

        //[ForeignKey]
        [Required]
        
        public int BloodBankId { get; set; }
        
        //public virtual BloodBank? BloodBank { get; set; }
        
        [Required]
        [DataType(DataType.Date)]
        public DateTime CampStartDate { get; set; }
        
        [Required]
        [DataType(DataType.Date)]
        public DateTime CampEndDate { get; set; }

    }
}
