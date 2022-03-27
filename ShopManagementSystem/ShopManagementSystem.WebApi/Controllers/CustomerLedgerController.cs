using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ShopManagementSystem.WebApi.Models;
using ShopManagementSystem.WebApi.Repositories;
namespace ShopManagementSystem.WebApi.Controllers
{
    [EnableCors("AllowOrigin")]
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerLedgerController : ControllerBase
    {
        private readonly ICustomerLedgerRepository _customerLedgerRepository;

        public CustomerLedgerController(ICustomerLedgerRepository customerLedgerRepository)
        {
            _customerLedgerRepository = customerLedgerRepository;
        }
        [HttpGet("")]
        public async Task<IEnumerable<CustomerLedgerDetail>> GetCustomerLegerDetailsAsync()
        {
            var details = await _customerLedgerRepository.GetCustomerLegerDetailsAsync();
            return details;
        }
        [HttpGet("{invoiceId}")]
        [ActionName("GetCustomerLedger")]
        public async Task<IActionResult> GetCustomerLedger([FromRoute] string invoiceId)
        {
            var detail = await _customerLedgerRepository.GetCustomerLedger(invoiceId);
            if (detail != null)
            {
                return Ok(detail);
            }
            return NotFound(" Not Found");
        }
        [HttpPost("")]
        public async Task<IActionResult> AddCustomerLedger([FromBody] CustomerLedgerDetail customerLedger)
        {
            await _customerLedgerRepository.AddCustomerLedger(customerLedger);
            //return Ok("created");
            return CreatedAtAction(nameof(GetCustomerLedger), new { invoiceId = customerLedger.InvoiceId }, customerLedger);
        }
        [HttpPut("")]
        public async Task<IActionResult> UpdateCustomerLedgerDetailsAsync([FromBody] CustomerLedgerDetail customerLedger)
        {
            var detail = await _customerLedgerRepository.UpdateCustomerLedgerDetailsAsync(customerLedger);
            if (detail != null)
            {
                return Ok(detail);
            }
            else
            {
                return NotFound("not found");
            }
        }
        [HttpDelete("{invoiceId}")]
        public async Task<IActionResult> DeleteCustomerLedgerAsync([FromRoute] string invoiceId)
        {
            await _customerLedgerRepository.DeleteCustomerLedgerAsync(invoiceId);
            return Ok();
        }
    }
}
