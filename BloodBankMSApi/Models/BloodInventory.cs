using BloodBankMSApi;
using System.ComponentModel.DataAnnotations;

namespace BloodBankMSApi.Models
{
    public class BloodInventory
    {
        [Required]
        public int Id { get; set; }
        
        [Required]
        [Range(1,8)]
        public BloodGroup BloodGroup { get; set; }
        
        [Required]
        [Range(0,int.MaxValue)]
        public int NumberofBottles { get; set; }

        [Required]
        public int BloodBankId { get; set; }

        public virtual BloodBank? BloodBank { get; set; }
        
        [Required]
        [DataType(DataType.Date)]
        public DateTime ExpiryDate { get; set; }
    }
}
