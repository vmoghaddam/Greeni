using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.OData;
using API.Models;
using System.Web.Http.Description;
using System.Collections.Generic;
using System;
using System.Data.Entity.Validation;
using System.Web.Http.Cors;
using System.Web.Http.ModelBinding;
using API.Repositories;
using System.Text;
using System.Configuration;

namespace API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BaseController : ApiController
    {
        private UnitOfWork unitOfWork = new UnitOfWork();

        [Route("api/options/{parentId}")]
        [EnableQuery]
        public IQueryable<ViewOption> GetOptionsByParentId(int parentId)
        {

            return unitOfWork.ViewOptionRepository.GetQuery().Where(q => q.ParentId == parentId).OrderBy(q=>q.OrderIndex).ThenBy(q=>q.Title);
        }

        [Route("api/countries")]
        [EnableQuery]
        public IQueryable<ViewCountry> GetCountries()
        {

            return unitOfWork.ViewCountryRepository.GetQuery().OrderBy(q=>q.Name);
        }

        [Route("api/jobs")]
        [EnableQuery]
        public IQueryable<AssignedRole> GetJobs()
        {

            return unitOfWork.AssignedRoleRepository.GetQuery().OrderBy(q => q.AssignedRole1);
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                //db.Dispose();
                unitOfWork.Dispose();
            }
            base.Dispose(disposing);
        }



    }
}
