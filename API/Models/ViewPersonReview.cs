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
    
    public partial class ViewPersonReview
    {
        public string Network { get; set; }
        public int Id { get; set; }
        public int PersonId { get; set; }
        public string Body { get; set; }
        public string BodyAbs { get; set; }
        public string Title { get; set; }
        public Nullable<decimal> TotalRate { get; set; }
        public System.DateTime Date { get; set; }
        public Nullable<System.DateTime> DateConfirm { get; set; }
        public Nullable<int> ToPersonId { get; set; }
        public Nullable<int> ToPostId { get; set; }
        public Nullable<int> ToNetworkGroupId { get; set; }
        public Nullable<int> ToReviewId { get; set; }
        public string ToTarget { get; set; }
    }
}
