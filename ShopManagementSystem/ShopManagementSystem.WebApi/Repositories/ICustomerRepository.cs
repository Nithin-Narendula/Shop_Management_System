using ShopManagementSystem.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopManagementSystem.WebApi.Repositories
{
    public interface ICustomerRepository
    {
        Task<IEnumerable<CustomerDetail>> GetCustomerDetailsAsync();
        Task<CustomerDetail> GetCustomer(int customerId);
        Task AddCustomer(CustomerDetail customer);
        Task<CustomerDetail> UpdateCustomerDetailsAsync(CustomerDetail customer);
        Task DeleteCustomerAsync(int customerId);
    }
}
