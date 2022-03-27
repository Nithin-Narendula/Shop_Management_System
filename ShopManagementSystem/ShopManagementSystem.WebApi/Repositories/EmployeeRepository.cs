using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagementSystem.WebApi.Models;
namespace ShopManagementSystem.WebApi.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly ETsroreDBContext _context;

        public EmployeeRepository(ETsroreDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<EmployeeDetail>> GetEmployeeDetailsAsync()
        {
            var records = await _context.EmployeeDetails.ToListAsync();
            return records;
        }

        public async Task<EmployeeDetail> GetEmployee(string employeeId)
        {
            var book = await _context.EmployeeDetails.FindAsync(employeeId);
            return book;
        }
        public async Task AddEmployee(EmployeeDetail employee)
        {
            await _context.EmployeeDetails.AddAsync(employee);
            await _context.SaveChangesAsync();
        }

        public async Task<EmployeeDetail> UpdateEmployeeDetailsAsync(EmployeeDetail employee)
        {
           

                var emp = new EmployeeDetail()
                {
                EmployeeId = employee.EmployeeId,
                EmployeeName = employee.EmployeeName,
                PhoneNumber = employee.PhoneNumber,
                MailId = employee.MailId,
                Address = employee.Address,
                Department = employee.Department
                };

                _context.EmployeeDetails.Update(emp);
                await _context.SaveChangesAsync();
                return emp;        
        }

        public async Task DeleteEmployeeAsync(string employeeId)
        {
            var emp = new EmployeeDetail()
            {
                EmployeeId = employeeId
            };
            _context.EmployeeDetails.Remove(emp);
            await _context.SaveChangesAsync();
        }
    }
}
