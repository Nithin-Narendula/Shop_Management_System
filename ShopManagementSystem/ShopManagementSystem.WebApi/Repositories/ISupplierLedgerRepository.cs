using ShopManagementSystem.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopManagementSystem.WebApi.Repositories
{
    public interface ISupplierLedgerRepository
    {
        Task<IEnumerable<SupplierLedgerDetail>> GetSuppLedgDetailsAsync();
        Task<SupplierLedgerDetail> GetSuppLedg(string invoiceId);
        Task AddSuppLedge(SupplierLedgerDetail supplierLedger);
        Task<SupplierLedgerDetail> UpdateSuppLedgeDetailsAsync(SupplierLedgerDetail supplierLedger);
        Task DeleteSuppLedgAsync(string invoiceId);
    }
}
