using System;
using System.Collections.Generic;

#nullable disable

namespace ShopManagementSystem.WebApi.Models
{
    public partial class PurchaseDetail
    {
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public string SupplierId { get; set; }
    }
}
