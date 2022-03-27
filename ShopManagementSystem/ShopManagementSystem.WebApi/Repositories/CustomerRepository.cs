using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagementSystem.WebApi.Models;
namespace ShopManagementSystem.WebApi.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ETsroreDBContext _context;

        public CustomerRepository(ETsroreDBContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<CustomerDetail>> GetCustomerDetailsAsync()
        {
            var records = await _context.CustomerDetails.ToListAsync();
            return records;
        }

        public async Task<CustomerDetail> GetCustomer(int customerId)
        {
            var book = await _context.CustomerDetails.FindAsync(customerId);
            return book;
        }
        public async Task AddCustomer(CustomerDetail customer)
        {
            await _context.CustomerDetails.AddAsync(customer);
            await _context.SaveChangesAsync();
        }

        public async Task<CustomerDetail> UpdateCustomerDetailsAsync(CustomerDetail customer)
        {


            var emp = new CustomerDetail()
            {
                CustomerId = customer.CustomerId,
                CustomerName = customer.CustomerName,
                Phone =customer.Phone,
                Address = customer.Address
            };

            _context.CustomerDetails.Update(emp);
            await _context.SaveChangesAsync();
            return emp;
        }

        public async Task DeleteCustomerAsync(int customerId)
        {
            var emp = new CustomerDetail()
            {
                CustomerId = customerId
            };
            _context.CustomerDetails.Remove(emp);
            await _context.SaveChangesAsync();
        }
    }
}
