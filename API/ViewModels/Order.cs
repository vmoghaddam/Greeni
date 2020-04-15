using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.ViewModels
{
    public class OrderDto
    {
        public int Id { get; set; }
        public DateTime? DateG { get; set; }
        public decimal? Date { get; set; }
        public string Mobile { get; set; }
        public string Name { get; set; }
        public string Remark { get; set; }
        public decimal? Tax { get; set; }
        public decimal? Discount { get; set; }
        public decimal? Transport { get; set; }
        public int? StatusId { get; set; }
        public int? PersonId { get; set; }
        public string AuthId { get; set; }
        public string Role { get; set; }
        public int SMS { get; set; }
        List<OrderItemDto> orderItems = null;
        public List<OrderItemDto> OrderItems
        {
            get
            {
                if (orderItems == null)
                    orderItems = new List<OrderItemDto>();
                return orderItems;
            }
            set { orderItems = value; }
        }

        public static void Fill(Models.Order entity, ViewModels.OrderDto order)
        {
            entity.Id = order.Id;
            entity.DateG = order.DateG;
            entity.Date = order.Date;
            entity.Mobile = order.Mobile;
            entity.Name = order.Name;
            entity.Remark = order.Remark;
            entity.Tax = order.Tax;
            entity.Discount = order.Discount;
            entity.Transport = order.Transport;
            entity.StatusId = order.StatusId;
            entity.PersonId = order.PersonId;
            entity.UserId = order.AuthId;

        }
        public static void FillDto(Models.Order entity, ViewModels.OrderDto order)
        {
            order.Id = entity.Id;
            order.DateG = entity.DateG;
            order.Date = entity.Date;
            order.Mobile = entity.Mobile;
            order.Name = entity.Name;
            order.Remark = entity.Remark;
            order.Tax = entity.Tax;
            order.Discount = entity.Discount;
            order.Transport = entity.Transport;
            order.StatusId = entity.StatusId;
            order.PersonId = entity.PersonId;
            order.AuthId = entity.UserId;
        }
    }


    public class OrderItemDto
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal PriceUnit { get; set; }
        public decimal DiscountUnit { get; set; }
        public string Remark { get; set; }
        public int? StatusId { get; set; }
        public static void Fill(Models.OrderItem entity, ViewModels.OrderItemDto orderitem)
        {
            entity.Id = orderitem.Id;
            entity.OrderId = orderitem.OrderId;
            entity.ProductId = orderitem.ProductId;
            entity.Quantity = orderitem.Quantity;
            entity.PriceUnit = orderitem.PriceUnit;
            entity.DiscountUnit = orderitem.DiscountUnit;
            entity.Remark = orderitem.Remark;
            entity.StatusId = orderitem.StatusId;
        }
        public static void FillDto(Models.OrderItem entity, ViewModels.OrderItemDto orderitem)
        {
            orderitem.Id = entity.Id;
            orderitem.OrderId = entity.OrderId;
            orderitem.ProductId = entity.ProductId;
            orderitem.Quantity = entity.Quantity;
            orderitem.PriceUnit = entity.PriceUnit;
            orderitem.DiscountUnit = entity.DiscountUnit;
            orderitem.Remark = entity.Remark;
            orderitem.StatusId = entity.StatusId;
        }
    }


    public class ViewOrderDto
    {
        public decimal Value { get; set; }
        public int Id { get; set; }
        public decimal? Date { get; set; }
        public string DateStr { get; set; }

        public string Status { get; set; }

        public Models.ViewOrder Order { get; set; }

        public List<Models.ViewOrderItem> Items = new List<Models.ViewOrderItem>();
    }


}