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

	public class MessagesController : ApiController
	{
		private DataContext db = new DataContext();

		// GET: api/CollaborationRequests
		public IEnumerable<Message> Get()
		{
			return db.Messages.ToList();
		}

		// GET: api/CollaborationRequests/5
		public Message Get(Guid id)
		{
			return db.Messages.FirstOrDefault(p => p.ID == id);
		}

		// POST: api/CollaborationRequests
		public void Post([FromBody]Message value)
		{
			db.Messages.Add(value);
			db.SaveChanges();
		}

		// PUT: api/CollaborationRequests/5
		public void Put(Guid id, [FromBody]Message value)
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
