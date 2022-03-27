using ShopManagementSystem.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopManagementSystem.WebApi.Repositories
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<EmployeeDetail>> GetEmployeeDetailsAsync();
        Task<EmployeeDetail> GetEmployee(string employeeId);
        Task AddEmployee(EmployeeDetail employee);
        Task<EmployeeDetail> UpdateEmployeeDetailsAsync( EmployeeDetail employee);
        Task DeleteEmployeeAsync(string employeeId);
    }
}
