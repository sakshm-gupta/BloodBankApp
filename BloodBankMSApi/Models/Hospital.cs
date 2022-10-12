using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankMSApi.Models
{
    public class Hospital
    {
        public int Id { get; set; }
        
        [Required]
        public string HospitalName { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string City { get; set; }
        
        [Required]
        [RegularExpression(@"^\d{10}$")]
        public long ContactNo { get; set; }

        //[ForeignKey]
        [Required]
        public int BloodBankId { get; set; }
        
        public virtual BloodBank? BloodBank { get; set; }
    }
}
