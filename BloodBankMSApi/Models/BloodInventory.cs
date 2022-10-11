using BloodBankMSApi;
using System.ComponentModel.DataAnnotations;

namespace BloodBankMSApi.Models
{
    public class BloodInventory
    {
        [Required]
        public int BloodInventoryId { get; set; }
        [Required]
        public BloodGroup BloodGroup { get; set; }
        [Required]

        public int NumberofBottles { get; set; }

        [Required]
        public int AdminId { get; set; }

        public virtual Admin? Admin { get; set; }
        [Required]
        public DateTime ExpiryDate { get; set; }
    }
}
