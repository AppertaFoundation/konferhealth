using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KonferHealth.Server.Controllers
{
	using Models;

    public class PathwayController : ApiController
    {
        private DataContext db = new DataContext();

		// GET: api/Pathwayss
		public IEnumerable<Pathway> Get()
		{
			return db.Pathways.ToList();
		}

		// GET: api/Pathways/5
		public Pathway Get(Guid id)
		{
			return db.Pathways.FirstOrDefault(p => p.ID == id);
		}

		// POST: api/Pathways
		public void Post([FromBody]Pathway value)
		{
			db.Pathways.Add(value);
			db.SaveChanges();
		}

		// PUT: api/Pathways/5
		public void Put(Guid id, [FromBody]Pathway value)
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