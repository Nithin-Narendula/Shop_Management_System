using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace ShopManagementSystem.WebApi.Models
{
    public partial class SupplierDetail
    {
        public string SupplierId { get; set; }
        public string SupplierCompany { get; set; }
        public string ContactPerson { get; set; }
        public string Phone { get; set; }
    }
}
