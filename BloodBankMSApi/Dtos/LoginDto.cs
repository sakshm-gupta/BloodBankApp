using System.Data;

namespace BloodBankMSApi.Dtos
{
    public class LoginDto
    {
        public string Username { get; set; }
        
        public string Token { get; set; }
    }
}
