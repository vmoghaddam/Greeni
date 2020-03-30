using API.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;

namespace API.Repositories
{
    public class CompanyRepository : GenericRepository<Company>
    {
        public CompanyRepository(EPAGRIFFINEntities context)
        : base(context)
        {

        }

        public IQueryable<ViewCompany> GetViewCompanies()
        {
            return this.GetQuery<ViewCompany>();
        }
        public IQueryable<Company> GetCompanies()
        {
            return this.GetQuery<Company>();
        }
        
         
         
        
        public DbSet<ViewCompany> GetViewCompanyDbSet()
        {
            return this.context.ViewCompanies;
        }
       
        public Database GetDatabase()
        {
            //var ps=this.context.Materials.SqlQuery("select * from material")
            return this.context.Database;
        }
       
        public IQueryable<AspNetUser> GetAspNetUsers()
        {
            return this.GetQuery<AspNetUser>();
        }
        public AspNetUser GetAspNetUser(string email)
        {
            try
            {
                return this.GetQuery<AspNetUser>().Where(q => q.Email == email).FirstOrDefault();
            }
            catch (Exception ex)
            {
                return null;
            }

        }
        public AspNetUser AddRole(string email)
        {
            try
            {
                var user = this.context.AspNetUsers.FirstOrDefault(q => q.Email == email);
                var role = this.context.AspNetRoles.FirstOrDefault(q => q.Name == "Company");
                user.AspNetRoles.Add(role);
                return user;
            }
            catch (Exception ex)
            {
                return null;
            }

        }
        public AspNetRole GetCompanyRole()
        {
            return this.GetQuery<AspNetRole>().Where(q => q.Name == "Company").FirstOrDefault();
        }
        public IQueryable<AspNetRole> GetAspNetRoles()
        {
            return this.GetQuery<AspNetRole>();
        }
        
        public virtual void Insert(AspNetUser entity)
        {
            this.context.AspNetUsers.Add(entity);
        }
         
        
        public async Task<ViewCompany> GetViewCompanyById(int id)
        {

            return await this.context.ViewCompanies.FirstOrDefaultAsync(q => q.Id == id);
        }
        public async Task<ViewCompany> GetViewCompanyByEmail(string email)
        {
            return await this.context.ViewCompanies.FirstOrDefaultAsync(q => q.Email == email);
        }

        public async Task<ViewCompany> GetViewCompanyByMobile(string mobile)
        {
            return await this.context.ViewCompanies.FirstOrDefaultAsync(q => q.Mobile == mobile);
        }







        public async Task<Company> UpdateCompany(CompanyDto dto)
        {
            Company company = await this.context.Companies.Where(q => q.Id == dto.Id).FirstOrDefaultAsync();



            company.Name = dto.Name;
            company.Address = dto.Address;
            company.Phone = dto.Phone;
            company.Email = dto.Email;
            company.Website = dto.Website;
            company.Url = dto.Url;

            company.Twitter = dto.Twitter;
            company.LinkedIn = dto.LinkedIn;
            //  company.ImageUrl { get; set; }
            


            company.ZIPCode = dto.ZIPCode;
            company.City = dto.City;
            company.State = dto.State;
            company.CountryId = dto.CountryId;
            company.Remark = dto.Remark;

            

            return company;
        }


        

        public virtual CustomActionResult Validate()
        {

            //var c = this.context.ViewPersons.FirstOrDefault(q => q.Id != dto.Id && q.Email.ToLower() == dto.Email.ToLower());
            //if (c != null)
            //    return new CustomActionResult(HttpStatusCode.NotAcceptable, "This email address is already being used.");


            return new CustomActionResult(HttpStatusCode.OK, "");
        }




    }

    public class CompanyDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Remark { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public string Url { get; set; }
        public Nullable<System.DateTime> DateVerified { get; set; }
        public string Twitter { get; set; }
        public string LinkedIn { get; set; }
        public string ImageUrl { get; set; }
      



        public string ZIPCode { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string UserName { get; set; }
        public Nullable<int> CountryId { get; set; }
        


    }
}