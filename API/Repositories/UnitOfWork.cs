using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace API.Repositories
{
    public class UnitOfWork : IDisposable
    {
        private EPAGRIFFINEntities context = null;
        public UnitOfWork()
        {
            context = new EPAGRIFFINEntities();
            context.Configuration.LazyLoadingEnabled = false;
        }
        private CompanyRepository companyRepository;
        public CompanyRepository CompanyRepository
        {
            get
            {

                if (this.companyRepository == null)
                {
                    this.companyRepository = new CompanyRepository(context);
                }
                return companyRepository;
            }
        }
        private PersonRepository personRepository;
        public PersonRepository PersonRepository
        {
            get
            {

                if (this.personRepository == null)
                {
                    this.personRepository = new PersonRepository(context);
                }
                return personRepository;
            }
        }


        private OrderRepository orderRepository;
        public OrderRepository OrderRepository
        {
            get
            {

                if (this.orderRepository == null)
                {
                    this.orderRepository = new OrderRepository(context);
                }
                return orderRepository;
            }
        }


        //private ReviewRepository reviewRepository;
        //public ReviewRepository ReviewRepository
        //{
        //    get
        //    {

        //        if (this.reviewRepository == null)
        //        {
        //            this.reviewRepository = new ReviewRepository(context);
        //        }
        //        return reviewRepository;
        //    }
        //}

        //private GenericRepository<ViewOption> viewOptionRepository;
        //public GenericRepository<ViewOption> ViewOptionRepository
        //{
        //    get
        //    {

        //        if (this.viewOptionRepository == null)
        //        {
        //            this.viewOptionRepository = new GenericRepository<ViewOption>(context);
        //        }
        //        return viewOptionRepository;
        //    }
        //}



        public async Task<CustomActionResult> SaveAsync()
        {
            // context.SaveChanges();
            var result = await context.SaveAsync();
            return result;
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}