using ShopManagementSystem.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopManagementSystem.WebApi.Repositories
{
    public interface IPurchaseRepository
    {
        Task<IEnumerable<PurchaseDetail>> GetPurchaseDetailsAsync();
        Task<PurchaseDetail> GetPurchase(string productId);
        Task AddPurchase(PurchaseDetail purchase);
        Task<PurchaseDetail> UpdatePurchaseDetailsAsync(PurchaseDetail purchase);
        Task DeletePurchaseAsync(string productId);

    }
}
