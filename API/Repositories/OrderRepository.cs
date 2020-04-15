using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Net;

namespace API.Repositories
{
    public class OrderRepository : GenericRepository<Order>
    {
        public OrderRepository(EPAGRIFFINEntities context)
          : base(context)
        {
        }
        public IQueryable<ViewOrderItem> GetViewOrderItemByMobile(string mobile)
        {

            return   this.context.ViewOrderItems.Where(q => q.Mobile == mobile || q.Mobile == "0" + mobile);
        }
        public IQueryable<ViewOrderItem> GetViewOrderItemByUserId(string userid)
        {

            return this.context.ViewOrderItems.Where(q => q.UserId==userid);
        }
        public IQueryable<ViewOrder> GetViewOrdersByMobile(string mobile)
        {

            return this.context.ViewOrders.Where(q => q.Mobile == mobile || q.Mobile=="0"+mobile);
        }
        public IQueryable<ViewOrder> GetViewOrdersByUserId(string userid)
        {

            return this.context.ViewOrders.Where(q => q.UserId==userid);
        }
        internal async Task<CustomActionResult> RemoveOrderItems(int orderId)
        {
            var orderItems = await this.context.OrderItems.Where(q => q.OrderId == orderId).ToListAsync();

            this.context.OrderItems.RemoveRange(orderItems);
            return new CustomActionResult(HttpStatusCode.OK, "");
        }
        public IQueryable<ViewOrder> GetViewOrders()
        {
            return this.GetQuery<ViewOrder>();
        }
        public IQueryable<ViewOrderItem> GetViewOrderItems()
        {
            return this.GetQuery<ViewOrderItem>();
        }

        public virtual void Insert(Models.OrderItem entity)
        {
            this.context.OrderItems.Add(entity);
        }

        ///////////////////////////
    }
}