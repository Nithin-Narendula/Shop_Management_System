using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagementSystem.WebApi.Models;
namespace ShopManagementSystem.WebApi.Repositories
{
    public class SalesRepository : ISalesRepository
    {
        private readonly ETsroreDBContext _context;

        public SalesRepository(ETsroreDBContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Sale>> GetSalesDetailsAsync()
        {
            var records = await _context.Sales.ToListAsync();
            return records;
        }

        public async Task<Sale> GetSale(string customerId)
        {
            var book = await _context.Sales.FindAsync(customerId);
            return book;
        }
        public async Task AddSale(Sale sale)
        {
            await _context.Sales.AddAsync(sale);
            await _context.SaveChangesAsync();
        }

        public async Task<Sale> UpdateSaleDetailsAsync(Sale sale)
        {


            var emp = new Sale()
            {
                CustomerId = sale.CustomerId,
                ProductName = sale.ProductName,
                Quantity = sale.Quantity,
                Bill = sale.Bill
            };

            _context.Sales.Update(emp);
            await _context.SaveChangesAsync();
            return emp;
        }

        public async Task DeleteSaleAsync(string customerId)
        {
            var emp = new Sale()
            {
                CustomerId = customerId
            };
            _context.Sales.Remove(emp);
            await _context.SaveChangesAsync();
        }
    }
}
