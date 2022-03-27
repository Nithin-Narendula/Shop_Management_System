using System;
using System.Collections.Generic;

#nullable disable

namespace ShopManagementSystem.WebApi.Models
{
    public partial class ProductDetail
    {
        public string ItemId { get; set; }
        public string ProductName { get; set; }
        public string Department { get; set; }
        public string Price { get; set; }
        public int? Quantity { get; set; }
    }
}
