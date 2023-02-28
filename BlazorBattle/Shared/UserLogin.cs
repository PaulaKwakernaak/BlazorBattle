using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BlazorBattle.Shared
{
    public class UserLogin
    {
        [Required]
        public string UserName { get; set; }

        [Required]       
        public string Password { get; set; }
    }
}
