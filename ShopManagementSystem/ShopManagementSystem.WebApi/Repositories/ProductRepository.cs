using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagementSystem.WebApi.Models;
namespace ShopManagementSystem.WebApi.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ETsroreDBContext _context;

        public ProductRepository(ETsroreDBContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<ProductDetail>> GetProductDetailsAsync()
        {
            var records = await _context.ProductDetails.ToListAsync();
            return records;
        }

        public async Task<ProductDetail> Getproduct(string itemId)
        {
            var book = await _context.ProductDetails.FindAsync(itemId);
            return book;
        }
        public async Task AddProduct(ProductDetail product)
        {
            await _context.ProductDetails.AddAsync(product);
            await _context.SaveChangesAsync();
        }

        public async Task<ProductDetail> UpdateProductDetailsAsync(ProductDetail product)
        {
            var emp = new ProductDetail()
            {
                ItemId = product.ItemId,
                ProductName = product.ProductName,
                Department = product.Department,
                Price = product.Price,
                Quantity = product.Quantity
            };

            _context.ProductDetails.Update(emp);
            await _context.SaveChangesAsync();
            return emp;
        }

        public async Task DeleteProductAsync(string itemId)
        {
            var emp = new ProductDetail()
            {
                ItemId = itemId
            };
            _context.ProductDetails.Remove(emp);
            await _context.SaveChangesAsync();
        }
    }
}
