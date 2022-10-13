namespace BloodBankMSApi.Models.Transfer
{
    public class Transfer
    {
        public int Id { get; set; }
        public int FromId { get; set; }
        public int ToId { get; set; }
        public int NumberOfBottles { get; set; }
        public BloodGroup BloodGroup { get; set; }



    }
}
