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
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;

using System.Web;

using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json;

namespace API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BaseController : ApiController
    {
        private UnitOfWork unitOfWork = new UnitOfWork();

        [Route("api/company/register")]
        [AcceptVerbs("POST")]
        public async Task<IHttpActionResult> PostRegisterCompany(dynamic dto)
        {
            // return Ok(client);
            if (dto == null)
                return Exceptions.getNullException(ModelState);
            if (!ModelState.IsValid)
            {
                // return BadRequest(ModelState);
                return Exceptions.getModelValidationException(ModelState);
            }
            var validate = unitOfWork.CompanyRepository.Validate();
            if (validate.Code != HttpStatusCode.OK)
                return validate;
            var id = Convert.ToInt32(dto.id);
            var name = dto.name;
            var email = Convert.ToString(dto.email);
            var password = dto.password;
            var repassword = dto.confirmPassword;
            var website = dto.website;
            var address = dto.address;
            var zipCode = dto.zipCode;
            var firstName = dto.firstName;
            var lastName = dto.lastName;
            var phone = dto.phone;
            var phone2 = dto.phone2;
            var phone3 = dto.phone3;
            var mobile = dto.mobile;
            var nid = dto.NID;
            

            Company company = new Company()
            {
                Name = name,
                Email = email,
                Website = website,
                Address = address,
                DateJoin = DateTime.Now,
                ImageUrl = "_x2.png",
                NID=nid,
                 FirstName=firstName,
                  LastName=lastName,
                  Mobile=mobile,
                  ZIPCode=zipCode,
                   Phone2=phone2,
                    Phone3=phone3,
               
            };

            unitOfWork.CompanyRepository.Insert(company);

            var saveResult = await unitOfWork.SaveAsync();
            if (saveResult.Code != HttpStatusCode.OK)
                return saveResult;
            //RegisterBindingModel
            AccountController ac = new AccountController();
            var register = await ac.RegisterInternal(new RegisterBindingModel()
            {
                ConfirmPassword = dto.confirmPassword,
                Password = dto.password,
                Email = email,

            });

            var user = (AspNetUser)unitOfWork.CompanyRepository.AddRole(email);
            // var user = (AspNetUser)    unitOfWork.CompanyRepository.GetAspNetUser(email);
            company.UserId = user.Id;
            //var role =    unitOfWork.CompanyRepository.GetCompanyRole();
            //user.AspNetRoles.Add(new AspNetRole()
            //{

            //});
            //user.AspNetRoles.Add(role);


            saveResult = await unitOfWork.SaveAsync();
            if (saveResult.Code != HttpStatusCode.OK)
                return saveResult;

            return Ok(company);
        }

        [Route("api/company/update")]
        [AcceptVerbs("POST")]
        public async Task<IHttpActionResult> PostUpdateCompany( CompanyDto dto)
        {
            // return Ok(client);
            if (dto == null)
                return Exceptions.getNullException(ModelState);
            if (!ModelState.IsValid)
            {
                // return BadRequest(ModelState);
                return Exceptions.getModelValidationException(ModelState);
            }

            Company company = await unitOfWork.CompanyRepository.UpdateCompany(dto);

            var saveResult = await unitOfWork.SaveAsync();
            if (saveResult.Code != HttpStatusCode.OK)
                return saveResult;

            return Ok(company);
        }


        [Route("api/company/{id}")]
        public async Task<IHttpActionResult> GetCompanyProfile(int id)
        {
             

            var company = await unitOfWork.CompanyRepository.GetViewCompanyById(id);
            if (company == null)
                return NotFound();
           
            
            //$scope.profile.data.slider
            return Ok(company);

        }
        [Route("api/companies")]
        [EnableQuery]
        public IQueryable<ViewCompany> GetCompanies()
        {

            return unitOfWork.CompanyRepository.GetViewCompanies().OrderBy(q => q.Name);
        }
        private List<string> GetErrorResult(IdentityResult result)
        {

            var _result = new List<string>();
            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (string error in result.Errors)
                    {
                        _result.Add(error);
                    }
                }



                return _result;
            }

            return null;
        }
        [Route("api/password/change")]
        [EnableQuery]
        public async Task<IHttpActionResult> PostChangePassword(dynamic dto)
        {
            var password = Convert.ToString(dto.Password);
            var old = Convert.ToString(dto.Old);
            var username = Convert.ToString(dto.UserName);

            ApplicationUserManager UserManager = Request.GetOwinContext().GetUserManager<ApplicationUserManager>();
            ApplicationUser user = await UserManager.FindByNameAsync(username);
            IdentityResult result = await UserManager.ChangePasswordAsync(user.Id, old, password);
            if (!result.Succeeded)
            {
                return new CustomActionResult(HttpStatusCode.BadRequest, GetErrorResult(result));

            }

            return Ok(true);
        }

        //============================================//
        //============================================//
        //============================================//
        //============================================//
        //============================================//

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
