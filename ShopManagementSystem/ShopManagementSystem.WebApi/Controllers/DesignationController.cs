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
    public class DesignationController : ControllerBase
    {
        private readonly IDesignationRepository _designationRepository;

        public DesignationController(IDesignationRepository designationRepository)
        {
            _designationRepository = designationRepository;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetDesignationDetailsAsync()
        {
            var details = await _designationRepository.GetDesignationAsync();
            return Ok(details);
        }
        [HttpGet("{name}")]
        [ActionName("GetDesignation")]
        public async Task<IActionResult> GetDesignation([FromRoute] string name)
        {
            var detail = await _designationRepository.GetDesignation(name);
            if (detail != null)
            {
                return Ok(detail);
            }
            return NotFound("Not Found");
        }
        [HttpPost("")]
        public async Task<IActionResult> AddDesignation([FromBody] DesignationDetail designation)
        {
            await _designationRepository.AddDesignation(designation);
            return CreatedAtAction(nameof(GetDesignation), new { name = designation.DesignationName}, designation);
        }
        [HttpPut("")]
        public async Task<IActionResult> UpdateDesignationDetailsAsync([FromBody] DesignationDetail designation)
        {
            var detail = await _designationRepository.UpdateDesignationDetailsAsync(designation);
            if (detail != null)
            {
                return Ok(detail);
            }
            else
            {
                return NotFound("Not found");
            }
        }
        [HttpDelete("{name}")]
        public async Task<IActionResult> DeleteDesignationAsync([FromRoute] string name)
        {
            await _designationRepository.DeleteDesignationAsync(name);
            return Ok();
        }
    }
}
