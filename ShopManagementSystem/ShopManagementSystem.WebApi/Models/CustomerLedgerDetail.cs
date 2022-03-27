using System;
using System.Collections.Generic;

#nullable disable

namespace ShopManagementSystem.WebApi.Models
{
    public partial class CustomerLedgerDetail
    {
        public string InvoiceId { get; set; }
        public long? GrandTotalAmount { get; set; }
        public long? PaidAmount { get; set; }
        public long? DueAmount { get; set; }
        public long? BalanceAmount { get; set; }
    }
}
