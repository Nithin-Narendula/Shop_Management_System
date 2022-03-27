using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagementSystem.WebApi.Models;
namespace ShopManagementSystem.WebApi.Repositories
{
    public class DesignationRepository : IDesignationRepository
    {
        private readonly ETsroreDBContext _context;

        public DesignationRepository(ETsroreDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<DesignationDetail>> GetDesignationAsync()
        {
            var records = await _context.DesignationDetails.ToListAsync();
            return records;
        }

        public async Task<DesignationDetail> GetDesignation(string name)
        {
            var book = await _context.DesignationDetails.FindAsync(name);
            return book;
        }
        public async Task AddDesignation(DesignationDetail designation)
        {
            await _context.DesignationDetails.AddAsync(designation);
            await _context.SaveChangesAsync();
        }

        public async Task<DesignationDetail> UpdateDesignationDetailsAsync( DesignationDetail designation)
        {


            var emp = new DesignationDetail()
            {
               DesignationName = designation.DesignationName,
               RoleName = designation.RoleName,
               Department = designation.Department
            };

            _context.DesignationDetails.Update(emp);
            await _context.SaveChangesAsync();
            return emp;
        }

        public async Task DeleteDesignationAsync(string name)
        {
            var emp = new DesignationDetail()
            {
                DesignationName = name
            };
            _context.DesignationDetails.Remove(emp);
            await _context.SaveChangesAsync();
        }
    }
}
