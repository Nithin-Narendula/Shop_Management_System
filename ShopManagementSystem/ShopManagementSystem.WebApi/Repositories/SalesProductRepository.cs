using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagementSystem.WebApi.Models;
namespace ShopManagementSystem.WebApi.Repositories
{
    public class SalesProductRepository : ISalesProductRepository
    {
        private readonly ETsroreDBContext _context;

        public SalesProductRepository(ETsroreDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SalesProductTable>> GetSalesProductDetailsAsync()
        {
            var records = await _context.SalesProductTables.ToListAsync();
            return records;
        }

        public async Task<SalesProductTable> GetSalesProduct(string productId)
        {
            var book = await _context.SalesProductTables.FindAsync(productId);
            return book;
        }
        public async Task AddSalesProduct(SalesProductTable salesProduct)
        {
            await _context.SalesProductTables.AddAsync(salesProduct);
            await _context.SaveChangesAsync();
        }

        public async Task<SalesProductTable> UpdateSalesProductDetailsAsync(SalesProductTable salesProduct)
        {


            var emp = new SalesProductTable()
            {
               ProductId = salesProduct.ProductId,
               ProductName = salesProduct.ProductName,
               Hsnnumber = salesProduct.Hsnnumber,
               Quantity = salesProduct.Quantity,
               SalePrice = salesProduct.SalePrice,
               Gst = salesProduct.Gst
            };

            _context.SalesProductTables.Update(emp);
            await _context.SaveChangesAsync();
            return emp;
        }

        public async Task DeleteSalesProductAsync(string productId)
        {
            var emp = new SalesProductTable()
            {
                ProductId = productId
            };
            _context.SalesProductTables.Remove(emp);
            await _context.SaveChangesAsync();
        }
    }
}
