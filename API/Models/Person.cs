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
    
    public partial class Person
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Person()
        {
            this.PersonNetworks = new HashSet<PersonNetwork>();
            this.PersonAwards = new HashSet<PersonAward>();
            this.PersonCertifications = new HashSet<PersonCertification>();
            this.PersonPatents = new HashSet<PersonPatent>();
            this.PersonProjects = new HashSet<PersonProject>();
            this.PersonPublications = new HashSet<PersonPublication>();
            this.Reviews = new HashSet<Review>();
            this.UserContentActivities = new HashSet<UserContentActivity>();
        }
    
        public int Id { get; set; }
        public System.DateTime DateCreate { get; set; }
        public int SexId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Nullable<System.DateTime> DateBirth { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string Address { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string Remark { get; set; }
        public string Nickname { get; set; }
        public string IDNo { get; set; }
        public string UserId { get; set; }
        public string ImageUrl { get; set; }
        public Nullable<int> CountryId { get; set; }
        public string ZIPCode { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Company { get; set; }
        public string University { get; set; }
        public string Website { get; set; }
        public string Twitter { get; set; }
        public string LinkedIn { get; set; }
        public string Headline { get; set; }
        public Nullable<int> DegreeId { get; set; }
        public Nullable<int> PositionId { get; set; }
        public Nullable<System.DateTime> DateJoin { get; set; }
        public Nullable<int> FieldOfStudyId { get; set; }
        public Nullable<int> TempId { get; set; }
        public string Education2 { get; set; }
        public string Location2 { get; set; }
        public string Position2 { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PersonNetwork> PersonNetworks { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PersonAward> PersonAwards { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PersonCertification> PersonCertifications { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PersonPatent> PersonPatents { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PersonProject> PersonProjects { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PersonPublication> PersonPublications { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Review> Reviews { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserContentActivity> UserContentActivities { get; set; }
    }
}
