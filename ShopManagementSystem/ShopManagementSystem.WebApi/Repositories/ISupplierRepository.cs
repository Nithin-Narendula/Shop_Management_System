using ShopManagementSystem.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopManagementSystem.WebApi.Repositories
{
    public interface ISupplierRepository
    {
        Task<IEnumerable<SupplierDetail>> GetSupplierDetailsAsync();
        Task<SupplierDetail> GetSupplier(string supplierId);
        Task AddSupplier(SupplierDetail supplier);
        Task<SupplierDetail> UpdateSupplierDetailsAsync(SupplierDetail supplier);
        Task DeleteSupplierAsync(string supplierId);

    }
}
