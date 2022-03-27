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
    public class SalesProductController : ControllerBase
    {
        private readonly ISalesProductRepository _salesProductRepository;

        public SalesProductController(ISalesProductRepository salesProductRepository)
        {
            _salesProductRepository = salesProductRepository;
        }
        [HttpGet("")]
        public async Task<IEnumerable<SalesProductTable>> GetSalesProductDetailsAsync()
        {
            var details = await _salesProductRepository.GetSalesProductDetailsAsync();
            return details;
        }
        [HttpGet("{productId}")]
        [ActionName("GetSalesProduct")]
        public async Task<IActionResult> GetSalesProduct([FromRoute] string productId)
        {
            var detail = await _salesProductRepository.GetSalesProduct(productId);
            if (detail != null)
            {
                return Ok(detail);
            }
            return NotFound(" Not Found");
        }
        [HttpPost("")]
        public async Task<IActionResult> AddSalesProduct([FromBody] SalesProductTable salesProduct)
        {
            await _salesProductRepository.AddSalesProduct(salesProduct);
            return CreatedAtAction(nameof(GetSalesProduct), new { productId = salesProduct.ProductId }, salesProduct);
        }
        [HttpPut("")]
        public async Task<IActionResult> UpdateSalesProductDetailsAsync([FromBody] SalesProductTable salesProduct)
        {
            var detail = await _salesProductRepository.UpdateSalesProductDetailsAsync(salesProduct);
            if (detail != null)
            {
                return Ok(detail);
            }
            else
            {
                return NotFound("not found");
            }
        }
        [HttpDelete("{productId}")]
        public async Task<IActionResult> DeleteSalesProductAsync([FromRoute] string productId)
        {
            await _salesProductRepository.DeleteSalesProductAsync(productId);
            return Ok();
        }
    }
}
