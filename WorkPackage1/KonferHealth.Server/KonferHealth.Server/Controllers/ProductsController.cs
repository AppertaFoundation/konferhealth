using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KonferHealth.Server.Controllers
{
    using Models;

    public class ProductsController : ApiController
    {
		private DataContext db = new DataContext();

        // GET: api/Products
        public IEnumerable<Product> Get()
        {
			return db.Products.ToList();
        }

        // GET: api/Products/5
        public Product Get(Guid id)
        {
			return db.Products.FirstOrDefault(p => p.ID == id);
        }

        // POST: api/Products
        public void Post([FromBody]Product value)
        {
			db.Products.Add(value);
			db.SaveChanges();
        }

        // PUT: api/Products/5
        public void Put(Guid id, [FromBody]Product value)
        {
			db.Entry(value).State = System.Data.Entity.EntityState.Modified;
			db.SaveChanges();
        }

		 /// <summary>
        /// Clean up
        /// </summary>
        /// <param name="disposing"></param>
        protected override void Dispose(bool disposing)
		{
			if (disposing)
			{

				db.Dispose();
			}

			base.Dispose(disposing);
		}
    }
}
