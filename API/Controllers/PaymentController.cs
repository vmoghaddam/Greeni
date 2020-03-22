using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.OData;

using System.Web.Http.Description;
using System.Collections.Generic;
using System;
using System.Data.Entity.Validation;
using System.Web.Http.Cors;
using System.Web.Http.ModelBinding;
using API.Repositories;
using API.Models;
using System.Text;
using System.Configuration;
using System.IO;
using Newtonsoft.Json;

namespace API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PaymentController : ApiController
    {
        private UnitOfWork unitOfWork = new UnitOfWork();

        public void CheshmaieKooretRoBazKon()
        {
            //ایجاد یک نمونه از سرویس درخواست پرداخت قبض درگاه پرداخت اینترنتی پارسیان
            
            using (var service = new ParsianRef.SaleServiceSoapClient())
            {

            }


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
