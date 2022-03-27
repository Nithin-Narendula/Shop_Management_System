using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ShopManagementSystem.WebApi.Models;
using ShopManagementSystem.WebApi.Repositories;
using Microsoft.AspNetCore.Cors;

namespace ShopManagementSystem.WebApi.Controllers
{
    [EnableCors("AllowOrigin")]
    [Route("api/[controller]")]
    [ApiController]
    public class PurchaseController : ControllerBase
    {
        private readonly IPurchaseRepository _purchaseRepository;

        public PurchaseController(IPurchaseRepository purchaseRepository)
        {
            _purchaseRepository = purchaseRepository;
        }
        [HttpGet("")]
        public async Task<IEnumerable<PurchaseDetail>> GetPurchaseDetailsAsync()
        {
            var details = await _purchaseRepository.GetPurchaseDetailsAsync();
            return details;
        }
        [HttpGet("{productId}")]
        [ActionName("GetPurchase")]
        public async Task<IActionResult> GetPurchase([FromRoute] string productId)
        {
            var detail = await _purchaseRepository.GetPurchase(productId);
            if (detail != null)
            {
                return Ok(detail);
            }
            return NotFound("Not Found");
        }
        [HttpPost("")]
        public async Task<IActionResult> AddPurchase([FromBody] PurchaseDetail purchase)
        {
            await _purchaseRepository.AddPurchase(purchase);
            return CreatedAtAction(nameof(GetPurchase), new { productId = purchase.ProductId }, purchase);
        }
        [HttpPut("")]
        public async Task<IActionResult> UpdatePurchaseDetailsAsync([FromBody] PurchaseDetail purchase)
        {
            var detail = await _purchaseRepository.UpdatePurchaseDetailsAsync(purchase);
            if (detail != null)
            {
                return Ok(detail);
            }
            else
            {
                return NotFound("Not found");
            }
        }
        [HttpDelete("{productId}")]
        public async Task<IActionResult> DeletePurchaseAsync([FromRoute] string productId)
        {
            await _purchaseRepository.DeletePurchaseAsync(productId);
            return Ok();
        }
    }
}
