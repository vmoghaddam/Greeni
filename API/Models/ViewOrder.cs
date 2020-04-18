//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace API.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ViewOrder
    {
        public int Id { get; set; }
        public Nullable<System.DateTime> DateG { get; set; }
        public Nullable<decimal> Date { get; set; }
        public string DateStr { get; set; }
        public string Mobile { get; set; }
        public string Name { get; set; }
        public string Remark { get; set; }
        public Nullable<decimal> Tax { get; set; }
        public Nullable<decimal> Discount { get; set; }
        public decimal Transport { get; set; }
        public Nullable<int> StatusId { get; set; }
        public Nullable<int> PersonId { get; set; }
        public string Status { get; set; }
        public Nullable<double> TotalAmount { get; set; }
        public Nullable<double> TotalDiscount { get; set; }
        public Nullable<double> TotalAmountInit { get; set; }
        public string UserId { get; set; }
        public string AdditionalData { get; set; }
        public Nullable<int> PayInitStatus { get; set; }
        public string PayInitMessage { get; set; }
        public string PayInitToken { get; set; }
        public string PayDoneToken { get; set; }
        public string PayDoneOrderId { get; set; }
        public string PayDoneTerminalNo { get; set; }
        public string PayDoneRRN { get; set; }
        public string PayDoneStatus { get; set; }
        public string PayDoneAmount { get; set; }
        public string PayDoneHashCardNumber { get; set; }
        public Nullable<System.DateTime> PayInitDate { get; set; }
        public Nullable<System.DateTime> PayDoneDate { get; set; }
        public Nullable<System.DateTime> PayConfirmDate { get; set; }
        public string PayConfirm { get; set; }
        public string TspToken { get; set; }
        public string PayConfirmCardMask { get; set; }
        public string PayConfirmToken { get; set; }
        public string Company { get; set; }
        public string CompanyManager { get; set; }
        public string CompanyMobile { get; set; }
        public string CompanyPhone { get; set; }
        public string CompanyAddress { get; set; }
        public string CompanyCity { get; set; }
        public string CompanyState { get; set; }
        public string CompanyLocation { get; set; }
        public Nullable<int> CompanyId { get; set; }
        public string CompanyZIPCode { get; set; }
    }
}
