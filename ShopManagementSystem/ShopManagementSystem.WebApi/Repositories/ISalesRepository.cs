using ShopManagementSystem.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopManagementSystem.WebApi.Repositories
{
    public interface ISalesRepository
    {
        Task<IEnumerable<Sale>> GetSalesDetailsAsync();
        Task<Sale> GetSale(string customerId);
        Task AddSale(Sale sale);
        Task<Sale> UpdateSaleDetailsAsync(Sale sale);
        Task DeleteSaleAsync(string customerId);
    }
}
