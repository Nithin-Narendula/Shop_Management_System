using System;
using System.Collections.Generic;

#nullable disable

namespace ShopManagementSystem.WebApi.Models
{
    public partial class EmployeeDetail
    {
        public string EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string PhoneNumber { get; set; }
        public string MailId { get; set; }
        public string Address { get; set; }
        public string Department { get; set; }
    }
}
