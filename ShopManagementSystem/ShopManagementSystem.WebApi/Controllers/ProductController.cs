using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ShopManagementSystem.WebApi.Repositories;
using ShopManagementSystem.WebApi.Models;
using Microsoft.AspNetCore.Cors;

namespace ShopManagementSystem.WebApi.Controllers
{
    [EnableCors("AllowOrigin")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet("")]
        public async Task<IEnumerable<ProductDetail>> GetProductDetailsAsync()
        {
            var details = await _productRepository.GetProductDetailsAsync();
            return details;
        }
        [HttpGet("{itemId}")]
        [ActionName("Getproduct")]
        public async Task<IActionResult> Getproduct([FromRoute] string itemId)
        {
            var detail = await _productRepository.Getproduct(itemId);
            if (detail != null)
            {
                return Ok(detail);
            }
            return NotFound(" Not Found");
        }
        [HttpPost("")]
        public async Task<IActionResult> AddProduct([FromBody] ProductDetail product)
        {
            await _productRepository.AddProduct(product);
            return CreatedAtAction(nameof(Getproduct), new { itemId = product.ItemId }, product);
        }
        [HttpPut("")]
        public async Task<IActionResult> UpdateProductDetailsAsync([FromBody] ProductDetail product)
        {
            var detail = await _productRepository.UpdateProductDetailsAsync(product);
            if (detail != null)
            {
                return Ok(detail);
            }
            else
            {
                return NotFound("Card not found");
            }
        }
        [HttpDelete("{itemId}")]
        public async Task<IActionResult> DeleteEmployeeAsync([FromRoute] string itemId)
        {
            await _productRepository.DeleteProductAsync(itemId);
            return Ok();
        }
    }
}
