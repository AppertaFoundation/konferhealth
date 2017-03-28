using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KonferHealth.Server.Controllers
{
    using Models;
	using Tasks;

    public class CollaborationRequestsController : ApiController
    {
		private DataContext db = new DataContext();

		// GET: api/CollaborationRequests
		public IEnumerable<CollaborationRequest> Get()
        {
            return db.CollaborationRequests.ToList();
        }

        // GET: api/CollaborationRequests/5
        public CollaborationRequest Get(Guid id)
        {
            return db.CollaborationRequests.FirstOrDefault(p => p.ID == id);
        }

        // POST: api/CollaborationRequests
        public void Post([FromBody]CollaborationRequest value)
        {
			db.CollaborationRequests.Add(value);
			db.SaveChanges();
        }

        // PUT: api/CollaborationRequests/5
        public void Put(Guid id, [FromBody]CollaborationRequest value)
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
