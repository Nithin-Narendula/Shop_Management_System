using ShopManagementSystem.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopManagementSystem.WebApi.Repositories
{
    public interface ICustomerLedgerRepository
    {
        Task<IEnumerable<CustomerLedgerDetail>> GetCustomerLegerDetailsAsync();
        Task<CustomerLedgerDetail> GetCustomerLedger(string invoiceId);
        Task AddCustomerLedger(CustomerLedgerDetail customerLedger);
        Task<CustomerLedgerDetail> UpdateCustomerLedgerDetailsAsync(CustomerLedgerDetail customerLedger);
        Task DeleteCustomerLedgerAsync(string invoiceId);

    }
}
