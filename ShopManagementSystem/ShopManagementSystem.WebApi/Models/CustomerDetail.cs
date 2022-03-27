using System;
using System.Collections.Generic;

#nullable disable

namespace ShopManagementSystem.WebApi.Models
{
    public partial class CustomerDetail
    {
        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
    }
}
