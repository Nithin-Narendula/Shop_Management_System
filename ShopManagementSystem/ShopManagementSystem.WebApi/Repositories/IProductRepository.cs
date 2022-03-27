using ShopManagementSystem.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopManagementSystem.WebApi.Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<ProductDetail>> GetProductDetailsAsync();
        Task<ProductDetail> Getproduct(string itemId);
        Task AddProduct(ProductDetail product);
        Task<ProductDetail> UpdateProductDetailsAsync(ProductDetail product);
        Task DeleteProductAsync(string itemId);
    }
}
