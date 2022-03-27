using System;
using System.Collections.Generic;

#nullable disable

namespace ShopManagementSystem.WebApi.Models
{
    public partial class SalesProductTable
    {
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public int? Hsnnumber { get; set; }
        public int? Quantity { get; set; }
        public long? SalePrice { get; set; }
        public string Gst { get; set; }
    }
}
