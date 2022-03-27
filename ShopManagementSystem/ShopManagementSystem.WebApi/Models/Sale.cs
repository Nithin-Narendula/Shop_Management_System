using System;
using System.Collections.Generic;

#nullable disable

namespace ShopManagementSystem.WebApi.Models
{
    public partial class Sale
    {
        public string CustomerId { get; set; }
        public string ProductName { get; set; }
        public int? Quantity { get; set; }
        public long? Bill { get; set; }
    }
}
