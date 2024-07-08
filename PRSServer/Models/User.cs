using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net.Mime;

namespace PRSServer.Models {
    [Index(nameof(UserName),IsUnique=true)]
    public class User {

        public int Id { get; set; }
        [StringLength(30)]
        public string UserName { get; set; } = string.Empty;
        [StringLength(30)]
        public string Password { get; set; } = string.Empty;
        [StringLength(30)]
        public string FirstName { get; set; } = string.Empty ;
        [StringLength(30)]
        public string LastName { get; set; } = string.Empty;
        [StringLength (12)]
        public string Phone { get; set; } = string.Empty;
        [StringLength(255)]

        public string Email { get; set; }= string.Empty;
        [Column(TypeName = "bit")]

        public bool IsReviewer { get; set; }

        [Column(TypeName ="bit")]
        public bool IsAdmin { get; set; }




    }
}
