﻿using API.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Web;

using System.Data.Entity.Infrastructure;

namespace API.Repositories
{
    public class Repository
    {
        internal EPAGRIFFINEntities context;
        public Repository(EPAGRIFFINEntities context)
        {
            this.context = context;
            

        }


      


    }
}