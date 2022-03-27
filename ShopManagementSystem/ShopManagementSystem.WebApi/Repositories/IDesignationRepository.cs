using ShopManagementSystem.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopManagementSystem.WebApi.Repositories
{
    public interface IDesignationRepository
    {
        Task<IEnumerable<DesignationDetail>> GetDesignationAsync();
        Task<DesignationDetail> GetDesignation(string name);
        Task AddDesignation(DesignationDetail designation);
        Task<DesignationDetail> UpdateDesignationDetailsAsync(DesignationDetail designation);
        Task DeleteDesignationAsync(string name);


    }
}
