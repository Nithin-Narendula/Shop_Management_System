using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagementSystem.WebApi.Models;
namespace ShopManagementSystem.WebApi.Repositories
{
    public class PurchaseRepository : IPurchaseRepository
    {
        private readonly ETsroreDBContext _context;
        public PurchaseRepository(ETsroreDBContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<PurchaseDetail>> GetPurchaseDetailsAsync()
        {
            var records = await _context.PurchaseDetails.ToListAsync();
            return records;
        }

        public async Task<PurchaseDetail> GetPurchase(string productId)
        {
            var book = await _context.PurchaseDetails.FindAsync(productId);
            return book;
        }
        public async Task AddPurchase(PurchaseDetail purchase)
        {
            await _context.PurchaseDetails.AddAsync(purchase);
            await _context.SaveChangesAsync();
        }

        public async Task<PurchaseDetail> UpdatePurchaseDetailsAsync(PurchaseDetail purchase)
        {
            var emp = new PurchaseDetail()
            {
                ProductId = purchase.ProductId,
                ProductName =purchase.ProductName,
                SupplierId = purchase.SupplierId
            };
            _context.PurchaseDetails.Update(emp);
            await _context.SaveChangesAsync();
            return emp;
        }

        public async Task DeletePurchaseAsync(string productId)
        {
            var emp = new PurchaseDetail()
            {
                ProductId = productId
            };
            _context.PurchaseDetails.Remove(emp);
            await _context.SaveChangesAsync();
        }
    }
}
