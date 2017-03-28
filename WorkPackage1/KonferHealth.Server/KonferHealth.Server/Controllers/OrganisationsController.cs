using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KonferHealth.Server.Controllers
{
    using Models;

    public class OrganisationsController : ApiController
    {
		private DataContext db = new DataContext();

		// GET: api/Organisations
		public IEnumerable<Organisation> Get()
        {
            return db.Organisations.ToList();
        }

        // GET: api/Organisations/5
        public Organisation Get(Guid id)
        {
            return db.Organisations.FirstOrDefault(p => p.ID == id);
        }

        // POST: api/Organisations
        public void Post([FromBody]Organisation value)
        {
			db.Organisations.Add(value);
			db.SaveChanges();
        }

        // PUT: api/Organisations/5
        public void Put(Guid id, [FromBody]Organisation value)
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
