using Microsoft.EntityFrameworkCore;

namespace BloodBankMSApi.Models
{
    public class BloodBankMSContext : DbContext
    {
        public BloodBankMSContext(DbContextOptions options) : base(options)
        { }
        
        public DbSet<Admin> Admins { get; set; }

        public DbSet<BloodDonationCamp> BloodDonationCamps { get; set; }

        
        public DbSet<BloodDonor> BloodDonors { get; set; }
        public DbSet<BloodDonorDonation> BloodDonorDonations { get; set; }
        public DbSet<BloodInventory> BloodInventories   { get; set; }

        public DbSet<Hospital> Hospitals { get; set; }
    }
}
