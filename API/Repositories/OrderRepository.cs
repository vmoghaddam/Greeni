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

            return   this.context.ViewOrderItems.Where(q => q.Mobile == mobile);
        }
        public IQueryable<ViewOrder> GetViewOrdersByMobile(string mobile)
        {

            return this.context.ViewOrders.Where(q => q.Mobile == mobile);
        }
        internal async Task<CustomActionResult> RemoveOrderItems(int orderId)
        {
            var orderItems = await this.context.OrderItems.Where(q => q.OrderId == orderId).ToListAsync();

            this.context.OrderItems.RemoveRange(orderItems);
            return new CustomActionResult(HttpStatusCode.OK, "");
        }

        public virtual void Insert(Models.OrderItem entity)
        {
            this.context.OrderItems.Add(entity);
        }

        ///////////////////////////
    }
}