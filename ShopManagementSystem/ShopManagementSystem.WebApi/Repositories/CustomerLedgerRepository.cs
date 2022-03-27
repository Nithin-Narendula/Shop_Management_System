using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagementSystem.WebApi.Models;

namespace ShopManagementSystem.WebApi.Repositories
{
    public class CustomerLedgerRepository : ICustomerLedgerRepository
    {
        private readonly ETsroreDBContext _context;
        public CustomerLedgerRepository(ETsroreDBContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<CustomerLedgerDetail>> GetCustomerLegerDetailsAsync()
        {
            var records = await _context.CustomerLedgerDetails.ToListAsync();
            return records;
        }

        public async Task<CustomerLedgerDetail> GetCustomerLedger(string invoiceId)
        {
            var book = await _context.CustomerLedgerDetails.FindAsync(invoiceId);
            return book;
        }
        public async Task AddCustomerLedger(CustomerLedgerDetail customerLedger)
        {
            await _context.CustomerLedgerDetails.AddAsync(customerLedger);
            await _context.SaveChangesAsync();
        }

        public async Task<CustomerLedgerDetail> UpdateCustomerLedgerDetailsAsync(CustomerLedgerDetail customerLedger)
        {


            var emp = new CustomerLedgerDetail()
            {
                InvoiceId = customerLedger.InvoiceId,
                GrandTotalAmount = customerLedger.GrandTotalAmount,
                PaidAmount = customerLedger.PaidAmount,
                DueAmount = customerLedger.DueAmount,
                BalanceAmount = customerLedger.BalanceAmount
            };

            _context.CustomerLedgerDetails.Update(emp);
            await _context.SaveChangesAsync();
            return emp;
        }

        public async Task DeleteCustomerLedgerAsync(string invoiceId)
        {
            var emp = new CustomerLedgerDetail()
            {
                InvoiceId = invoiceId
            };
            _context.CustomerLedgerDetails.Remove(emp);
            await _context.SaveChangesAsync();
        }

    }
}
