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
    public class SupplierLedgerController : ControllerBase
    {
        private readonly ISupplierLedgerRepository _supplierLedgerRepository;

        public SupplierLedgerController(ISupplierLedgerRepository supplierLedgerRepository)
        {
            _supplierLedgerRepository = supplierLedgerRepository;
        }
        [HttpGet("")]
        public async Task<IEnumerable<SupplierLedgerDetail>> GetSuppLedgDetailsAsync()
        {
            var details = await _supplierLedgerRepository.GetSuppLedgDetailsAsync();
            return details;
        }
        [HttpGet("{invoiceId}")]
        [ActionName("GetSuppLedg")]
        public async Task<IActionResult> GetSuppLedg([FromRoute] string invoiceId)
        {
            var detail = await _supplierLedgerRepository.GetSuppLedg(invoiceId);
            if (detail != null)
            {
                return Ok(detail);
            }
            return NotFound("Card Not Found");
        }
        [HttpPost("")]
        public async Task<IActionResult> AddSuppLedge([FromBody] SupplierLedgerDetail supplierLedger)
        {
            await _supplierLedgerRepository.AddSuppLedge(supplierLedger);
            return CreatedAtAction(nameof(GetSuppLedg), new { invoiceId = supplierLedger.InvoiceId }, supplierLedger);
        }
        [HttpPut("")]
        public async Task<IActionResult> UpdateSuppLedgeDetailsAsync([FromBody] SupplierLedgerDetail supplierLedger)
        {
            var detail = await _supplierLedgerRepository.UpdateSuppLedgeDetailsAsync(supplierLedger);
            if (detail != null)
            {
                return Ok(detail);
            }
            else
            {
                return NotFound("Card not found");
            }
        }
        [HttpDelete("{invoiceId}")]
        public async Task<IActionResult> DeleteEmployeeAsync([FromRoute] string invoiceId)
        {
            await _supplierLedgerRepository.DeleteSuppLedgAsync(invoiceId);
            return Ok();
        }
    }
}
