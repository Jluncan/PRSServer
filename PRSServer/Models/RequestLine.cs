using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace PRSServer.Models {
    public class RequestLine {

        public int Id { get; set; }

        public int RequestId { get; set; }
        [JsonIgnore]
        public virtual Request? Request { get; set; }
        public int ProductId { get; set; }
        public virtual Product? Product { get; set; }

        [Range(0, int.MaxValue, ErrorMessage = "Quantity must be higher than 0 or 1")]
        public int Quantity { get; set; } 
        public string Status { get; internal set; }
        public int TotalAmount { get; internal set; }
    }
}
