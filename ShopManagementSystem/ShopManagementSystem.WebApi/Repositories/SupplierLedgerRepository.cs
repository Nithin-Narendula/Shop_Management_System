using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagementSystem.WebApi.Models;
namespace ShopManagementSystem.WebApi.Repositories
{
    public class SupplierLedgerRepository : ISupplierLedgerRepository
    {
        private readonly ETsroreDBContext _context;

        public SupplierLedgerRepository(ETsroreDBContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<SupplierLedgerDetail>> GetSuppLedgDetailsAsync()
        {
            var records = await _context.SupplierLedgerDetails.ToListAsync();
            return records;
        }

        public async Task<SupplierLedgerDetail> GetSuppLedg(string invoiceId)
        {
            var book = await _context.SupplierLedgerDetails.FindAsync(invoiceId);
            return book;
        }
        public async Task AddSuppLedge(SupplierLedgerDetail supplierLedger)
        {
            await _context.SupplierLedgerDetails.AddAsync(supplierLedger);
            await _context.SaveChangesAsync();
        }

        public async Task<SupplierLedgerDetail> UpdateSuppLedgeDetailsAsync(SupplierLedgerDetail supplierLedger)
        {


            var emp = new SupplierLedgerDetail()
            {
               InvoiceId = supplierLedger.InvoiceId,
               GrandTotalAmount = supplierLedger.GrandTotalAmount,
               PaidAmount = supplierLedger.PaidAmount,
               DueAmount = supplierLedger.DueAmount,
               BalanceAmount = supplierLedger.BalanceAmount
            };

            _context.SupplierLedgerDetails.Update(emp);
            await _context.SaveChangesAsync();
            return emp;
        }

        public async Task DeleteSuppLedgAsync(string invoiceId)
        {
            var emp = new SupplierLedgerDetail()
            {
                InvoiceId = invoiceId
            };
            _context.SupplierLedgerDetails.Remove(emp);
            await _context.SaveChangesAsync();
        }
    }
}
