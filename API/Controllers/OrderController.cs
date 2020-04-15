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
    public class OrderController : ApiController
    {
        private UnitOfWork unitOfWork = new UnitOfWork();

       
        public string sendOrderNo(string mobile, string code,string name )
        {
            try
            {
                var apikey = "4F7A30767633416261536630725574337233714A692B645A4372644C385A616D";
                var sender = "1000596446";
                var receptor = mobile;
                var message = name+" عزیز،";
                message += "سفارش شما برای خرید محصولات گرینی مکس با شماره " + code + " ثبت شد.";
                var api = new Kavenegar.KavenegarApi(apikey);

                var result = api.Send(sender, receptor, message);
                return "1";
            }
            catch
            {
                return "0";
            }
        }

        public string sendOrderNoX(string mobile,string code,string name)
        {
            try
            {
                name = "مشتری";
                var serviceUrl = "https://api.kavenegar.com/v1/4F7A30767633416261536630725574337233714A692B645A4372644C385A616D/verify/lookup.json?receptor="+mobile+"&token="+name+ "&token2="+code+"&template=orderno";
                WebRequest request = WebRequest.Create(serviceUrl );
                // If required by the server, set the credentials.  
                request.Credentials = CredentialCache.DefaultCredentials;
                // Get the response.  
                WebResponse response = request.GetResponse();
                // Display the status.  
                //Console.WriteLine(((HttpWebResponse)response).StatusDescription);
                // Get the stream containing content returned by the server.  
                Stream dataStream = response.GetResponseStream();
                // Open the stream using a StreamReader for easy access.  
                StreamReader reader = new StreamReader(dataStream);
                // Read the content.  
                string responseFromServer = reader.ReadToEnd();
                // Display the content.  
                //Console.WriteLine(responseFromServer);
                // Clean up the streams and the response.  
                reader.Close();
                response.Close();
                dynamic jsonResponse = JsonConvert.DeserializeObject(responseFromServer);
                 
                return responseFromServer;
            }
            catch (Exception ex)
            {
                try
                {
                    
                    return string.Empty;
                }
                catch (Exception fex)
                {
                    return string.Empty;
                }


            }
        }

        [Route("api/orders/save")]

        [AcceptVerbs("POST")]
        public async Task<IHttpActionResult> PostOrder(ViewModels.OrderDto dto)
        {

            if (dto == null)
                return Exceptions.getNullException(ModelState);
            if (!ModelState.IsValid)
            {

                return Exceptions.getModelValidationException(ModelState);
            }


            Order entity = null;

            if (dto.Id == -1)
            {
                entity = new Order();
                unitOfWork.OrderRepository.Insert(entity);
            }

            else
            {
                entity = await unitOfWork.OrderRepository.GetByID(dto.Id);

            }

            if (entity == null)
                return Exceptions.getNotFoundException();

            ViewModels.OrderDto.Fill(entity, dto);
            entity.DateG = DateTime.Now;
            entity.Date = Convert.ToDecimal(Utils.DateTimeUtil.GetPersianDateTimeDigital((DateTime)entity.DateG));
            //Person person = await unitOfWork.PersonRepository.GetViewPersonByMobile(dto.Mobile);
            //if (person == null)
            //{
            //    person = new Person()
            //    {
            //        Mobile = dto.Mobile,
            //        FirstName = dto.Name,
            //        DateCreate = DateTime.Now,
            //        IsActive = true,
            //        IsDeleted = false,
            //    };
            //    unitOfWork.PersonRepository.Insert(person);

            //}
            //entity.Person = person;


            if (dto.Id != -1)
            {
                await unitOfWork.OrderRepository.RemoveOrderItems(dto.Id);
            }

            foreach (var x in dto.OrderItems)
            {
                var item = new OrderItem();
                ViewModels.OrderItemDto.Fill(item, x);
                unitOfWork.OrderRepository.Insert(item);
            }

            var saveResult = await unitOfWork.SaveAsync();
            if (saveResult.Code != HttpStatusCode.OK)
                return saveResult;

            if (dto.SMS == 1)
            {
                sendOrderNoX(dto.Mobile, entity.Id.ToString(), dto.Name);
            }



            return Ok(entity);
        }

        [Route("api/orders/{mobile}")]

        [AcceptVerbs("GET")]
        public async Task<IHttpActionResult> GetOrderItems(string mobile)
        {
            var orders = await unitOfWork.OrderRepository.GetViewOrdersByMobile(mobile).OrderByDescending(q => q.Date).ToListAsync();
            var items = await unitOfWork.OrderRepository.GetViewOrderItemByMobile(mobile).OrderBy(q => q.ProductId).ToListAsync();
            var result = new List<ViewModels.ViewOrderDto>();
            foreach (var x in orders)
            {
                var oitems = items.Where(q => q.OrderId == x.Id).ToList();
                var oitems_value = oitems.Sum(q => q.FinalPriceUnit  );
                var odiscount = (x.Discount == null) ? 0 : ((decimal)x.Discount * oitems_value / 100);
                var tax = x.Tax == null ? 0 : (decimal)x.Tax;
                var transport = x.Transport == null ? 0 : (decimal)x.Transport;
                var finalvalue = (decimal)oitems_value - (decimal)odiscount + tax + transport;
                result.Add(new ViewModels.ViewOrderDto()
                {
                    Order = x,
                    Date = x.Date,
                    DateStr = x.DateStr,
                    Id = x.Id,
                    Status = x.Status,
                    Value = finalvalue,
                    Items = oitems

                });

            }

            return Ok(result);
        }

        [Route("api/orders/user/{id}")]

        [AcceptVerbs("GET")]
        public async Task<IHttpActionResult> GetOrderItemsByUserId(string id)
        {
            var orders = await unitOfWork.OrderRepository.GetViewOrdersByUserId(id).OrderByDescending(q => q.Date).ToListAsync();
            var items = await unitOfWork.OrderRepository.GetViewOrderItemByUserId(id).OrderBy(q => q.ProductId).ToListAsync();
            var result = new List<ViewModels.ViewOrderDto>();
            foreach (var x in orders)
            {
                var oitems = items.Where(q => q.OrderId == x.Id).ToList();
                var oitems_value = oitems.Sum(q => q.FinalPriceUnit);
                var odiscount = (x.Discount == null) ? 0 : ((decimal)x.Discount * oitems_value / 100);
                var tax = x.Tax == null ? 0 : (decimal)x.Tax;
                var transport = x.Transport == null ? 0 : (decimal)x.Transport;
                var finalvalue = (decimal)oitems_value - (decimal)odiscount + tax + transport;
                result.Add(new ViewModels.ViewOrderDto()
                {
                    Order=x,
                    Date = x.Date,
                    DateStr = x.DateStr,
                    Id = x.Id,
                    Status = x.Status,
                    Value = finalvalue,
                    Items = oitems

                });

            }

            return Ok(result);
        }

        [Route("api/orders/id/{id}")]

        [AcceptVerbs("GET")]
        public async Task<IHttpActionResult> GetOrderById(int id)
        {
            var order = await unitOfWork.OrderRepository.GetViewOrders().Where(q => q.Id == id).FirstOrDefaultAsync();
            var orderItems = await unitOfWork.OrderRepository.GetViewOrderItems().Where(q => q.OrderId == id).ToListAsync();

            var result = new
            {
                order,
                orderItems
            };

            return Ok(result);
        }

        [Route("api/orders")]
        [EnableQuery]
        public IQueryable<ViewOrder> GetOrders()
        {

            return unitOfWork.OrderRepository.GetViewOrders().OrderByDescending(q => q.Date);
        }
        [Route("api/order/Items/{Id}")]
        [EnableQuery]
        public IQueryable<ViewOrderItem> GetOrderItems(int Id)
        {

            return unitOfWork.OrderRepository.GetViewOrderItems().Where(q=>q.OrderId==Id);
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
