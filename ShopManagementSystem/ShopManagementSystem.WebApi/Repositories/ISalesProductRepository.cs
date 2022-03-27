using ShopManagementSystem.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopManagementSystem.WebApi.Repositories
{
    public interface ISalesProductRepository
    {
        Task<IEnumerable<SalesProductTable>> GetSalesProductDetailsAsync();
        Task<SalesProductTable> GetSalesProduct(string productId);
        Task AddSalesProduct(SalesProductTable salesProduct);
        Task<SalesProductTable> UpdateSalesProductDetailsAsync(SalesProductTable salesProduct);
        Task DeleteSalesProductAsync(string productId);
    }
}
