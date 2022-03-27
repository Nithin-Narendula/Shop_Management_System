using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagementSystem.WebApi.Models;
namespace ShopManagementSystem.WebApi.Repositories
{
    public class SupplierRepository : ISupplierRepository
    {
        private readonly ETsroreDBContext _context;

        public SupplierRepository(ETsroreDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SupplierDetail>> GetSupplierDetailsAsync()
        {
            var records = await _context.SupplierDetails.ToListAsync();
            return records;
        }

        public async Task<SupplierDetail> GetSupplier(string supplierId)
        {
            var book = await _context.SupplierDetails.FindAsync(supplierId);
            return book;
        }
        public async Task AddSupplier(SupplierDetail supplier)
        {
            await _context.SupplierDetails.AddAsync(supplier);
            await _context.SaveChangesAsync();
        }

        public async Task<SupplierDetail> UpdateSupplierDetailsAsync(SupplierDetail supplier)
        {


            var emp = new SupplierDetail()
            {

                SupplierId = supplier.SupplierId,
                SupplierCompany = supplier.SupplierCompany,
                ContactPerson = supplier.ContactPerson,
                Phone = supplier.Phone
            };

            _context.SupplierDetails.Update(emp);
            await _context.SaveChangesAsync();
            return emp;
        }

        public async Task DeleteSupplierAsync(string supplierId)
        {
            var emp = new SupplierDetail()
            {
                SupplierId = supplierId
            };
            _context.SupplierDetails.Remove(emp);
            await _context.SaveChangesAsync();
        }

    }
}
