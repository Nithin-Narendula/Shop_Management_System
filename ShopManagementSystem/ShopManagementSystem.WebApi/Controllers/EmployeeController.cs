using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ShopManagementSystem.WebApi.Repositories;
using ShopManagementSystem.WebApi.Models;
using Microsoft.AspNetCore.Cors;
using System.Data;

namespace ShopManagementSystem.WebApi.Controllers
    
{
    [EnableCors("AllowOrigin")]
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        [HttpGet("")]
        public async Task<IEnumerable<EmployeeDetail>> GetEmployeeDetails()
        {
            var details = await _employeeRepository.GetEmployeeDetailsAsync();
            return details;           
        }
        [HttpGet("{employeeId}")]
        [ActionName("GetEmployeeAsync")]
        public async Task<IActionResult> GetEmployeeAsync([FromRoute] string employeeId)
        {
            var detail = await _employeeRepository.GetEmployee(employeeId);
            if (detail != null)
            {
                return Ok(detail);
            }
            return NotFound("Card Not Found");
        }
        [HttpPost("")]
        public async Task<IActionResult> AddEmployeeAsync([FromBody] EmployeeDetail employee)
        {
            await _employeeRepository.AddEmployee(employee);
            return CreatedAtAction(nameof(GetEmployeeAsync), new { employeeID = employee.EmployeeId }, employee);
        }
        [HttpPut("")]
        public async Task<IActionResult> UpdateEmployeeDetailsAsync( [FromBody]EmployeeDetail employee)
        {
            var detail = await _employeeRepository.UpdateEmployeeDetailsAsync(employee);
            if (detail != null)
            {
                return Ok(detail);
            }
            else
            {
                return NotFound("Card not found");
            }
        }
        [HttpDelete("{employeeId}")]
       public async Task<IActionResult> DeleteEmployeeAsync([FromRoute]string employeeId)
        {
            await _employeeRepository.DeleteEmployeeAsync(employeeId);
            return Ok();
        }
    }
}
